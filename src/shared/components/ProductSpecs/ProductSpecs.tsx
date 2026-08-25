import React from 'react';
import { Product } from '../../types';
import './ProductSpecs.scss';

type Props = {
  product: Product;
  className?: string;
};

export const ProductSpecs: React.FC<Props> = ({ product, className = '' }) => {
  return (
    <div className={`product-specs ${className}`.trim()}>
      <div className="product-specs__row">
        <span className="product-specs__name">Screen</span>
        <span className="product-specs__value">{product.screen}</span>
      </div>
      <div className="product-specs__row">
        <span className="product-specs__name">Capacity</span>
        <span className="product-specs__value">{product.capacity}</span>
      </div>
      <div className="product-specs__row">
        <span className="product-specs__name">RAM</span>
        <span className="product-specs__value">{product.ram}</span>
      </div>
    </div>
  );
};
