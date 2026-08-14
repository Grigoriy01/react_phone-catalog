import { useEffect, useState } from 'react';

import { Product } from '../../../../shared/types';
import { ProductsSlider } from '../../../../shared/components/ProductsSlider';

import { sortByYear } from '../../../../utils';
import { getProducts } from '../../../../services/products';

import './BrandNewModels.scss';

export const BrandNewModels = () => {
  const [products, setProducts] = useState<Product[] | null>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
        setHasError(null);
      } catch {
        setHasError('/public/img/product-not-found.png');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const visibleNewModels = sortByYear(products);

  return (
    <section className="brand-new-models">
      <ProductsSlider
        hasError={hasError}
        isLoading={isLoading}
        title="Brand New Models"
        visibleNewModels={visibleNewModels}
      />
    </section>
  );
};
