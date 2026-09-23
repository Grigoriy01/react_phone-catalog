import { useProducts } from './hooks/useProducts';
import { getProductsWithHotPrices, sortByYear } from '@/utils';

import { Hero } from './components/Hero';
import { ProductsSlider } from '@/shared/components/ProductsSlider';
import { ShopByCategory } from './components/ShopByCategory';

import './HomePage.scss';
import { useMemo } from 'react';

export const HomePage = () => {
  const { products, isLoading, loadData, hasError } = useProducts();

  const visibleNewModels = useMemo(() => sortByYear(products), [products]);

  const visibleHotPrices = useMemo(
    () => getProductsWithHotPrices(products),
    [products],
  );

  const categoriesCount = {
    phones: products.filter(p => p.category === 'phones').length,
    tablets: products.filter(p => p.category === 'tablets').length,
    accessories: products.filter(p => p.category === 'accessories').length,
  };

  return (
    <main className="home-page">
      <h1 className="visually-hidden">Product Catalog</h1>
      <Hero />

      <ProductsSlider
        title="Brand New Models"
        isLoading={isLoading}
        products={visibleNewModels}
        onRetry={loadData}
        hasError={hasError}
      />

      <ShopByCategory categoriesCount={categoriesCount} hasError={hasError} />

      <ProductsSlider
        title="Hot prices"
        isLoading={isLoading}
        className="home-page__section"
        products={visibleHotPrices}
        onRetry={loadData}
        hasError={hasError}
      />
    </main>
  );
};
