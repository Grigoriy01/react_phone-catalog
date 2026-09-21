import React from 'react';

import { CartItem } from '@/shared/types';
import { useProducts } from '@/modules/HomePage/Hook/useProducts';
import { CartProduct } from '../CartProduct/CartProduct';
import { CartProductSkeleton } from '../CartProductSkeleton/CartProductSkeleton';

import './CartList.scss';

type Props = {
  cartItems: CartItem[];
  className?: string;
  totalCount?: number;
};
export const CartList: React.FC<Props> = ({
  cartItems,
  className,
  totalCount,
}) => {
  const { isLoading } = useProducts();

  if (isLoading) {
    const skeletonCount =
      totalCount !== undefined && totalCount > 0 ? totalCount : 3;

    return (
      <div className={`cart-list ${className}`.trim()}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <CartProductSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <section className={`cart-list ${className}`.trim()}>
      {cartItems.map(item => (
        <CartProduct
          key={item.product.id}
          item={item}
          className="cart-list__item"
        />
      ))}
    </section>
  );
};
