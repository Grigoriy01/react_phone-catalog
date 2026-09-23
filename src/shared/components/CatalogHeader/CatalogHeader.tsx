import React from 'react';

import cn from 'classnames';
import './CatalogHeader.scss';

type Props = {
  countProduct: number;
  catalogName: string;
  className?:string;
  isLoading?: boolean;
  hasError?: boolean;
};
export const CatalogHeader: React.FC<Props> = ({
  countProduct,
  catalogName,
  isLoading,
  hasError,
  className,
}) => {
  console.log('Title:', catalogName)
  return (
    <div className={cn("catalog-header", className)}>
      <h1 className="catalog-header__title">{catalogName}</h1>

      {hasError ? null : isLoading || countProduct === undefined ? (
        <div className="catalog-header__count-skeleton"></div>
      ) : (
        <div className="catalog-header__count">{countProduct} items</div>
      )}
    </div>
  );
};
