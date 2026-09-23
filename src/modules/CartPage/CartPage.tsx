import { BackHeader } from '@/shared/components/BackHeader';
import { CartList } from './components/CartList';
import { useCartItem } from '@/shared/context/CartContext';

import { FetchError } from '@/shared/components/FetchError';
import { EmptyState } from '@/shared/components/EmptyState';
import { ActionButton } from '@/shared/components/Buttons/components/ActionButton';
import { ProductPrice } from '@/shared/components/ProductPrice';
import { Modal } from './components/Modal';
import { useState } from 'react';
import { useProducts } from '../HomePage/hooks/useProducts';
import { EmptyCart } from '@/shared/assets/cart-img';

import './CartPage.scss';

const CHECKOUT_SKELETON = (
  <div className="checkout-block checkout-block--skeleton">
    <div className="checkout-block__total-skeleton" />
    <div className="checkout-block__count-skeleton" />
    <div className="checkout-block__divider" />
    <div className="checkout-block__btn-skeleton" />
  </div>
);

export const CartPage = () => {
  const { cartItems, totalCount, totalPrice, clearCart } = useCartItem();
  const { isLoading, hasError, loadData } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckoutConfirm = () => {
    clearCart();
    setIsModalOpen(false);
  };

  return (
    <main className="cart-page container">
      <div className="cart-page__back">
        <BackHeader catalogTitle="Cart" hasError={hasError} />
      </div>
      {hasError ? (
        <FetchError onRetry={loadData} />
      ) : isLoading || cartItems.length > 0 ? (
        <div className="cart-page__content">
          <CartList
            cartItems={cartItems}
            className="cart-page__list"
            totalCount={totalCount}
            isLoading={isLoading}
          />

          <section className="cart-page__checkout">
            {isLoading ? (
              CHECKOUT_SKELETON
            ) : (
              <div className="checkout-block">
                <ProductPrice
                  className="checkout-block__total"
                  price={totalPrice}
                />
                <div className="checkout-block__count">
                  Total for {totalCount} items
                </div>
                <div className="checkout-block__divider" />
                <ActionButton
                  className="checkout-block__btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Checkout
                </ActionButton>
              </div>
            )}
          </section>
        </div>
      ) : (
        <EmptyState className="cart-page__empty" title="Your cart is empty">
          <EmptyCart />
        </EmptyState>
      )}

      <Modal
        isOpen={isModalOpen}
        title="Checkout"
        message="Checkout is not implemented yet. Do you want to clear the Cart?"
        confirmLabel="Clear Cart"
        cancelLabel="Cancel"
        onConfirm={handleCheckoutConfirm}
        onCancel={() => setIsModalOpen(false)}
      />
    </main>
  );
};
