import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '@/shared/context/FavoriteContext';
import { CartIcon, HeartDefaultIcon } from '@/shared/assets/icons';

import cn from 'classnames';
import './HeaderActions.scss';
import { useCartItem } from '@/shared/context/CartContext';

export const HeaderActions = () => {
  const { pathname } = useLocation();
  const { favorites } = useFavorites();
  const { totalCount } = useCartItem();

  const countProducts = favorites.length;

  return (
    <div className="header-actions">
      <Link
        className={cn('header-actions__link header-actions__link--left', {
          'is-active': pathname === '/favorites',
        })}
        to="/favorites"
        aria-label="Favorite batton"
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
        aria-label="Cart batton"
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
