import React from 'react';
import { FetchError } from '../FetchError';
import { ProductCard, ProductCardSkeleton } from '../ProductCard';
import { Product } from '../../types';

import './ProductsList.scss';
import { ActionButton } from '../Buttons/components/ActionButton';

type Props = {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
  hasError?: boolean;
  massege?: string;
  onRetry?: () => any;
};

export const ProductsList: React.FC<Props> = ({
  skeletonCount = 8,
  products,
  isLoading,
  hasError,
  onRetry,
  massege,
}) => {
  if (hasError) {
    return <FetchError onRetry={onRetry} />;
  }

  if (isLoading) {
    return (
      <div className="products-list">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <>
        <div className="products-list__empty">
          {massege}

          <ActionButton to="/phones">Go to catalog</ActionButton>
        </div>
      </>
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
