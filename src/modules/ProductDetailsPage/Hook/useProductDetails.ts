import { useEffect, useState } from 'react';
import { ProductDetails } from '@/shared/types';
import { getProductDetails } from '@/services/products';

export function useProductDetails(productId?: string, category?: string) {
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    if (!productId || !category) return;

    setIsLoading(true);
    setHasError(false);

    try {
      const products = await getProductDetails(category);

      const found = products.find(
        p => p.id === productId || p.itemId === productId,
      );
      if (found) {
        setProduct(found as unknown as ProductDetails);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId, category]);

  return {
    product,
    isLoading,
    hasError,
    loadData: fetchData,
  };
}
