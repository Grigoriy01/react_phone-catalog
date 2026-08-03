import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './HaederActions.scss';

export const HaederActions = () => {
  const { pathname } = useLocation();
  console.log('info', pathname);

  return (
    <div className="header-actions">
      <Link
        className={cn('header-actions__link', {
          'is-active': pathname === '/favorites',
        })}
        to="/favorites"
      >
        <img
          className="header-actions__icon"
          src="/public/img/icons/icon-favorite.svg"
          alt="icon favorite"
        />
        <span className="header-actions__badge-counter"></span>
      </Link>
      <Link className={cn('header-actions__link', {
          'is-active': pathname === '/cart',
        })}
        to="/cart"
        >
        <img src="/public/img/icons/icon-cart.svg" alt="icon favorite" />
        <span className="header-actions__badge-counter"></span>
      </Link>
    </div>
  );
};
