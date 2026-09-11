import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '@/shared/assets/icons/home-icon/home.svg';

import './BreadcrumbsNav.scss';
import { ArrowIcon } from '@/shared/assets/icons/arrow-right';

type Props = {
  productName?: string;
  className?: string;
  isLoading: boolean;
};

export const BreadcrumbsNav: React.FC<Props> = ({
  productName,
  className = '',
  isLoading,
}) => {
  const location = useLocation();

  const pathName = location.pathname.split('/').filter(Boolean);

  const categoryPathName = pathName[0];

  const categoryName = categoryPathName
    ? categoryPathName.charAt(0).toUpperCase() + categoryPathName.slice(1)
    : '';

  if (isLoading || !categoryName) {
    return (
      <div className={`breadcrumbs__skeleton ${className}`.trim()}></div>
    )
  }

  return (
    <nav className={`breadcrumbs ${className}`.trim()} aria-label="breadcrumbs">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">
            <img src={homeIcon} className="breadcrumbs__icon" />
          </Link>
        </li>

        <ArrowIcon className="breadcrumbs__arrow" />

        <li className="breadcrumbs__item">
          {productName ? (
            <Link
              to={`/${categoryPathName}`}
              className="breadcrumbs__link breadcrumbs__link--page-name"
            >
              {categoryName}
              <ArrowIcon className="breadcrumbs__arrow breadcrumbs__arrow--two" />
            </Link>
          ) : (
            <span className="breadcrumbs__current">{categoryName}</span>
          )}
        </li>

        <li className="breadcrumbs__item">
          <span className="breadcrumbs__current">{productName}</span>
        </li>
      </ol>
    </nav>
  );
};
