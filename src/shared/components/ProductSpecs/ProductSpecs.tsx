import React from 'react';
import { Product } from '../../types';
import './ProductSpecs.scss';

type Props = {
  product: Product;
  className?: string;
};

export const ProductSpecs: React.FC<Props> = ({ product, className = '' }) => {
  return (
    <dl className={`product-specs ${className}`.trim()}>
      <div className="product-specs__row">
        <dt className="product-specs__name">Screen</dt>
        <dd className="product-specs__value">{product.screen}</dd>
      </div>
      <div className="product-specs__row">
        <dt className="product-specs__name">Capacity</dt>
        <dd className="product-specs__value">{product.capacity}</dd>
      </div>
      <div className="product-specs__row">
        <dt className="product-specs__name">RAM</dt>
        <dd className="product-specs__value">{product.ram}</dd>
      </div>
    </dl>
  );
};
