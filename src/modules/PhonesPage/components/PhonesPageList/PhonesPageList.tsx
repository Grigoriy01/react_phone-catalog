import React from 'react';
import { Product } from '@/shared/types';
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';

import './PhonesPageList.scss';

type Props = {
  products: Product[];
  isLoading: boolean;
};
export const PhonesPageList: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <div className="phones-page-list">
      <ProductsList products={products} isLoading={isLoading} />
    </div>
  );
};
