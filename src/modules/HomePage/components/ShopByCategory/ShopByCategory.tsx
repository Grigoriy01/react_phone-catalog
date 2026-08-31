import { Link } from 'react-router-dom';
import './ShopByCategory.scss';

export const ShopByCategory = () => {
  return (
    <section className="shop-by-category">
      <h2 className="shop-by-category__title">Shop by category</h2>
      <div className="shop-by-category__wrapper">
        <Link className="shop-by-category__link" to="/phones">
          <div className="shop-by-category__img-wrapper">
            <img
              className="shop-by-category__img"
              src="/public/img/category-accessories.png"
              alt="Accessories"
            />
          </div>
          <h3 className="shop-by-category__subtitle">Mobile phones</h3>
          <div className="shop-by-category__count-modeles">95 models</div>
        </Link>

        <Link className="shop-by-category__link" to="/tablets">
          <div className="shop-by-category__img-wrapper">
            <img
              className="shop-by-category__img"
              src={`${import.meta.env.BASE_URL}img/category-accessories.png`}
              alt="Accessories"
            />
          </div>
          <h3 className="shop-by-category__subtitle">Tablets</h3>
          <div className="shop-by-category__count-modeles">95 models</div>
        </Link>

        <Link className="shop-by-category__link" to="/accessories">
          <div className="shop-by-category__img-wrapper">
            <img
              className="shop-by-category__img"
              src="/public/img/category-accessories.png"
              alt="Accessories"
            />
          </div>
          <h3 className="shop-by-category__subtitle">Accessories</h3>
          <div className="shop-by-category__count-modeles">95 models</div>
        </Link>
      </div>
    </section>
  );
};
