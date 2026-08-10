import React from 'react';

import { IconButton } from '../Button/components/IconButton';

import './ProductCard.scss'

interface Props {
  // product: Product;
}

export const ProductCard: React.FC<Props> = () => {
  return (
    <article className="product-card">
      {/* 1. Изображение товара */}
      <div className="product-card__image-container">
        <img
          src="/img/phones/apple-iphone-11-64gb-black/00.webp"
          alt="Apple iPhone 11 64GB Black"
          className="product-card__image"
        />
      </div>

      {/* 2. Наименование продукта */}
      <h3 className="product-card__title">
        Apple iPhone 11 64GB Black (MWLT2RP/A)
      </h3>

      {/* 3. Блок цен */}
      <div className="product-card__price-block">
        <span className="product-card__price product-card__price--current">
          $799
        </span>
        <span className="product-card__price product-card__price--old">
          $859
        </span>
      </div>

      {/* Разделитель по дизайну, если нужен */}
      <div className="product-card__divider" />

      {/* 4. Блок характеристик */}
      <div className="product-card__specs">
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Screen</span>
          <span className="product-card__spec-value">
            6.1' Liquid Retina HD
          </span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Capacity</span>
          <span className="product-card__spec-value">64 GB</span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">RAM</span>
          <span className="product-card__spec-value">4 GB</span>
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
