import React from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';
import { ProductCardSkeleton } from '../ProductCard/component/ProductCardSkeleton/ProductCardSkeleton';

import './ProductsList.scss';

type Props = {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
};

export const ProductsList: React.FC<Props> = ({
  skeletonCount = 1,
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
