import React from 'react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';

import { ProductActions } from '../ProductActions';
import { ProductSpecs } from '../ProductSpecs';
import { ProductPrice } from '../ProductPrice';

import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className="product-card">
      {/* 1. Изображение товара */}
      <Link
        to={`/${product.category}/${product.itemId}`}
        className="product-card__image-container"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </Link>

      {/* 2. Наименование продукта */}
      <h3 className="product-card__title">
        <Link to={`/${product.category}/${product.itemId}`}>
          {product.name}
        </Link>
      </h3>

      {/* 3. Блок цен */}
      <ProductPrice
        className="product-card__price-block"
        price={product.price}
        fullPrice={product.fullPrice}
      />

      {/* Разделитель по дизайну, если нужен */}
      {/* <div className="product-card__divider" /> */}

      {/* 4. Блок характеристик */}
      <ProductSpecs product={product} className="product-card__specs" />
      {/* <div className="product-card__specs">
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Screen</span>
          <span className="product-card__spec-value">{product.screen}</span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Capacity</span>
          <span className="product-card__spec-value">{product.capacity}</span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">RAM</span>
          <span className="product-card__spec-value">{product.ram}</span>
        </div>
      </div> */}

      {/* (кнопки) */}
      <ProductActions product={product} className="product-card__actions" />
      {/* <div className="product-card__actions">
        <ActionButton
          className="product-card__btn-add"
          aria-label="Add to cart"
        >
          Add to cart
        </ActionButton>
        <IconButton
          className="product-card__btn-favorite"
          aria-label="Add to favorites"
          onClick={() => toggleFavorite(product)}
        >
          {isProductFavorite ? (
            <FavoriteIconSelected className="product-card__favorite-icon" />
          ) : (
            <FavoriteIconDefault className="product-card__favorite-icon" />
          )}
        </IconButton>
      </div> */}
    </article>
  );
};
