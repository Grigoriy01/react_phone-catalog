import React from 'react';

import { CartItem } from '@/shared/types';
import { CartProduct } from '../CartProduct';

import './CartList.scss'

type Props = {
  cartItems: CartItem[];
  className?: string;
};
export const CartList: React.FC<Props> = ({ cartItems, className }) => {
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
