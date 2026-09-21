import { BackHeader } from '@/shared/components/BackHeader';
import { CartList } from './components/CartList';
import { useCartItem } from '@/shared/context/CartContext';

import { ActionButton } from '@/shared/components/Buttons/components/ActionButton';
import { ProductPrice } from '@/shared/components/ProductPrice';
import { Modal } from './components/Modal';
import { useState } from 'react';
import { useProducts } from '../HomePage/Hook/useProducts';
import { EmptyCart } from '@/shared/assets/cart-img';

import './CartPage.scss';
import { FetchError } from '@/shared/components/FetchError';
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

  if (hasError) {
    return (
      <section className="cart-page container">
        <div className="cart-page__back">
          <BackHeader catalogTitle="Cart" />
        </div>
        <FetchError onRetry={loadData} />
      </section>
    );
  }

  return (
    <section className="cart-page container">
      <div className="cart-page__back">
        <BackHeader catalogTitle="Cart" />
      </div>

      {/* cart include the items */}
      {cartItems.length > 0 ? (
        <div className="cart-page__content">
          {/* Секция со списком товаров (Span 8 на десктопе) */}
          <CartList
            cartItems={cartItems}
            className="cart-page__list"
            totalCount={totalCount}
          />

          {/* Секция итоговой суммы и оформления (Span 4 на десктопе) */}
          <section className="cart-page__checkout">
            {isLoading ? (
              CHECKOUT_SKELETON
            ) : (
              <div className="checkout-block">
                <ProductPrice
                  className="checkout-block__total"
                  price={totalPrice}
                />
                <div className="checkout-block__count">{`Total for ${totalCount} items`}</div>
                <div className="checkout-block__divider" />
                <ActionButton
                  className="checkout-block__btn"
                  aria-label="Checkout button"
                  onClick={() => setIsModalOpen(true)}
                >
                  Checkout
                </ActionButton>
              </div>
            )}
          </section>
        </div>
      ) : (
        <div className="cart-page__empty">
          <p className="cart-page__empty-text">Your cart is empty</p>
          <EmptyCart className="cart-page__empty-img" />
          <ActionButton to='/phones' className="cart-page__empty-btn" >
            Go to catalog
          </ActionButton>
        </div>
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
    </section>
  );
};
