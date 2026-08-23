import React from 'react';
import './CatalogHeader.scss';

type Props = {
  countProduct: number;
  catalogName: string;
}
export const CatalogHeader: React.FC<Props> = ({countProduct, catalogName}) => {
  return (
    <div className="catalog-header">
      <h1 className="catalog-header__title">{catalogName}</h1>
      <div className="catalog-header__count">{countProduct} items</div>
    </div>
  );
};

