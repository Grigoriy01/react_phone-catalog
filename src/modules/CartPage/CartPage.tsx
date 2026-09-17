import { BackHeader } from '@/shared/components/BackHeader';
import { CartList } from './components/CartList';
import { useCartItem } from '@/shared/context/CartContext';

import './CartPage.scss';
import { ActionButton } from '@/shared/components/Buttons/components/ActionButton';
import { ProductPrice } from '@/shared/components/ProductPrice';

export const CartPage = () => {
  const { cartItems, totalCount, totalPrice } = useCartItem();
  return (
    <section className="cart-page container">
      <div className="cart-page__back">
        <BackHeader catalogTitle="Cart" />
      </div>

      {/* cart include the items */}
      {cartItems.length > 0 ? (
        <div className="cart-page__content">
          {/* Секция со списком товаров (Span 8 на десктопе) */}
          <CartList cartItems={cartItems} className="cart-page__list" />

          {/* Секция итоговой суммы и оформления (Span 4 на десктопе) */}
          <section className="cart-page__checkout">
            <div className="checkout-block">
              <ProductPrice className="checkout-block__total" price={totalPrice} />
              <div className="checkout-block__count">{`Total for ${totalCount} items`}</div>
              <div className="checkout-block__divider" />
              <ActionButton
                className="checkout-block__btn"
                aria-label="Checkout button"
              >
                Checkout
              </ActionButton>
            </div>
          </section>
        </div>
      ) : (
        /* empty cart */
        <div className="cart-page__empty">
          <p className="cart-page__empty-text">Your cart is empty</p>
        </div>
      )}
    </section>
  );
};
