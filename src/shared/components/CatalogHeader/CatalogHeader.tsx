import React from 'react';

import './CatalogHeader.scss';

type Props = {
  countProduct: number;
  catalogName: string;
  isLoading?: boolean;
};
export const CatalogHeader: React.FC<Props> = ({
  countProduct,
  catalogName,
  isLoading,
}) => {
  return (
    <div className="catalog-header">
      <h1 className="catalog-header__title">{catalogName}</h1>
      {isLoading || countProduct === undefined ? (
        <div className="catalog-header__count-skeleton"></div>
      ) : (
        <div className="catalog-header__count">{countProduct} items</div>
      )}
    </div>
  );
};
