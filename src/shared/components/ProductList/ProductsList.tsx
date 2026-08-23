import React from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';

import './ProductsList.scss';

type Props = {
  products: Product[];
};

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
   <div className="products-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
   </div>
  )
};
