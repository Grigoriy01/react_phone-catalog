import React from 'react';
import { Product } from '../../types';

import { ProductCard, ProductCardSkeleton } from '../ProductCard';

import './ProductsList.scss';

type Props = {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
};

export const ProductsList: React.FC<Props> = ({
  skeletonCount = 8,
  products,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="products-list">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="products-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
