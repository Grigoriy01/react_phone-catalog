import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoryConfig,
  ShopByCategoryProps,
} from '@/modules/HomePage/components/ShopByCategory/ShopByCategory.type';

import phoneCategoryImg from '@/shared/assets/home-page-img/category-phones.png';
import tabletsCategoryImg from '@/shared/assets/home-page-img/category-tablets.png';
import accesCategoryImg from '@/shared/assets/home-page-img/category-accessories.webp';

import './ShopByCategory.scss';

export const CATEGORIES_CONFIG: CategoryConfig[] = [
  {
    id: 'phones',
    title: 'Mobile phones',
    path: '/phones',
    img: phoneCategoryImg,
    alt: 'Mobile phones category',
  },
  {
    id: 'tablets',
    title: 'Tablets',
    path: '/tablets',
    img: tabletsCategoryImg,
    alt: 'Tablets category',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    path: '/accessories',
    img: accesCategoryImg,
    alt: 'Accessories category',
  },
];

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ categoriesCount }) => {
  return (
    <section className="shop-by-category">
      <h2 className="shop-by-category__title">Shop by category</h2>
      <div className="shop-by-category__wrapper">
        {CATEGORIES_CONFIG.map(({ id, title, path, img, alt }) => {
          const count = categoriesCount[id as keyof typeof categoriesCount] ?? 0;
          return (
            <Link className="shop-by-category__link" to={path} key={id}>
              <div className={`shop-by-category__img-wrapper shop-by-category__img-wrapper--${id}`}>
                <img className="shop-by-category__img" src={img} alt={alt} />
              </div>
              <h3 className="shop-by-category__subtitle">{title}</h3>
              <div className="shop-by-category__count-modeles">{`${count} models`}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
