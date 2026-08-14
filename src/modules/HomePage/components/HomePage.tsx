import { BrandNewModels } from './BrandNewModels';
import { Hero } from './Hero/Hero';
import { ShopByCategory } from './ShopBycCategory';

import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <BrandNewModels />
      <ShopByCategory />
    </div>
  );
};
