import { useEffect, useState } from 'react';
import { getProducts } from '../../../../services/products';
import { Product } from '../../../../shared/types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    products,
    isLoading,
    hasError,
    loadData: fetchData,
  };
}
