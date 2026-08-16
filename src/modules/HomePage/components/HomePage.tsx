import { getProductsWithHotPrices, sortByYear } from '../../../utils';
import { useProducts } from './Hook/useProducts';

import { Hero } from './Hero/Hero';
import { ShopByCategory } from './ShopBycCategory';
import { ProductsSlider } from '../../../shared/components/ProductsSlider';
import { FetchError } from '../../../shared/components/FetchError';

import './HomePage.scss';

export const HomePage = () => {
  const { products, isLoading, hasError, loadData } = useProducts();

  const visibleNewModels = sortByYear(products);
  const visibleHotPrice = getProductsWithHotPrices(products);
  
  if (hasError) {
    return <FetchError onRetry={loadData} />;
  }
  return (
    <div className="home-page">
      <Hero />
      <ProductsSlider
        title="Brand New Models"
        isLoading={isLoading}
        className="home-page__section"
        products={visibleNewModels}
      />
      <ShopByCategory />
      <ProductsSlider
        title="Hot prices"
        isLoading={isLoading}
        className="home-page__section"
        products={visibleHotPrice}
      />
    </div>
  );
};
