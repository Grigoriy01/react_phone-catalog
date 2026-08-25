import { getProductsWithHotPrices, sortByYear } from '../../../utils';
import { useProducts } from './Hook/useProducts';

import { Hero } from './Hero/Hero';
import { ShopByCategory } from './ShopBycCategory';
import { ProductsSlider } from '../../../shared/components/ProductsSlider';

import './HomePage.scss';

export const HomePage = () => {
  const { products, isLoading, loadData, hasError } = useProducts();

  const visibleNewModels = sortByYear(products);
  const visibleHotPrice = getProductsWithHotPrices(products);

  return (
    <div className="home-page">
      <Hero />

      <ProductsSlider
        title="Brand New Models"
        isLoading={isLoading}
        className="home-page__section"
        products={visibleNewModels}
        onRetry={loadData}
        hasError={hasError}
      />

      <ShopByCategory />

      <ProductsSlider
        title="Hot prices"
        isLoading={isLoading}
        className="home-page__section"
        products={visibleHotPrice}
        onRetry={loadData}
        hasError={hasError}
      />
    </div>
  );
};
