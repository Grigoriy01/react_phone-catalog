import React from 'react';
import { Product } from '../../types';

import { IconButton } from '../Button/components/IconButton';

import './ProductCard.scss'

type Props = {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <article className="product-card">
      {/* 1. Изображение товара */}
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </div>

      {/* 2. Наименование продукта */}
      <h3 className="product-card__title">
        {product.name}
      </h3>

      {/* 3. Блок цен */}
      <div className="product-card__price-block">
        <span className="product-card__price product-card__price--current">
          {product.fullPrice}
        </span>
        <span className="product-card__price product-card__price--old">
          {product.price}
        </span>
      </div>

      {/* Разделитель по дизайну, если нужен */}
      <div className="product-card__divider" />

      {/* 4. Блок характеристик */}
      <div className="product-card__specs">
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Screen</span>
          <span className="product-card__spec-value">
            {product.screen}
          </span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Capacity</span>
          <span className="product-card__spec-value">{product.capacity}
          </span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">RAM</span>
          <span className="product-card__spec-value">{product.ram}
          </span>
        </div>
      </div>

      {/* 5. Блок действий (кнопки) */}
      <div className="product-card__actions">
        <button type="button" className="product-card__btn-add">
          Add to cart
        </button>
        <IconButton
          className="product-card__btn-favorite"
          aria-label="Add to favorites"
        >
          <img
            src="/img/icons/heart.svg"
            alt="Favorite"
            className="product-card__favorite-icon"
          />
        </IconButton>
      </div>
    </article>
  );
};
