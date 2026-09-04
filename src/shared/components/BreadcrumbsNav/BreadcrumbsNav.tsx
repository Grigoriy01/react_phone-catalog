import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '@/shared/assets/icons/home-icon/home.svg';

import './BreadcrumbsNav.scss';

type Props = {
  productName?: string;
  className: string;
};

export const BreadcrumbsNav: React.FC<Props> = ({
  productName,
  className = '',
}) => {
  const location = useLocation();

  const pathName = location.pathname.split('/').filter(Boolean);

  const categoryPathName = pathName[0];

  const categoryName = categoryPathName
    ? categoryPathName.charAt(0).toUpperCase() + categoryPathName.slice(1)
    : '';

  return (
    <nav className={`breadcrumbs ${className}`.trim()} aria-label="breadcrumbs">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">
            <img src={homeIcon} className="breadcrumbs__icon" />
          </Link>
        </li>

        <li className="breadcrumbs__item">
          {productName ? (
            <Link
              to={`/${categoryPathName}`}
              className="breadcrumbs__link breadcrumbs__link--page-name"
            >
              {categoryName}
            </Link>
          ) : (
            <span className="breadcrumbs__current">{categoryName}</span>
          )}
        </li>

        {productName ? (
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__current">{productName}</span>
          </li>
        ) : (
          <span className="breadcrumbs__current breadcrumbs__current--loading">
            ...
          </span>
        )}
      </ol>
    </nav>
  );
};
