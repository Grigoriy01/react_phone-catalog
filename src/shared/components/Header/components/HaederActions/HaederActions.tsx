import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './HaederActions.scss';

import { useFavorites } from '@/shared/context/FavoriteContext';

export const HaederActions = () => {
  const { pathname } = useLocation();
  const { favorites } = useFavorites();

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
          <img
            className="header-actions__icon"
            src="/img/icons/icon-favorite.svg"
          />
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
          <img
            className="header-actions__icon"
            src="/img/icons/icon-cart.svg"
          />

          <span className="header-actions__badge-counter"></span>
        </div>
      </Link>
    </div>
  );
};
