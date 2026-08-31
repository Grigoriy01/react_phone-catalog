import React from 'react';
import { Product } from '../../types';
import { IconButton } from '../Buttons/components/IconButton';
import { ActionButton } from '../Buttons/components/ActionButton';
import FavoriteIconDefault from '@/shared/assets/icons/hearts/heart-default.svg?react';
import FavoriteIconSelected from '@/shared/assets/icons/hearts/heart-selected.svg?react';
import { useFavorites } from '../../context/FavoriteContext';

import './ProductActions.scss';

type Props = {
  product: Product;
  className?: string;
};

export const ProductActions: React.FC<Props> = ({ product, className = '' }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  return (
    <div className={`product-actions ${className}`.trim()}>
      <ActionButton
        className="product-actions__btn-add"
        aria-label="Add to cart"
      >
        Add to cart
      </ActionButton>

      <IconButton
        className="product-actions__btn-favorite"
        aria-label="Add to favorites"
        onClick={() => toggleFavorite(product)}
      >
        {isProductFavorite ? (
          <FavoriteIconSelected className="product-actions__favorite-icon" />
        ) : (
          <FavoriteIconDefault className="product-actions__favorite-icon" />
        )}
      </IconButton>
    </div>
  );
};
