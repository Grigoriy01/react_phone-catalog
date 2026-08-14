import { Link } from 'react-router-dom';
import './ShopByCategory.scss'


export const ShopByCategory = () => {
  return (
    <section className='shop-by-category'>
      <h2 className='shop-by-category__title'>Shop by category</h2>
      
      <Link className='shop-by-category__link' to='/pfone' >
        <img src="/public/img/category-accessories.png" alt="Accessories" />
        <h3 className='shop-by-category__subtitle'>Mobile phones</h3>
        <div className='shop-by-category__count-modeles'>95 models</div>
      </Link>

      <Link className='shop-by-category__link' to='/pfone' >
        <img src="/public/img/category-accessories.png" alt="Accessories" />
        <h3 className='shop-by-category__subtitle'>Tablets</h3>
        <div className='shop-by-category__count-modeles'>95 models</div>
      </Link>

      <Link className='shop-by-category__link' to='/pfone' >
        <img src="/public/img/category-accessories.png" alt="Accessories" />
        <h3 className='shop-by-category__subtitle'>Accessories</h3>
        <div className='shop-by-category__count-modeles'>95 models</div>
      </Link>
    </section>
  );
};
