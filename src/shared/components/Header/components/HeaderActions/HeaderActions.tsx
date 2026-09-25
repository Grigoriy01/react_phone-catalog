import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '@/shared/context/FavoriteContext';
import { useCart } from '@/shared/context/CartContext';
import { CartIcon, HeartDefaultIcon } from '@/shared/assets/icons';

import cn from 'classnames';
import './HeaderActions.scss';
import React from 'react';

type Props = {
  className?: string;
};

export const HeaderActions: React.FC<Props> = ({ className }) => {
  const { pathname } = useLocation();
  const { favorites } = useFavorites();
  const { totalCount } = useCart();

  const countProducts = favorites.length;

  return (
    <div className={cn('header-actions', className)}>
      <Link
        className={cn('header-actions__link header-actions__link--left', {
          'is-active': pathname === '/favorites',
        })}
        to="/favorites"
        aria-label="Favorites"
      >
        <div className="header-actions__wrapper-icon">
          <HeartDefaultIcon className="header-actions__icon" />

          {countProducts > 0 && (
            <span className="header-actions__badge-counter">
              {countProducts}
            </span>
          )}
        </div>
      </Link>
      <Link
        className={cn('header-actions__link header-actions__link--right', {
          'is-active': pathname === '/cart',
        })}
        to="/cart"
        aria-label="Cart"
      >
        <div className="header-actions__wrapper-icon">
          <CartIcon className="header-actions__icon" />

          {totalCount > 0 && (
            <span className="header-actions__badge-counter">{totalCount}</span>
          )}
        </div>
      </Link>
    </div>
  );
};
