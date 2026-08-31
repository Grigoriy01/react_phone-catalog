This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**/*
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
src/
  modules/
    AccessoriesPage/
      AccessoriesPage.scss
      AccessoriesPage.tsx
      index.ts
    CartPage/
      CartPage.scss
      CartPage.tsx
      index.ts
    FavoritesPage/
      components/
        FavoritesPage.scss
        FavoritesPage.tsx
        index.ts
    HomePage/
      components/
        Hero/
          Hero.scss
          Hero.tsx
          insex.ts
        Hook/
          useProducts.ts
        PromoSlider/
          index.ts
          PromoSlider.scss
          PromoSlider.tsx
        ShopBycCategory/
          index.ts
          ShopByCategory.scss
          ShopByCategory.tsx
        HomePage.scss
        HomePage.tsx
        index.ts
    NotFoundPage/
      index.ts
      NotFoundPage.scss
      NotFoundPage.tsx
    PhonesPage/
      index.ts
      PhonesPage.scss
      PhonesPage.tsx
    ProductDetailsPage/
      Hook/
        index.ts
        useProductDetails.ts
      ProductDetailsSkeleton/
        index.ts
        ProductDetailsSkeleton.scss
        ProductDetailsSkeleton.tsx
      index.ts
      ProductDetailsPage.scss
      ProductDetailsPage.tsx
    TabletsPage/
      index.ts
      TabletsPage.scss
      TabletsPage.tsx
  services/
    products.ts
  shared/
    assets/
      arrow-right/
        arrow-right.svg
      hearts/
        heart-default.svg
        heart-selected.svg
    components/
      BackHeader/
        BackHeaderSkeleton/
          BackHeaderSkeleton.scss
          BackHeaderSkeleton.tsx
          index.ts
        BackHeader.scss
        BackHeader.tsx
        index.ts
      BreadcrumbsNav/
        BreadcrumbsNav.scss
        BreadcrumbsNav.tsx
        index.ts
      Buttons/
        components/
          ActionButton/
            ActionButton.scss
            ActionButton.tsx
            index.ts
          IconButton/
            IconButton.scss
            IconButton.tsx
            index.ts
      CatalogHeader/
        CatalogHeader.scss
        CatalogHeader.tsx
        index.ts
      FetchError/
        FetchError.scss
        FetchError.tsx
        index.ts
      Footer/
        components/
          ButtonTop/
            ButtonTop.scss
            ButtonTop.tsx
            index.ts
          NavFooter/
            index.ts
            NavFooter.scss
            NavFooter.tsx
        Footer.scss
        Footer.tsx
        index.ts
      Header/
        components/
          Burger/
            Burger.scss
            Burger.tsx
            index.ts
          BurgerMenu/
            BurgerMenu.scss
            BurgerMenu.tsx
            index.ts
          HaederActions/
            HaederActions.scss
            HaederActions.tsx
            index.ts
          SearchField/
            index.ts
            SearchField.scss
            SearchField.tsx
        Header.scss
        Header.tsx
        index.ts
      Logo/
        index.ts
        Logo.scss
        Logo.tsx
      Nav/
        index.ts
        Nav.scss
        Nav.tsx
      ProductActions/
        index.ts
        ProductActions.scss
        ProductActions.tsx
      ProductCard/
        component/
          ProductCardSkeleton/
            index.ts
            ProductCardSkeleton.scss
            ProductCardSkeleton.tsx
        index.ts
        ProductCard.scss
        ProductCard.tsx
      ProductPrice/
        index.ts
        ProductPrice.scss
        ProductPrice.tsx
      ProductsList/
        index.ts
        ProductsList.scss
        ProductsList.tsx
      ProductSpecs/
        index.ts
        ProductSpecs.scss
        ProductSpecs.tsx
      ProductsSlider/
        AsyncData/
          AsyncData.tsx
          index.ts
        index.ts
        ProductsSlider.scss
        ProductsSlider.tsx
    context/
      FavoriteContext.tsx
    types/
      index.ts
      Product.ts
  styles/
    base/
      _container.scss
      _fonts.scss
      _helpers.scss
      _normalize.scss
      _typography.scss
    utils/
      _index.scss
      _mixins.scss
      _placeholder.scss
      _variables.scss
    index.scss
  utils/
    index.ts
    sortProducts.ts
  App.scss
  App.tsx
  custom.d.ts
  index.tsx
  vite-env.d.ts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/modules/AccessoriesPage/AccessoriesPage.scss">
// -
</file>

<file path="src/modules/AccessoriesPage/AccessoriesPage.tsx">
export const AccessoriesPage = () => {
  return (
    <div></div>

  );
};
</file>

<file path="src/modules/AccessoriesPage/index.ts">
export * from './AccessoriesPage';
</file>

<file path="src/modules/CartPage/CartPage.scss">
// -
</file>

<file path="src/modules/CartPage/CartPage.tsx">
export const CartPage = () => {
  return (
    <section></section>
  );
};
</file>

<file path="src/modules/CartPage/index.ts">
export * from './CartPage';
</file>

<file path="src/modules/FavoritesPage/components/index.ts">
export * from './FavoritesPage'
</file>

<file path="src/modules/HomePage/components/Hero/insex.ts">
export * from './Hero';
</file>

<file path="src/modules/HomePage/components/Hook/useProducts.ts">
import { useEffect, useState } from 'react';
import { getProducts } from '../../../../services/products';
import { Product } from '../../../../shared/types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    products,
    isLoading,
    hasError,
    loadData: fetchData,
  };
}
</file>

<file path="src/modules/HomePage/components/PromoSlider/index.ts">
export * from './PromoSlider';
</file>

<file path="src/modules/HomePage/components/ShopBycCategory/index.ts">
export * from './ShopByCategory';
</file>

<file path="src/modules/HomePage/components/index.ts">
export * from './HomePage'
</file>

<file path="src/modules/NotFoundPage/index.ts">
export * from './NotFoundPage'
</file>

<file path="src/modules/NotFoundPage/NotFoundPage.scss">
@use '../../styles/utils/' as *;

.not-found-page {
  @extend %flex-center;
  @extend %content-width;

  flex-direction: column;
  padding-block: 40px;

  &__title {
    @extend %h1-title;
  }

  &__button {
    @include error-button;
  }
}
</file>

<file path="src/modules/PhonesPage/index.ts">
export * from './PhonesPage';
</file>

<file path="src/modules/PhonesPage/PhonesPage.scss">
// -
</file>

<file path="src/modules/PhonesPage/PhonesPage.tsx">
export const PhonesPage = () => {
  return (
<section></section>
  );
};
</file>

<file path="src/modules/ProductDetailsPage/Hook/index.ts">
export * from './useProductDetails';
</file>

<file path="src/modules/ProductDetailsPage/ProductDetailsSkeleton/index.ts">
export * from './ProductDetailsSkeleton';
</file>

<file path="src/modules/ProductDetailsPage/index.ts">
export * from './ProductDetailsPage'
</file>

<file path="src/modules/TabletsPage/index.ts">
export * from './TabletsPage';
</file>

<file path="src/modules/TabletsPage/TabletsPage.scss">
// -
</file>

<file path="src/modules/TabletsPage/TabletsPage.tsx">
export const TabletsPage = () => {
  return (
<section></section>
  );
};
</file>

<file path="src/shared/assets/arrow-right/arrow-right.svg">
<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L5.13807 4.19526C5.39842 4.45561 5.39842 4.87772 5.13807 5.13807L1.13807 9.13807C0.877722 9.39842 0.455612 9.39842 0.195262 9.13807C-0.0650874 8.87772 -0.0650874 8.45561 0.195262 8.19526L3.72386 4.66667L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262Z" fill="currentColor"/>
</svg>
</file>

<file path="src/shared/assets/hearts/heart-default.svg">
<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M9.296 0.332589C9.82592 0.113015 10.3939 0 10.9675 0C11.5411 0 12.1091 0.113015 12.6391 0.332589C13.169 0.552163 13.6504 0.873992 14.056 1.27969C14.4615 1.68515 14.7833 2.16654 15.0028 2.69636C15.2224 3.22628 15.3354 3.79427 15.3354 4.36788C15.3354 4.9415 15.2224 5.50949 15.0028 6.03941C14.7833 6.56928 14.4615 7.05071 14.0558 7.45619C14.0558 7.45623 14.0559 7.45615 14.0558 7.45619L8.1625 13.3495C7.88913 13.6229 7.44592 13.6229 7.17255 13.3495L1.27922 7.45619C0.460149 6.63712 0 5.52622 0 4.36788C0 3.20954 0.460149 2.09865 1.27922 1.27958C2.09829 0.460505 3.20919 0.000356495 4.36753 0.000356495C5.52587 0.000356495 6.63676 0.460505 7.45583 1.27958L7.66753 1.49127L7.8791 1.27969C7.87906 1.27973 7.87914 1.27965 7.8791 1.27969C8.28459 0.874047 8.76613 0.552142 9.296 0.332589ZM13.0658 2.26941C12.7903 1.99378 12.4632 1.77513 12.1031 1.62596C11.7431 1.47678 11.3572 1.4 10.9675 1.4C10.5778 1.4 10.1919 1.47678 9.83191 1.62596C9.47189 1.77513 9.14478 1.99378 8.86928 2.26941L8.1625 2.97619C7.88913 3.24956 7.44592 3.24956 7.17255 2.97619L6.46589 2.26953C5.90937 1.71301 5.15456 1.40036 4.36753 1.40036C3.58049 1.40036 2.82569 1.71301 2.26917 2.26953C1.71265 2.82604 1.4 3.58085 1.4 4.36788C1.4 5.15492 1.71265 5.90972 2.26917 6.46624L7.66753 11.8646L13.0659 6.46624C13.3415 6.19074 13.5603 5.86352 13.7095 5.5035C13.8586 5.14347 13.9354 4.75759 13.9354 4.36788C13.9354 3.97818 13.8586 3.59229 13.7095 3.23227C13.5603 2.87224 13.3414 2.54491 13.0658 2.26941Z" fill="#0F0F11"/>
</svg>
</file>

<file path="src/shared/assets/hearts/heart-selected.svg">
<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="currentColor"
    d="M12.639 0.333C11.541 -0.113 10.394 -0.113 9.296 0.333C8.766 0.552 8.285 0.874 7.879 1.28L7.668 1.491L7.456 1.28C6.637 0.46 5.526 0 4.368 0C3.209 0 2.098 0.46 1.279 1.28C0.46 2.099 0 3.21 0 4.368C0 5.526 0.46 6.637 1.279 7.456L7.173 13.35C7.446 13.623 7.889 13.623 8.163 13.35L14.056 7.456C14.875 6.637 15.335 5.526 15.335 4.368C15.335 3.21 14.875 2.099 14.056 1.28C13.65 0.874 13.169 0.552 12.639 0.333Z"
  />
</svg>
</file>

<file path="src/shared/components/BackHeader/BackHeaderSkeleton/BackHeaderSkeleton.scss">
@use '../../../../styles/utils/' as *;

.back-header-skeleton {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @include on-tablet {
    margin-bottom: 40px;
  }

  &__btn {
    @include skeleton-bg;

    width: 60px;
    height: 16px;
    border-radius: 4px;
  }

  &__title {
    @include skeleton-bg;
    
    width: 280px;
    height: 32px; // Высота точно соответствует h1-title
    border-radius: 4px;

    @include on-tablet {
      width: 400px;
      height: 40px;
    }
  }
}
</file>

<file path="src/shared/components/BackHeader/BackHeaderSkeleton/BackHeaderSkeleton.tsx">
import './BackHeaderSkeleton.scss';

 export const BackHeaderSkeleton = () => {
  return (

     <div className="back-header-skeleton">
      <div className="back-header-skeleton__btn" />
      <div className="back-header-skeleton__title" />
    </div>
  );
};
</file>

<file path="src/shared/components/BackHeader/BackHeaderSkeleton/index.ts">
export * from './BackHeaderSkeleton';
</file>

<file path="src/shared/components/BackHeader/index.ts">
export * from './BackHeader';
</file>

<file path="src/shared/components/BreadcrumbsNav/index.ts">
export * from './BreadcrumbsNav';
</file>

<file path="src/shared/components/Buttons/components/ActionButton/ActionButton.scss">
@use '../../../../../styles/utils/' as *;

.action-button {
  // Интегрируем универсальный миксин кнопки
  @include base-button(
    $width: 100%,
    $height: 40px,
    $radius: 8px,
    $has-border: false
  );


  flex-shrink: 1;

  // Специфичные стили типографики и цвета для ActionButton
  font-family: $font-family-base;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;

  color: $color-white;
  background-color: $color-accent;

  // Плавность цвета и тени при hover
  transition:
    background-color $transition-duration ease,
    color $transition-duration ease,
    box-shadow $transition-duration ease;

  @include hover-shadow;
  @include active-effect;

  // Состояние, когда товар уже добавлен в корзину ("Added")
  &--active {
    color: $color-primary;
    background-color: $color-surface-2;

    &:hover {
      background-color: $color-elements;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</file>

<file path="src/shared/components/Buttons/components/ActionButton/ActionButton.tsx">
import React from 'react';

import cn from 'classnames';
import './ActionButton.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

export const ActionButton: React.FC<Props> = ({
  children,
  className,
  isActive = false,
  ...props
}) => {
  return (
    <button
      type='button'
      className={cn('action-button', className, {
        'action-button--active': isActive,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
</file>

<file path="src/shared/components/Buttons/components/ActionButton/index.ts">
export * from './ActionButton';
</file>

<file path="src/shared/components/Buttons/components/IconButton/IconButton.tsx">
import React from 'react';
import './IconButton.scss';
import cn from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const IconButton: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(`icon-button ${className || ''}`)}
      {...props}
      >
      {children}
    </button>
  );
};
</file>

<file path="src/shared/components/Buttons/components/IconButton/index.ts">
export * from './IconButton';
</file>

<file path="src/shared/components/CatalogHeader/CatalogHeader.scss">
@use '../../../styles/utils/' as *;

.catalog-header {
  &__title {
    @extend %h1-title;

    margin-bottom: 8px;
  }

  &__count {
    @extend %small-text;
  }
}
</file>

<file path="src/shared/components/CatalogHeader/CatalogHeader.tsx">
import React from 'react';
import './CatalogHeader.scss';

type Props = {
  countProduct: number;
  catalogName: string;
}
export const CatalogHeader: React.FC<Props> = ({countProduct, catalogName}) => {
  return (
    <div className="catalog-header">
      <h1 className="catalog-header__title">{catalogName}</h1>
      <div className="catalog-header__count">{countProduct} items</div>
    </div>
  );
};
</file>

<file path="src/shared/components/CatalogHeader/index.ts">
export * from './CatalogHeader'
</file>

<file path="src/shared/components/FetchError/FetchError.tsx">
import React from 'react';

import './FetchError.scss';
type Props = {
  message?: string;
  onRetry: () => void;
};
export const FetchError: React.FC<Props> = ({
  message = 'Something went wrong. Failed to load data.',
  onRetry,
}) => {
  return (
    <div className="error-message" role="alert">
      <img
        className="error-message__image"
        src="/img/product-not-found.png"
        alt="Error indicator"
      />

      <p className="error-message__text">{message}</p>

      <button type="button" className="error-message__button" onClick={onRetry}>
        Reload page
      </button>
    </div>
  );
};
</file>

<file path="src/shared/components/FetchError/index.ts">
export * from './FetchError';
</file>

<file path="src/shared/components/Footer/components/ButtonTop/index.ts">
export * from './ButtonTop'
</file>

<file path="src/shared/components/Footer/components/NavFooter/index.ts">
export * from './NavFooter'
</file>

<file path="src/shared/components/Footer/components/NavFooter/NavFooter.tsx">
import { Link } from 'react-router-dom';

import './NavFooter.scss';

export const NavFooter = () => {
  return (
    <nav className="nav-footer">
      <ul className="nav-footer__list">
        <li className="nav-footer__item">
          <a
            href="https://github.com/Grigoriy01"
            className="nav-footer__link"
            target="blank"
          >
            Github
          </a>
        </li>
        <li className="nav-footer__item">
          <Link to="/contacts" className="nav-footer__link">
            Contacts
          </Link>
        </li>
        <li className="nav-footer__item">
          <Link to="/rights" className="nav-footer__link">
            Rights
          </Link>
        </li>
      </ul>
    </nav>
  );
};
</file>

<file path="src/shared/components/Footer/index.ts">
export * from './Footer'
</file>

<file path="src/shared/components/Header/components/Burger/Burger.tsx">
import React from 'react';
import './Burger.scss';

type Props = {
  onIsBurgerMenuOpen: (target: boolean) => void;
  isBurgerMenuOpen: boolean;
}
export const Burger: React.FC<Props> = ({isBurgerMenuOpen, onIsBurgerMenuOpen}) => {
  return (
    <button
      className='burger'
      type='button'
      aria-label='Toggle menu'
      aria-expanded={isBurgerMenuOpen}
      onClick={() => onIsBurgerMenuOpen(!isBurgerMenuOpen)}
    >
      <span className='burger__line'></span>
    </button>
  );
};
</file>

<file path="src/shared/components/Header/components/Burger/index.ts">
export * from './Burger'
</file>

<file path="src/shared/components/Header/components/BurgerMenu/BurgerMenu.tsx">
import React from 'react';
import { Nav } from '../../../Nav';
import { HaederActions } from '../HaederActions';
import cn from 'classnames';

import './BurgerMenu.scss';

type Props = {
  isBurgerMenuOpen: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ isBurgerMenuOpen }) => {
  return (
    <div className={cn('burger-menu', { 'is-open': isBurgerMenuOpen })}>
      <div className="burger-menu__content">
        <Nav />
        <HaederActions />
      </div>
    </div>
  );
};
</file>

<file path="src/shared/components/Header/components/BurgerMenu/index.ts">
export * from './BurgerMenu'
</file>

<file path="src/shared/components/Header/components/HaederActions/index.ts">
export * from './HaederActions'
</file>

<file path="src/shared/components/Header/components/SearchField/index.ts">
export * from  '../SearchField';
</file>

<file path="src/shared/components/Header/index.ts">
export * from './Header'
</file>

<file path="src/shared/components/Logo/index.ts">
export * from './Logo'
</file>

<file path="src/shared/components/Nav/index.ts">
export * from './Nav'
</file>

<file path="src/shared/components/ProductActions/index.ts">
export * from './ProductActions';
</file>

<file path="src/shared/components/ProductActions/ProductActions.scss">
@use '../../../styles/utils/' as *;

.product-actions {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;

  &__btn-add {
    flex-grow: 1;
    height: 100%;
  }

  &__btn-favorite {
    width: 40px;
    height: 40px;
    margin-left: 8px;
    flex-shrink: 0;
  }

  &__favorite-icon {
    color: $color-secondary;
  }
}
</file>

<file path="src/shared/components/ProductActions/ProductActions.tsx">
import React from 'react';
import { Product } from '../../types';
import { IconButton } from '../Buttons/components/IconButton';
import { ActionButton } from '../Buttons/components/ActionButton';
import FavoriteIconDefault from '../../assets/hearts/heart-default.svg?react';
import FavoriteIconSelected from '../../assets/hearts/heart-selected.svg?react';
import { useFavorites } from '../../context/FavoriteContext';

import './ProductActions.scss';

type Props = {
  product: Product;
  className?: string;
};

export const ProductActions: React.FC<Props> = ({ product, className = '' }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  return (
    <div className={`product-actions ${className}`.trim()}>
      <ActionButton
        className="product-actions__btn-add"
        aria-label="Add to cart"
      >
        Add to cart
      </ActionButton>

      <IconButton
        className="product-actions__btn-favorite"
        aria-label="Add to favorites"
        onClick={() => toggleFavorite(product)}
      >
        {isProductFavorite ? (
          <FavoriteIconSelected className="product-actions__favorite-icon" />
        ) : (
          <FavoriteIconDefault className="product-actions__favorite-icon" />
        )}
      </IconButton>
    </div>
  );
};
</file>

<file path="src/shared/components/ProductCard/component/ProductCardSkeleton/index.ts">
export * from './ProductCardSkeleton';
</file>

<file path="src/shared/components/ProductCard/index.ts">
export * from './ProductCard';
</file>

<file path="src/shared/components/ProductPrice/index.ts">
export * from './ProductPrice';
</file>

<file path="src/shared/components/ProductPrice/ProductPrice.scss">
@use '../../../styles/utils/' as *;

.product-price {

  &__price {
    font-family: $font-family-base;
    font-weight: 700;
    font-size: 22px;
    line-height: 1;

    &--old {
      font-weight: 500;
      font-size: 22px;
      line-height: 1;
      margin-left: 8px;
      color: $color-secondary-grau;
      text-decoration: line-through;
    }
  }
}
</file>

<file path="src/shared/components/ProductPrice/ProductPrice.tsx">
import React from 'react';

import './ProductPrice.scss';

type Props = {
  price: number;
  fullPrice: number;
  className?: string;
};
export const ProductPrice: React.FC<Props> = ({
  price,
  fullPrice,
  className = '',
}) => {
  return (
    <div className={`product-price ${className}`.trim()}>
      <span className="product-price__price product-price__price--current">
        ${price}
      </span>
      <span className="product-price__price product-price__price--old">
        ${fullPrice}
      </span>
    </div>
  );
};
</file>

<file path="src/shared/components/ProductsList/index.ts">
export * from './ProductsList.scss';
</file>

<file path="src/shared/components/ProductsList/ProductsList.scss">
@use '../../../styles/utils/' as *;

.products-list {
  display: grid;
  gap: 40px;

  grid-template-columns: repeat(auto-fill, minmax(212px, 287px));

  justify-content: center;

  @include on-tablet {
    column-gap: 16px;
  }

  @include on-desktop {
    grid-template-columns: repeat(4, 1fr);
  }
}
</file>

<file path="src/shared/components/ProductsList/ProductsList.tsx">
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
</file>

<file path="src/shared/components/ProductSpecs/index.ts">
export * from './ProductSpecs';
</file>

<file path="src/shared/components/ProductSpecs/ProductSpecs.scss">
@use '../../../styles/utils/' as *;

.product-specs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</file>

<file path="src/shared/components/ProductsSlider/AsyncData/AsyncData.tsx">
import React from 'react';
import { FetchError } from '../../FetchError';

type Props = {
  hasError: boolean;
  onRetry?: () => void;
  children: React.ReactNode;
};
export const AsyncData: React.FC<Props> = ({ hasError, onRetry, children }) => {
  if (hasError) {
    return <FetchError onRetry={onRetry ?? (() => {})} />;
  }
  return <>{children}</>;
};
</file>

<file path="src/shared/components/ProductsSlider/AsyncData/index.ts">
export * from './AsyncData';
</file>

<file path="src/shared/components/ProductsSlider/index.ts">
export * from './ProductsSlider';
</file>

<file path="src/shared/context/FavoriteContext.tsx">
import { createContext, useContext, useEffect, useReducer } from 'react';
import { Product } from '../types';

export type FavoritesState = {
  favorites: Product[];
};

export type FavoritesAction = { type: 'TOGGLE_FAVORITE'; payload: Product };

export type FavoritesContextType = {
  favorites: Product[];
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (product: Product) => void;
};

export const initialFavoritesState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

function favoritesReducer(
  state: FavoritesState,
  action: FavoritesAction,
): FavoritesState {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const exists = state.favorites.some(
        product => product.id === action.payload.id,
      );
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter(product => product.id !== action.payload.id)
          : [...state.favorites, action.payload],
      };
    }
    default:
      return state;
  }
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialFavoritesState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }, [state.favorites]);

  const toggleFavorite = (product: Product) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: product });
  };

  const isFavorite = (productId: string) => {
    return state.favorites.some(item => item.id === productId)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}

    </FavoritesContext.Provider>
  )
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};
</file>

<file path="src/shared/types/index.ts">
export * from './Product';
</file>

<file path="src/styles/base/_fonts.scss">
@font-face {
  font-family: Mont;
  src: url(/public/fonts/Mont-Regular.otf);
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Mont;
  src: url(/public/fonts/Mont-Bold.otf);
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: Mont;
  src: url(/public/fonts/Mont-SemiBold.otf);
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
</file>

<file path="src/styles/base/_helpers.scss">
// Full opening from the DOM (display: none)
.is-hidden {
  display: none !important;
}

// Visually hidden only (for accessibility / screen readers)
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</file>

<file path="src/styles/base/_typography.scss">
h1 {
  //@extend %h1-title;
}

h2 {
  // @extend %h2-title;

  // @include on-tablet {
  //   font-size: 48px;
  // }
}

h3 {
  // @extend %h3-subtitle;

  // @include on-tablet {
  //   font-size: 36px;
  // }
}

p {
  //max-width: ;
}
</file>

<file path="src/utils/index.ts">
export * from './sortProducts';
</file>

<file path="src/custom.d.ts">
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
</file>

<file path="src/vite-env.d.ts">
/// <reference types="vite/client" />
</file>

<file path="src/modules/HomePage/components/ShopBycCategory/ShopByCategory.scss">
@use '../../../../styles/utils/' as *;

.shop-by-category {
  @extend %content-width;

  &__title {
    @extend %h2-title;

    margin-bottom: 24px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @include on-tablet {
      flex-direction: row;
      gap: 16px;
    }
  }

  &__subtitle {
    @extend %h3-title;

    margin-bottom: 4px;
  }

  &__img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 1 /1;
    border-radius: 8px;
    margin-bottom: 24px;
    background-color: #f2ea10;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    transition: transform $transition-duration $transition-effect;

    @include hover-scale;
  }

  &__count-modeles {
    @extend %small-text;

    line-height: 21px;
  }
}
</file>

<file path="src/modules/NotFoundPage/NotFoundPage.tsx">
import { Link } from 'react-router-dom';
import './NotFoundPage.scss'

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <img className="not-found-page__img" src="/img/page-not-found.png" alt="Page is not found" />
      <h1 className="not-found-page__title">Not found page</h1>
      <Link to="/" className="not-found-page__button">
        Go to Home
      </Link>

    </div>
  );
};
</file>

<file path="src/modules/ProductDetailsPage/Hook/useProductDetails.ts">
import { useEffect, useState } from 'react';
import { ProductDetails } from '@/shared/types';
import { getProductDetails } from '@/services/products';

export function useProductDetails(productId?: string, category?: string) {
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    if (!productId || !category) return;

    setIsLoading(true);
    setHasError(false);

    try {
      const products = await getProductDetails(category);

      const found = products.find(
        p => p.id === productId || p.itemId === productId,
      );
      if (found) {
        setProduct(found as unknown as ProductDetails);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId, category]);

  return {
    product,
    isLoading,
    hasError,
    loadData: fetchData,
  };
}
</file>

<file path="src/modules/ProductDetailsPage/ProductDetailsSkeleton/ProductDetailsSkeleton.scss">
@use '../../../styles/utils/' as *;

.product-details-skeleton {
  &__main {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 56px;

    @include on-tablet {
      grid-template-columns: repeat(12, 1fr);
      gap: 16px;
    }

    @include on-desktop {
      gap: 64px;
      margin-bottom: 80px;
    }
  }

  // #region Галерея
  &__gallery {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 16px;
    margin-bottom: 40px;

    @include on-tablet {
      grid-column: span 7;
      flex-direction: row;
      align-items: start;
      margin-bottom: 16px;
    }

    @include on-desktop {
      grid-column: span 7;
    }
  }

  &__thumbnails {
    display: flex;
    flex-direction: row;
    gap: 8px;

    @include on-tablet {
      flex-direction: column;
    }
  }

  &__thumb {
    @include skeleton-bg;
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  &__main-image {
    @include skeleton-bg;
    width: 100%;
    height: 300px;
    border-radius: 8px;

    @include on-tablet {
      height: 400px;
    }
  }
  // #endregion

  // #region Панель действий
  &__actions {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 56px;

    @include on-tablet {
      grid-column: span 5;
      margin-bottom: 64px;
    }

    @include on-desktop {
      grid-column: span 5;
    }
  }

  &__color-list,
  &__capacity-list {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  &__color-btn {
    @include skeleton-bg;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  &__inner {
    height: 100%;

    @include on-tablet {
      max-width: 320px;
    }
  }

  &__capacity {
    @include divider;
    padding-block: 24px;
  }

  &__capacity-btn {
    @include skeleton-bg;
    width: 64px;
    height: 32px;
    border-radius: 4px;
  }

  &__price-block {
    @include divider;
    display: flex;
    align-items: center;
    padding: 32px 0 16px;
  }

  &__buttons {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
  }

  &__specs-summary,
  &__specs-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__specs-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // #endregion

  // #region Элементы плашек (Skeleton Elements)
  &__skeleton-box {
    @include skeleton-bg;

    &--label {
      width: 110px;
      height: 12px;
    }

    &--price {
      width: 140px;
      height: 32px;
    }

    &--btn-add {
      flex-grow: 1;
      height: 40px;
      border-radius: 8px;
    }

    &--btn-fav {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      flex-shrink: 0;
    }

    &--spec-name {
      width: 80px;
      height: 12px;
    }

    &--spec-val {
      width: 60px;
      height: 12px;
    }

    &--title {
      width: 160px;
      height: 24px;
      margin-bottom: 16px;
    }

    &--sub-title {
      width: 200px;
      height: 16px;
      margin-bottom: 8px;
    }

    &--text {
      width: 100%;
      height: 12px;
      margin-bottom: 6px;

      &-short {
        width: 60%;
      }
    }
  }
  // #endregion

  // #region Нижний блок (About + Tech specs)
  &__info {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 56px;

    @include on-tablet {
      gap: 56px;
    }

    @include on-desktop {
      grid-template-columns: repeat(12, 1fr);
      gap: 64px;
    }
  }

  &__about {
    display: flex;
    flex-direction: column;

    @include on-desktop {
      grid-column: span 7;
    }
  }

  &__tech-specs {
    display: flex;
    flex-direction: column;

    @include on-desktop {
      grid-column: span 5;
    }
  }

  &__description {
    margin-bottom: 24px;
  }
  // #endregion
}
</file>

<file path="src/modules/ProductDetailsPage/ProductDetailsSkeleton/ProductDetailsSkeleton.tsx">
import './ProductDetailsSkeleton.scss';

export const ProductDetailsSkeleton = () => {
  return (
    <div className="product-details-skeleton">
      <div className="product-details-skeleton__main">
        {/* Галерея */}
        <div className="product-details-skeleton__gallery">
          <div className="product-details-skeleton__thumbnails">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="product-details-skeleton__thumb" />
            ))}
          </div>
          <div className="product-details-skeleton__main-image" />
        </div>

        {/* Панель действий */}
        <div className="product-details-skeleton__actions">
          <div className="product-details-skeleton__colors">
            <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--label" />
            <div className="product-details-skeleton__color-list">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="product-details-skeleton__color-btn" />
              ))}
            </div>
          </div>

          <div className="product-details-skeleton__inner">
            <div className="product-details-skeleton__capacity">
              <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--label" />
              <div className="product-details-skeleton__capacity-list">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="product-details-skeleton__capacity-btn"
                  />
                ))}
              </div>
            </div>

            <div className="product-details-skeleton__price-block">
              <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--price" />
            </div>

            <div className="product-details-skeleton__buttons">
              <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--btn-add" />
              <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--btn-fav" />
            </div>

            <div className="product-details-skeleton__specs-summary">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="product-details-skeleton__specs-item">
                  <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--spec-name" />
                  <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--spec-val" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Нижний блок (About + Tech specs) */}
        <div className="product-details-skeleton__info">
          <div className="product-details-skeleton__about">
            <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--title" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="product-details-skeleton__description">
                <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--sub-title" />
                <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--text" />
                <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--text product-details-skeleton__skeleton-box--text-short" />
              </div>
            ))}
          </div>

          <div className="product-details-skeleton__tech-specs">
            <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--title" />
            <div className="product-details-skeleton__specs-list">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="product-details-skeleton__specs-item">
                  <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--spec-name" />
                  <div className="product-details-skeleton__skeleton-box product-details-skeleton__skeleton-box--spec-val" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
</file>

<file path="src/services/products.ts">
import { Product } from "../shared/types";

const PRODUCTS_URL =
  '/api/products.json';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL);

  // keep this delay for testing purpose
  await wait(500);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return (await response.json()) as Product[];
}

export async function getProductDetails(category: string): Promise<Product[]> {
  const response = await fetch(`/api/${category}.json`);

  // keep this delay for testing purpose
  await wait(500);

  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }

  return (await response.json()) as Product[];
}
</file>

<file path="src/shared/components/BackHeader/BackHeader.scss">
@use '../../../styles/utils/' as *;

.back-header {
  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;

    padding-bottom: 16px;
    border: none;
    background: transparent;

    cursor: pointer;

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background: url('../../assets/arrow-right/arrow-right.svg') no-repeat
        center / contain;
      transform: rotate(180deg);

    }

    &__item {
      @extend %button-text;

      font-size: 12px;
      line-height: 100%;
      color: $color-secondary-grau;
      transform: translateY(2px);
    }
  }

  &__title {
    @extend %h1-title;
  }
}
</file>

<file path="src/shared/components/BreadcrumbsNav/BreadcrumbsNav.scss">
@use '../../../styles/utils' as *;

.breadcrumbs {
  padding-bottom: 24px;

  &__list {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__item {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        flex-shrink: 0;
        background-color: $color-secondary-grau;

        // Вставляем маску для SVG, чтобы управлялся цвет через background-color
        background-color: $color-icons;
        mask: url('@/shared/assets/arrow-right/arrow-right.svg') no-repeat
          center / contain;
        -webkit-mask: url('@/shared/assets/arrow-right/arrow-right.svg')
          no-repeat center / contain;
      }
    }
  }

  // Все элементы, кроме первого (с домиком), получают стрелочку слева

  &__link {
    @extend %small-text; // Твой типографический стилизатор 12px / Mont SemiBold[cite: 2]

    font-size: 12px;
    color: $color-secondary-grau; // Основной цвет текста
    display: flex;
    align-items: center;
    transition: color $transition-duration ease;

    &:hover {
      color: $color-primary; // Меняем цвет при наведении[cite: 1]
    }

    svg {
      display: block;
      width: 16px;
      height: 16px;
      fill: currentColor; // Окрашивает иконку Home в цвет текста
    }

    &--page-name {
      transform: translateY(1px);
    }
  }

  &__current {
    @extend %small-text; // Твой типографический стилизатор[cite: 2]

    font-size: 12px;
    transform: translateY(1px);
    color: $color-secondary-grau; // Активный элемент серым цветом по макету[cite: 1]
  }
}
</file>

<file path="src/shared/components/Buttons/components/IconButton/IconButton.scss">
@use '../../../../../styles/utils/' as *;

.icon-button {
  @include base-button(32px, 32px, 50%);

 
}
</file>

<file path="src/shared/components/Footer/components/NavFooter/NavFooter.scss">
@use '../../../../../styles/utils/' as *;

.nav-footer {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;


    @include on-tablet {
      flex-direction: row;
      gap: clamp(16px, 3vw, 106px);
    }

    @include on-desktop {
      gap: 106px;
    }
  }

  &__item{
//-
  }

  &__link {
    @extend %uppercase-text;
  }
}
</file>

<file path="src/shared/components/Footer/Footer.scss">
@use '../../../styles/utils/variables' as *;
@use '../../../styles/utils' as *;

.footer {
  border-top: 1px solid $color-elements;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
    padding: 32px 16px;

    @include on-tablet {
      flex-direction: row;
      justify-content: space-between;
      padding-inline: 32px;
    }
  }

  &__logo {
    height: auto;
    justify-content: flex-start;
  }
}
</file>

<file path="src/shared/components/Footer/Footer.tsx">
import { Logo } from '../Logo';
import { ButtonTop } from './components/ButtonTop';
import { NavFooter } from './components/NavFooter';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Footer content */}

        <Logo className="footer__logo" />
        <NavFooter />
        <ButtonTop />
      </div>
    </footer>
  );
};
</file>

<file path="src/shared/components/Header/components/BurgerMenu/BurgerMenu.scss">
@use '../../../../../styles/utils/' as *;

.burger-menu {
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;

  width: 100%;
  height: calc(100vh - 48px);

  border-top: 1px solid $color-elements;
  background-color: $color-surface-1;

  z-index: z('modal');

  transform: translateX(100%);
  transition: transform 0.3s ease;

  &.is-open {
    transform: translateX(0);
  }

  @include on-tablet {
    display: none;
  }



  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}
</file>

<file path="src/shared/components/Header/components/HaederActions/HaederActions.tsx">
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './HaederActions.scss';

import { useFavorites } from '@/shared/context/FavoriteContext';

export const HaederActions = () => {
  const { pathname } = useLocation();
  const { favorites } = useFavorites();

  const countProducts = favorites.length;

  return (
    <div className="header-actions">
      <Link
        className={cn('header-actions__link header-actions__link--left', {
          'is-active': pathname === '/favorites',
        })}
        to="/favorites"
        aria-label="Favorite batton"
      >
        <div className="header-actions__wrapper-icon">
          <img
            className="header-actions__icon"
            src="/img/icons/icon-favorite.svg"
          />
          {countProducts > 0 && (
            <span className="header-actions__badge-counter">
              {countProducts}
            </span>
          )}
        </div>
      </Link>
      <Link
        className={cn('header-actions__link header-actions__link--right', {
          'is-active': pathname === '/cart',
        })}
        to="/cart"
        aria-label="Cart batton"
      >
        <div className="header-actions__wrapper-icon">
          <img
            className="header-actions__icon"
            src="/img/icons/icon-cart.svg"
          />

          <span className="header-actions__badge-counter"></span>
        </div>
      </Link>
    </div>
  );
};
</file>

<file path="src/shared/components/Header/components/SearchField/SearchField.scss">
@use '../../../../../styles/utils/' as *;

.search {
  height: 100%;
  width: 100%;
  display: none;

  @include on-tablet {
    display: flex;
  }
  
  &__label {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__input {
    width: 100%;
  }

  ::placeholder {
    text-transform: uppercase;

  }
}
</file>

<file path="src/shared/components/Header/components/SearchField/SearchField.tsx">
import './SearchField.scss'


export const SearchField = () => {

  return (
    <form
      className="search"
    >
      <label className="search__label">
        <input
          className="search__input"
          type="text"
          placeholder="Search ..."
        />
        <button type="button" >x</button>
      </label>

    </form>
  );
};
</file>

<file path="src/shared/components/Nav/Nav.tsx">
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Nav.scss';

interface Options {
  isActive: boolean;
}

export const Nav = () => {
  const isActiveClass = ({ isActive }: Options) =>
    classNames('nav-site__link', { 'is-active': isActive });
  return (
    <nav className="nav-site" role="navigation" aria-label="main navigation">
      <ul className="nav-site__list">
        <li className="nav-site__item">
          <NavLink to="/" className={isActiveClass}>
            Home
          </NavLink>
        </li>
        <li className="nav-site__item">
          <NavLink to="/phones" className={isActiveClass}>
            Phones
          </NavLink>
        </li>
        <li className="nav-site__item">
          <NavLink to="/tablets" className={isActiveClass}>
            Tablets
          </NavLink>
        </li>
        <li className="nav-site__item">
          <NavLink to="/accessories" className={isActiveClass}>
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
</file>

<file path="src/shared/components/ProductCard/component/ProductCardSkeleton/ProductCardSkeleton.scss">
@use '../../../../../styles/utils/' as *;

@keyframes skeleton-glow {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.product-card-skeleton {
  @include product-card-base;

  &__image {
    @include skeleton-bg;

    width: 70%;
    height: 100%;
  }

  &__title-line {
    @include skeleton-bg;

    &--full {
      width: 100%;
      height: 14px;
      margin-top: 16px;
    }

    &--short {
      width: 60%;
      height: 14px;
      margin-top: -2px;
      margin-bottom: 8px;
    }
  }

  &__price {
    @include skeleton-bg;

    width: 80px;
    height: 22px;
  }

  // Подключаем правильную геометрию строк спецификаций
  &__specs {
    @include product-specs-base;

    padding-block: 8px;
  }

  &__spec-name {
    @include skeleton-bg;

    width: 48px;
    height: 12px;
  }

  &__spec-value {
    @include skeleton-bg;

    width: 36px;
    height: 12px;
  }

  &__btn-add {
    @include skeleton-bg;

    width: 100%;
    height: 40px;
    border-radius: 8px;
  }

  &__btn-favorite {
    @include skeleton-bg;

    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-left: 8px;
    border-radius: 8px;
  }
}
</file>

<file path="src/shared/components/ProductSpecs/ProductSpecs.tsx">
import React from 'react';
import { Product } from '../../types';
import './ProductSpecs.scss';

type Props = {
  product: Product;
  className?: string;
};

export const ProductSpecs: React.FC<Props> = ({ product, className = '' }) => {
  return (
    <dl className={`product-specs ${className}`.trim()}>
      <div className="product-specs__row">
        <dt className="product-specs__name">Screen</dt>
        <dd className="product-specs__value">{product.screen}</dd>
      </div>
      <div className="product-specs__row">
        <dt className="product-specs__name">Capacity</dt>
        <dd className="product-specs__value">{product.capacity}</dd>
      </div>
      <div className="product-specs__row">
        <dt className="product-specs__name">RAM</dt>
        <dd className="product-specs__value">{product.ram}</dd>
      </div>
    </dl>
  );
};
</file>

<file path="src/styles/base/_normalize.scss">
body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

a {
  cursor: pointer;
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

span {
  display: block;
}

input,
textarea {
  resize: none;

  border: none;

  font-family: inherit;

  background: transparent;
  outline: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

button {
  padding: 0;
  border: none;
  font-family: inherit;
  background: transparent;
  cursor: pointer;
}
</file>

<file path="src/styles/utils/_index.scss">
@forward './variables';
@forward './mixins';
@forward './placeholder';
</file>

<file path="src/styles/index.scss">
@use './utils/' as *;
@use './base/normalize';
@use './base/fonts';
@use './base/typography';
@use './base/helpers';
@use './base/container';
</file>

<file path="src/modules/HomePage/components/ShopBycCategory/ShopByCategory.tsx">
import { Link } from 'react-router-dom';
import './ShopByCategory.scss';

export const ShopByCategory = () => {
  return (
    <section className="shop-by-category">
      <h2 className="shop-by-category__title">Shop by category</h2>
      <div className="shop-by-category__wrapper">
        <Link className="shop-by-category__link" to="/phones">
          <div className="shop-by-category__img-wrapper">
            <img
              className="shop-by-category__img"
              src="/public/img/category-accessories.png"
              alt="Accessories"
            />
          </div>
          <h3 className="shop-by-category__subtitle">Mobile phones</h3>
          <div className="shop-by-category__count-modeles">95 models</div>
        </Link>

        <Link className="shop-by-category__link" to="/tablets">
          <div className="shop-by-category__img-wrapper">
            <img
              className="shop-by-category__img"
              src="/public/img/category-accessories.png"
              alt="Accessories"
            />
          </div>
          <h3 className="shop-by-category__subtitle">Tablets</h3>
          <div className="shop-by-category__count-modeles">95 models</div>
        </Link>

        <Link className="shop-by-category__link" to="/accessories">
          <div className="shop-by-category__img-wrapper">
            <img
              className="shop-by-category__img"
              src="/public/img/category-accessories.png"
              alt="Accessories"
            />
          </div>
          <h3 className="shop-by-category__subtitle">Accessories</h3>
          <div className="shop-by-category__count-modeles">95 models</div>
        </Link>
      </div>
    </section>
  );
};
</file>

<file path="src/modules/HomePage/components/HomePage.scss">
@use '../../../styles/utils/' as *;

.home-page {
  @include padding-block-content;

  display: flex;
  flex-direction: column;
  gap: 56px;

  @include on-tablet {
    gap: 64px;
  }

  @include on-desktop {
    gap: 80px;
  }
}
</file>

<file path="src/shared/components/BackHeader/BackHeader.tsx">
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './BackHeader.scss';
import { BackHeaderSkeleton } from './BackHeaderSkeleton';

type Props = {
  catalogTitle?: string;
  className?: string;
};

export const BackHeader: React.FC<Props> = ({
  catalogTitle,
  className = '',
}) => {
  const navigate = useNavigate();

  const handelBack = () => {
    navigate(-1);
  };

  if (catalogTitle) {
    return (
      <div className={`back-header ${className}`.trim()}>
        <button className="back-header__btn" type="button" onClick={handelBack}>
          <span className="back-header__btn__item">Back</span>
        </button>
        <h1 className="back-header__title">{catalogTitle}</h1>
      </div>
    );
  }
  return <BackHeaderSkeleton />;
};
</file>

<file path="src/shared/components/BreadcrumbsNav/BreadcrumbsNav.tsx">
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './BreadcrumbsNav.scss';

type Props = {
  productName?: string;
};

export const BreadcrumbsNav: React.FC<Props> = ({ productName }) => {
  const location = useLocation();

  const pathName = location.pathname.split('/').filter(Boolean);

  const categoryPathName = pathName[0];

  const categoryName = categoryPathName
    ? categoryPathName.charAt(0).toUpperCase() + categoryPathName.slice(1)
    : '';

  return (
    <nav className="breadcrumbs" aria-label="breadcrumbs">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">
            <img
              src="/img/icons/home-icon/home.svg"
              className="breadcrumbs__icon"
            />
          </Link>
        </li>

        <li className="breadcrumbs__item">
          {productName ? (
            <Link to={`/${categoryPathName}`} className="breadcrumbs__link breadcrumbs__link--page-name">
              {categoryName}
            </Link>
          ) : (
            <span className="breadcrumbs__current">{categoryName}</span>
          )}
        </li>

        {productName ? (
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__current">{productName}</span>
          </li>
        ) : (
          <span className="breadcrumbs__current breadcrumbs__current--loading">...</span>
        )
      }
      </ol>
    </nav>
  );
};
</file>

<file path="src/shared/components/FetchError/FetchError.scss">
@use '../../../styles/utils/' as *;

.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 287px; // Ограничиваем шириной одной карточки товара
  height: 512px;     // Фиксированная высота под размеры карточки
  margin: 0 auto;    // Центрируем по горизонтали
  padding: 32px;
  box-sizing: border-box;

  &__image {
    height: 196px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 16px; // Фиксируем нижний отступ
  }

  &__text {
    @extend %small-text; // Используем единый шрифт проекта

    color: $color-secondary-grau;
    text-align: center;
    margin: 0 0 24px;

    // Ограничиваем высоту текста под 2-3 строки, чтобы кнопка не уезжала
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__button {
    @include error-button;

    margin-top: auto; // Прижимаем кнопку вниз для идеального выравнивания
  }
}
</file>

<file path="src/shared/components/Footer/components/ButtonTop/ButtonTop.tsx">
import { IconButton } from '../../../Buttons/components/IconButton';
import './ButtonTop.scss';

export const ButtonTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="back-to-top">
      <span className="back-to-top__text">Back to top</span>
      <IconButton
        className="back-to-top__button"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <img
          className="back-to-top__icon"
          src="/public/img/icons/Buttons/Icons/arrow-top.svg"
          alt="button back to top"
        />
      </IconButton>
    </div>
  );
};
</file>

<file path="src/shared/components/Header/Header.tsx">
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { HaederActions } from './components/HaederActions';
import { SearchField } from './components/SearchField/SearchField';
import { Burger } from './components/Burger';
import { BurgerMenu } from './components/BurgerMenu';
import { Nav } from '../Nav';

import './Header.scss';

/**
 * Defines the routes where the search field is allowed to be visible.
 * @type {readonly string[]}
 */
const SEARCH_ALLOWED_ROUTES = [
  '/phones',
  '/tablets',
  '/accessories',
  '/favorites',
] as const;

/**
 * Header component that displays the application's navigation, logo, search field, and user actions.
 * It also manages the state of a burger menu for mobile navigation and its behavior based on screen size.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export const Header = () => {
  const { pathname } = useLocation();

  /**
   * State to control the visibility of the burger menu.
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    setIsBurgerMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');

    /**
     * Handles the closing of the burger menu when the screen size changes to a wider view.
     * @param {MediaQueryListEvent} e - The media query list event.
     */
    const handleCloseBurger = (e: MediaQueryListEvent) => {
      if (e.matches) {
        return setIsBurgerMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleCloseBurger);

    return () => {
      mediaQuery.removeEventListener('change', handleCloseBurger);
    };
  }, []);

  /**
   * Determines if the search field should be visible based on the current pathname.
   * @type {boolean}
   */
  const isSearchVisible = (SEARCH_ALLOWED_ROUTES as readonly string[]).includes(
    pathname,
  );

  return (
    <header className="header">
      {/* Header content */}
      <div className="header__container">
        <Logo />
        <div className="header__desktop-nav">
          <Nav />
        </div>
        {isSearchVisible && <SearchField />}
        <div className="header__desktop-actions">
          <HaederActions />
        </div>

        <Burger
          onIsBurgerMenuOpen={setIsBurgerMenuOpen}
          isBurgerMenuOpen={isBurgerMenuOpen}
        />

        <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} />
      </div>
    </header>
  );
};
</file>

<file path="src/shared/components/Logo/Logo.scss">
@use '../../../styles/utils/' as *;

.logo {
  width: 96px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @include on-desktop {
    width: 128px;
  }
  &__img {
    @include on-desktop {
      width: 80px;
    }
  }
  
  @include hover-scale;
}
</file>

<file path="src/shared/components/Logo/Logo.tsx">
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Logo.scss';

type Props = {
  className?: string;
}
export const Logo: React.FC<Props> = ({className}) => {
  return (
    <Link
    className={cn(`logo ${className || ''}`)}
    to="/ "
    >
      <img src="../public/img/logo/logo-light.svg" className="logo__img" alt="logo" />
    </Link>
  );
};
</file>

<file path="src/shared/components/Nav/Nav.scss">
@use '../../../styles/utils/mixins' as *;
@use '../../../styles/utils/placeholder' as *;

.nav-site {
  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    height: 100%;
    padding-top: 24px;

    @include on-tablet {
      flex-direction: row;
      padding: 0;
      gap: clamp(32px, 3vw, 64px);
    }
  }
  &__item {
    height: 27px;

    @include on-tablet {
      height: 100%;
    }
  }

  &__link {
    display: flex;
    height: 100%;
    align-items: center;

    // &:hover {
    //   color: $color-primary;
    // }

    @extend %uppercase-text;
    @include active-underline;
  }
}
</file>

<file path="src/shared/components/ProductCard/component/ProductCardSkeleton/ProductCardSkeleton.tsx">
import './ProductCardSkeleton.scss';

export const ProductCardSkeleton = () => {
  return (
    <article className="product-card-skeleton">
      <div className="product-card-skeleton__image-container">
        <div className="product-card-skeleton__image" />
      </div>

      <div className="product-card-skeleton__title-line product-card-skeleton__title-line--full" />
      <div className="product-card-skeleton__title-line product-card-skeleton__title-line--short" />

      <div className="product-card-skeleton__price-block">
        <div className="product-card-skeleton__price" />
      </div>

      {/* <div className="product-card-skeleton__divider" /> */}

      {/* Используем универсальный селектор product-specs */}
      <div className="product-card-skeleton__specs product-specs">
        <div className="product-specs__row">
          <div className="product-card-skeleton__spec-name" />
          <div className="product-card-skeleton__spec-value" />
        </div>
        <div className="product-specs__row">
          <div className="product-card-skeleton__spec-name" />
          <div className="product-card-skeleton__spec-value" />
        </div>
        <div className="product-specs__row">
          <div className="product-card-skeleton__spec-name" />
          <div className="product-card-skeleton__spec-value" />
        </div>
      </div>

      <div className="product-card-skeleton__actions">
        <div className="product-card-skeleton__btn-add" />
        <div className="product-card-skeleton__btn-favorite" />
      </div>
    </article>
  );
};
</file>

<file path="src/shared/types/Product.ts">
export interface Product {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface DescriptionItem {
  title: string;
  text: string[];
}

export interface ProductDetails {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DescriptionItem[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
</file>

<file path="src/utils/sortProducts.ts">
import { Product } from '../shared/types';

export function sortByYear(products: Product[] | null): Product[] | null {
  if (!products) {
    return null;
  }

  return products.sort((productA, productB) => productB.year - productA.year);
}

export function getProductsWithHotPrices(
  products: Product[] | null,
): Product[] | null {
  if (!products) {
    return null;
  }

  const productsWithDiscount = products.filter(
    product => product.fullPrice !== product.price,
  );

  return productsWithDiscount.sort((productA, productB) => {
    const discountA = productA.fullPrice - productA.price;
    const discountB = productB.fullPrice - productB.price;

    return discountB - discountA;
  });
}

export function getSuggestedProducts(
  products: Product[],
  currentProductID: string,
): Product[] {
  const filteredProducts = products.filter(
    product => product.itemId !== currentProductID,
  );
  return [...filteredProducts].sort(() => Math.random() - 0.5).slice(0, 10);
}
</file>

<file path="src/App.scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fafbfc; // Базовый цвет фона по макету
}

.main {
  flex-grow: 1; // Растягивает контентную часть, прижимая footer к низу страницы
}
</file>

<file path="src/modules/FavoritesPage/components/FavoritesPage.scss">
@use '../../../styles/utils/' as *;

.favorites-page {
  @include padding-block-content;

  >:last-child {
    padding-top: 32px;

    @include on-tablet {
      padding-top: 40px;
    }
  }
}
</file>

<file path="src/modules/HomePage/components/Hero/Hero.scss">
@use '../../../../styles/utils/' as *;
@use '../../../../styles/utils/placeholder' as *;

.hero {
  &__container {
    @extend %content-width;

    padding-inline: 0;

    @include on-tablet {
      margin-bottom: 32px;
      padding-inline: 24px;
    }

    @include on-desktop {
      margin-bottom: 56px;
      padding-inline: 32px;
    }
  }

  &__title {
    padding-inline: 16px;
    margin-bottom: 24px;

    @extend %h1-title;

    @include on-tablet {
      margin-bottom: 32px;
      padding-inline: 0;
    }

    @include on-desktop {
      margin-bottom: 56px;
    }
  }
}
</file>

<file path="src/modules/HomePage/components/Hero/Hero.tsx">
import { PromoSlider } from '../PromoSlider';
import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h2 className="hero__title">Welcome to Nice Gadgets store!</h2>
        <div className="hero__slider-wrapper">
          <PromoSlider />
        </div>
      </div>
    </section>
  );
};
</file>

<file path="src/modules/HomePage/components/PromoSlider/PromoSlider.scss">
@use '../../../../styles/utils/' as *;

.promo-slider {
  position: relative;

  &__swiper {
    width: 100%;

    @include on-tablet {
      // 32px (ширина кнопки) + 16px (отступ до баннера) = 48px
      margin-inline: 51px;
      width: calc(100% - 102px);
    }

    @include on-desktop {
      // 32px (ширина кнопки) + 19px (отступ до баннера) = 51px
      margin-inline: 48px;
      width: calc(100% - 96px);
    }
  }

  &__slide {
    aspect-ratio: 1 / 1;
    overflow: hidden;

    @include on-tablet {
      aspect-ratio: auto;
      height: 189px;
      
    }

    @include on-desktop {
      height: 400px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: $color-surface-3;

    @include on-tablet {
      border-radius: 8px;
    }
  }

  // #region IconButton
  &__btn {
    position: absolute;
    top: calc(50% - 9px);
    transform: translateY(-50%);
    z-index: 10;

    display: none;

    @include on-tablet {
      display: flex;

      @include base-button(32px, 189px, 48px);
    }

    @include on-desktop {
      @include base-button(32px, 400px, 48px);
    }

    &--next {
      right: 0;
    }

    &--prev {
      top: 0;
      transform: rotate(180deg);
    }
  }

  // #endregion

  /* #region Pagination */
  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;

    .swiper-pagination-bullet {
      width: 14px;
      height: 4px;
      background-color: $color-elements;
      opacity: 1;

      &:nth-child(2) {
        margin-inline: 9px;
      }
      &:hover {
        border: 1px solid $color-primary;
      }
      &-active {
        background-color: $color-primary;
      }
    }
  }

  /* #endregion */
}
</file>

<file path="src/modules/HomePage/components/PromoSlider/PromoSlider.tsx">
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IconButton } from '../../../../shared/components/Buttons/components/IconButton';
import ArrowIcon from '@/shared/assets/arrow-right/arrow-right.svg?react';

import 'swiper/swiper.css';
import './PromoSlider.scss';

const BANNERS = [
  {
    id: 1,
    src: '/public/img/banner-accessories.png',
    alt: 'Accessories Promo Banner',
  },
  { id: 2, src: '/public/img/banner-tablets.png', alt: 'Tablets Promo Banner' },
  { id: 3, src: '/public/img/banner-phones.png', alt: 'Phones Promo Banner' },
];

export const PromoSlider = () => {
  return (
    <div className="promo-slider">
      <IconButton
        className="promo-slider__btn promo-slider__btn--prev"
        aria-label="Previous slide"
      >
        <ArrowIcon className="promo-slider__icon" />
      </IconButton>

      <IconButton
        className="promo-slider__btn promo-slider__btn--next"
        aria-label="Next slide"
      >
        <ArrowIcon className="promo-slider__icon" />
      </IconButton>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.promo-slider__btn--prev',
          nextEl: '.promo-slider__btn--next',
        }}
        className="promo-slider__swiper"
      >
        {BANNERS.map(banner => (
          <SwiperSlide className="promo-slider__slide" key={banner.id}>
            <img
              className="promo-slider__img"
              src={banner.src}
              alt={banner.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
</file>

<file path="src/modules/ProductDetailsPage/ProductDetailsPage.scss">
@use '../../styles/utils/' as *;

.product-details {
  @include padding-block-content;

  &__header {
    margin-bottom: 32px;

    @include on-tablet {
      margin-bottom: 40px;
    }
  }

  // Основная сетка: Галерея + Действия
  &__main {
    display: grid;
    grid-template-columns: 1fr;
    // gap: 32px;
    margin-bottom: 56px;

    @include on-tablet {
      grid-template-columns: repeat(12, 1fr);
      gap: 16px;
    }

    @include on-desktop {
      gap: 64px;
      margin-bottom: 80px;
    }
  }

  // #region Галерея
  &__gallery {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 16px;
    margin-bottom: 40px;

    @include on-tablet {
      grid-column: span 7;
      flex-direction: row;
      align-items: start;
      margin-bottom: 16px;
    }

    @include on-desktop {
      grid-column: span 7;
    }
  }

  &__thumbnails {
    display: flex;
    flex-direction: row;
    gap: 8px;

    @include on-tablet {
      flex-direction: column;
    }
  }

  &__thumb {
    width: 50px;
    height: 50px;
    padding: 4px;
    border: 1px solid $color-elements;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    transition: border-color $transition-duration ease;

    &--active {
      border-color: $color-primary;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__main-image {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    height: 300px;

    @include on-tablet {
      height: 400px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  // #endregion

  // #region Панель действий
  &__actions {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 56px;

    @include on-tablet {
      grid-column: span 5;
      margin-bottom: 64px;
    }

    @include on-desktop {
      grid-column: span 5;
    }
  }

  &__wrapper-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__label {
    @extend %small-text;

    margin-bottom: 8px;
  }

  &__id-product {
    @extend %small-text;

    color: $color-icons;
  }

  &__color-list,
  &__capacity-list {
    display: flex;
    gap: 8px;
  }

  &__color-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid $color-elements;
    cursor: pointer;

    &--active {
      border: 2px solid $color-primary;
    }
  }

  &__inner {
    height: 100%;

    @include on-tablet {
      max-width: 320px;
    }
  }

  &__capacity {
    @include divider;

    padding-block: 24px;
  }

  &__capacity-btn {
    padding: 8px 16px;
    border: 1px solid $color-elements;
    border-radius: 4px;

    @extend %button-text;

    color: $color-primary;
    background: transparent;

    &--active {
      background-color: $color-primary;
      color: $color-white;
    }
  }

  &__price-block {
    @include divider;

    display: flex;
    align-items: center;
    padding: 32px 0 16px;
  }

  &__buttons {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
  }

  // Краткие характеристики (dl / dt / dd)
  &__specs-summary {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-block: 0;
  }

  &__specs-item {
    display: flex;
    justify-content: space-between;

    dt {
      @extend %small-text;
    }

    dd {
      @extend %small-text;

      font-weight: 700;
      color: $color-primary;
      margin: 0;
    }
  }

  // #endregion

  // #region Нижний блок (About + Tech specs)
  &__info {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 56px;

    @include on-tablet {
      gap: 56px;
    }

    @include on-desktop {
      grid-template-columns: repeat(12, 1fr);
      gap: 64px;
    }
  }

  &__about {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @include on-desktop {
      grid-column: span 7;
    }
  }

  &__tech-specs {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @include on-desktop {
      grid-column: span 5;
    }
  }

  &__section-title {
    @include divider(bottom);
    @extend %h2-title;

    padding-bottom: 16px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-title {
      @extend %h3-title;
    }

    &-text {
      @extend %body-text;

      color: $color-secondary-grau;
    }
  }

  &__specs-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-block: 0;

    .product-details__specs-item {
      dt {
        @extend %body-text;

        font-weight: 500;
        color: $color-secondary-grau;
      }
      dd {
        @extend %body-text;

        font-weight: 600;
        color: $color-primary;
      }
    }
  }

  // #endregion

  &__recommended {
    margin-top: 56px;

    @include on-desktop {
      margin-top: 80px;
    }
  }
}
</file>

<file path="src/modules/ProductDetailsPage/ProductDetailsPage.tsx">
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductDetails } from './Hook';
import { useProducts } from '../HomePage/components/Hook/useProducts';
import { getSuggestedProducts } from '@/utils';
import { Product } from '@/shared/types';
import cn from 'classnames';

import { AsyncData } from '@/shared/components/ProductsSlider/AsyncData';
import { BackHeader } from '@/shared/components/BackHeader';
import { BreadcrumbsNav } from '@/shared/components/BreadcrumbsNav';
import { ProductActions } from '@/shared/components/ProductActions';
import { ProductPrice } from '@/shared/components/ProductPrice';
import { ProductDetailsSkeleton } from './ProductDetailsSkeleton';
import { ProductsSlider } from '@/shared/components/ProductsSlider';

import './ProductDetailsPage.scss';

export const ProductDetailsPage = () => {
  const { productId, category } = useParams<{
    productId: string;
    category: string;
  }>();

  const { products } = useProducts();
  const { isLoading, hasError, product, loadData } = useProductDetails(
    productId,
    category,
  );

  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(product?.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    product?.colorsAvailable[0],
  );
  const [selectedCapacity, setSelectedCapacity] = useState(
    product?.capacityAvailable[0],
  );

  useEffect(() => {
    if (product) {
      setSelectedImg(product.images[0]);
      setSelectedColor(product.color);
      setSelectedCapacity(product.capacity);
    }
  }, [product]);

  const handleColorChenge = (newColor: string) => {
    if (!product) return;

    const selectedProduct = products.find(
      item =>
        item.itemId.includes(product.namespaceId) &&
        item.itemId.includes(newColor) &&
        item.itemId.includes(product.capacity.toLowerCase()),
    );

    if (selectedProduct) {
      navigate(`/${category}/${selectedProduct.itemId}`);
    }
  };

  const handleCapacityChenge = (newCapacity: string) => {
    const selectedProduct = products.find(
      item =>
        item.capacity === newCapacity &&
        item.itemId === product?.id &&
        item.color === product.color,
    );

    if (selectedProduct) {
      navigate(`/${category}/${selectedProduct.itemId}`);
    }
  };

  return (
    <section className="product-details container">
      <BreadcrumbsNav productName={product?.name} />
      <BackHeader
        catalogTitle={product?.name}
        className="product-details__header"
      />

      <AsyncData hasError={hasError} onRetry={loadData}>
        {isLoading && !hasError ? (
          <ProductDetailsSkeleton />
        ) : (
          <>
            <div className="product-details__main">
              {/* Галерея картинок */}
              <section className="product-details__gallery">
                <div className="product-details__thumbnails">
                  {/* Кнопка превью картинки (выбирается через state) */}
                  {product?.images.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      className={cn('product-details__thumb', {
                        'product-details__thumb--active': selectedImg === img,
                      })}
                      onClick={() => setSelectedImg(img)}
                    >
                      <img
                        src={img}
                        alt={`{product.name}  view ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
                {/* Главное увеличенное фото */}
                <div className="product-details__main-image">
                  <img src={selectedImg} alt={product?.name} />
                </div>
              </section>

              {/* Colors */}
              <section className="product-details__actions">
                {/* Выбор цвета */}
                <div className="product-details__colors">
                  <div className="product-details__wrapper-label">
                    <span className="product-details__label">
                      Available colors
                    </span>
                    <span className="product-details__id-product">
                      ID: 802390
                    </span>
                  </div>
                  <div className="product-details__color-list">
                    {product?.colorsAvailable.map(color => {
                      const isSelected = selectedColor === color;

                      return (
                        <button
                          key={color}
                          type="button"
                          className={cn('product-details__color-btn', {
                            'product-details__color-btn--active': isSelected,
                          })}
                          style={{ background: color }}
                          onClick={() => handleColorChenge(color)}
                          aria-label={color}
                        ></button>
                      );
                    })}
                  </div>
                </div>
                <div className="product-details__inner">
                  {/* Выбор объема памяти */}
                  <div className="product-details__capacity">
                    <span className="product-details__label">
                      Select capacity
                    </span>
                    <div className="product-details__capacity-list">
                      {product?.capacityAvailable.map(capacity => {
                        const isSelected = selectedCapacity === capacity;

                        return (
                          <button
                            key={capacity}
                            type="button"
                            className={cn('product-details__capacity-btn', {
                              'product-details__capacity-btn--active':
                                isSelected,
                            })}
                            onClick={() => handleCapacityChenge(capacity)}
                            aria-label={capacity}
                          >
                            {selectedCapacity}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Цена */}
                  <ProductPrice
                    className="product-details__price-block"
                    price={product?.priceDiscount ?? 0}
                    fullPrice={product?.priceRegular ?? 0}
                  />

                  {/* Кнопки действия */}
                  <ProductActions
                    product={product as unknown as Product}
                    className="product-details__buttons"
                  />

                  {/* Краткие характеристики */}
                  <dl className="product-details__specs-summary">
                    <div className="product-details__specs-item">
                      <dt>Screen</dt>
                      <dd>{product?.screen}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Resolution</dt>
                      <dd>{product?.resolution}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Processor</dt>
                      <dd>{product?.processor}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>RAM</dt>
                      <dd>{product?.ram}</dd>
                    </div>
                  </dl>
                </div>
              </section>

              {/* Нижний блок: Описание и Технические характеристики */}
              <div className="product-details__info">
                {/* Описание */}
                <section className="product-details__about">
                  <h2 className="product-details__section-title">About</h2>

                  {product?.description.map(({ title, text }, idx) => (
                    <article className="product-details__description" key={idx}>
                      <h3 className="product-details__description-title">
                        {title}
                      </h3>
                      {text.map((paragraph, pIdx) => (
                        <p className="product-details__description-text" key={pIdx}>
                        {paragraph}
                      </p>
                      ))}
                    </article>
                  ))}
                </section>

                {/* Полные технические характеристики */}
                <section className="product-details__tech-specs">
                  <h2 className="product-details__section-title">Tech specs</h2>

                  <dl className="product-details__specs-list">
                    <div className="product-details__specs-item">
                      <dt>Screen</dt>
                      <dd>{product?.screen}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Resolution</dt>
                      <dd>{product?.resolution}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Processor</dt>
                      <dd>{product?.processor}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>RAM</dt>
                      <dd>{product?.ram}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Built in memory</dt>
                      <dd>{product?.capacity}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Camera</dt>
                      <dd>{product?.camera}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Zoom</dt>
                      <dd>{product?.zoom}</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Cell</dt>
                      <dd>{product?.cell.join(', ')}</dd>
                    </div>
                  </dl>
                </section>
              </div>
            </div>

            <section className="product-details__recommended">
              <ProductsSlider
                title="You may also like"
                products={getSuggestedProducts(products, product!.id)}
                className="product-details__recommended"
                hasError={hasError}
                onRetry={loadData}
                isLoading={isLoading}
              />
            </section>
          </>
        )}
      </AsyncData>
    </section>
  );
};
</file>

<file path="src/shared/components/Header/components/Burger/Burger.scss">
@use '../../../../../styles/utils/' as *;

.burger {
  @include base-button ($has-border: false);

  border-left: 1px solid $color-elements;

  cursor: pointer;
  border-bottom: none;

  &:active {
    transform: scale(0.95);
  }

  &__line {
    position: relative;
    width: 14px;
    height: 1.5px;
    background-color: $color-primary;
    border-radius: 1rem;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 14px;
      height: 1.5px;
      background-color: currentColor;
      border-radius: 1rem;
      transition: background-color 0.3s ease;
    }
    &::after {
      transform: translateY(4px);
    }

    &::before {
      transform: translateY(-4px);
    }
  }

  &[aria-expanded='true'] {
    .burger__line {
      background-color: transparent;

      &::before {
        transform: translateY(0) rotate(45deg);
      }

      &::after {
        transform: translateY(0) rotate(-45deg);
      }
    }
  }
}
</file>

<file path="src/shared/components/Header/Header.scss">
@use '../../../styles/utils/' as *;

.header {
  position: sticky;
  top: 0;
  z-index: z('header');
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 48px;
  width: 100%;

  &__container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__desktop-nav {
    display: none;


    @include on-tablet {
      display: flex;
      height: 100%;
      margin-inline: 16px;
    }
  }

  &__desktop-actions {
    display: none;

    @include on-tablet {
      display: flex;
      margin-left: auto;
      height: 100%;
    }
  }

  .logo {
    flex-shrink: 0;
  }

  .burger {
    margin-left: auto;

    @include on-tablet {
      display: none;
    }
  }

  @include on-desktop {
    height: 64px;
  }
}
</file>

<file path="src/shared/components/Footer/components/ButtonTop/ButtonTop.scss">
@use '../../../../../styles/utils/' as *;

.back-to-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &__text {
    @extend %small-text;
  }

  &__button {
    @include active-effect;
  }
}
</file>

<file path="src/styles/base/_container.scss">
@use '../utils/' as *;

.container {
  @extend %content-width;

  @include on-tablet {
    padding-inline: 24px;
  }

  @include on-desktop {
    padding-inline: 32px;
  }

  // @include padding-block-content;
}
</file>

<file path="src/modules/FavoritesPage/components/FavoritesPage.tsx">
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';
import { BreadcrumbsNav } from '../../../shared/components/BreadcrumbsNav';
import { useFavorites } from '../../../shared/context/FavoriteContext';
import { CatalogHeader } from '@/shared/components/CatalogHeader';

import './FavoritesPage.scss';
import { useProducts } from '@/modules/HomePage/components/Hook/useProducts';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const {isLoading} = useProducts()

  const countProduct = favorites.length;

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav />
      <CatalogHeader catalogName='Favourites' countProduct={countProduct} />

      <ProductsList products={favorites} isLoading={isLoading} skeletonCount={countProduct} />
    </section>
  );
};
</file>

<file path="src/shared/components/Header/components/HaederActions/HaederActions.scss">
@use '../../../../../styles/utils' as *;

.header-actions {
  display: flex;
  width: 100%;
  height: 48px;

  &__link {
    @include base-button(48px, $has-border: false);
    @include active-underline;

    width: 50%;
    height: 100%;

    border-top: 1px solid $color-elements;
    border-right: 1px solid $color-elements;

    @include on-tablet {
      width: 48px;
    }

    @include on-desktop {
      width: 64px;
    }


    &--left {
      @include on-tablet {
        border-right: 1px solid $color-elements;
        border-left: 1px solid $color-elements;
      }
    }
  }

  &__wrapper-icon {
    position: relative;
  }

  &__badge-counter {
    position: absolute;
    top: -6px;
    right: -6px;

    min-width: 14px;

    @extend %small-text;

    display: grid;
    place-items: center;


    font-weight: 700;
    font-size: 9px;
    width: 14px;
    height: 14px;
    padding-top: 1px;
    background-color: $color-secondary;
    border-radius: 50%;
    border: 1px solid $color-white;
    color: $color-white;
  }

  @include on-desktop {
    height: 100%;
  }
}
</file>

<file path="src/shared/components/ProductCard/ProductCard.scss">
@use '../../../styles/utils/' as *;

.product-card {
  @include product-card-base;

  &__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }

  &__title {
    @extend %body-text;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    height: 58px;
    padding-top: 16px;
    box-sizing: border-box;
    margin: 0;
  }

  
}
</file>

<file path="src/shared/components/ProductsSlider/ProductsSlider.scss">
@use '../../../styles/utils/' as *;

.products-slider {
  &__header {
    @extend %content-width;

    @include on-tablet {
      padding: 0 24px;
    }

    @include on-desktop {
      padding: 0 32px;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  &__title {
    @extend %h2-title;
  }
  &__navigation-skeleton {
    @include skeleton-bg;

    width: 72px;
    height: 32px;
    border-radius: 8px;
    flex-shrink: 0;
  }

  &__navigation {
    display: flex;
  }
  &__btn {
    &--prev {
      transform: rotate(180deg);
      margin-right: 16px;
    }
  }

  &__swiper-wrapper {
    @extend %content-width;

    min-height: 506px;

    padding-right: 0;

    @include on-tablet {
      padding-left: 24px;
    }

    @include on-desktop {
      padding: 32px;
    }
  }
  .styles-mySwiper {



    .mySwiper-slide {
      height: auto;
      width: 212px;
      flex-shrink: 0;

      @include on-tablet {
        width: 237px;
      }

    }
  }
}
</file>

<file path="src/index.tsx">
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

import './styles/index.scss';
import { FavoritesProvider } from './shared/context/FavoriteContext';

const container = document.getElementById('root') as HTMLDivElement;
createRoot(container).render(
  <Router>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </Router>,
);
</file>

<file path="src/modules/HomePage/components/HomePage.tsx">
import { getProductsWithHotPrices, sortByYear } from '../../../utils';
import { useProducts } from './Hook/useProducts';

import { Hero } from './Hero/Hero';
import { ShopByCategory } from './ShopBycCategory';
import { ProductsSlider } from '../../../shared/components/ProductsSlider';

import './HomePage.scss';

export const HomePage = () => {
  const { products, isLoading, loadData, hasError } = useProducts();

  const visibleNewModels = sortByYear(products);
  const visibleHotPrice = getProductsWithHotPrices(products);

  return (
    <div className="home-page">
      <Hero />

      <ProductsSlider
        title="Brand New Models"
        isLoading={isLoading}
        className="home-page__section"
        products={visibleNewModels}
        onRetry={loadData}
        hasError={hasError}
      />

      <ShopByCategory />

      <ProductsSlider
        title="Hot prices"
        isLoading={isLoading}
        className="home-page__section"
        products={visibleHotPrice}
        onRetry={loadData}
        hasError={hasError}
      />
    </div>
  );
};
</file>

<file path="src/shared/components/ProductsSlider/ProductsSlider.tsx">
import React, { useRef, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowIcon from '@/shared/assets/arrow-right/arrow-right.svg?react';

import { IconButton } from '../Buttons/components/IconButton';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';
import { ProductCardSkeleton } from '../ProductCard/component/ProductCardSkeleton/ProductCardSkeleton';

import './ProductsSlider.scss';
import './ProductsSlider.scss';
import cn from 'classnames';
import { AsyncData } from './AsyncData';

type Props = {
  isLoading: boolean;
  className?: string;
  title: string;
  products: Product[] | null;
  hasError: boolean;
  onRetry: () => void;
};

export const ProductsSlider: React.FC<Props> = ({
  className,
  title,
  products,
  isLoading,
  hasError,
  onRetry,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className={cn('products-slider', className)}>
      <div className="products-slider__header">
        <h2 className="products-slider__title">{title}</h2>
        {!hasError &&
          (isLoading ? (
            <div className="products-slider__navigation-skeleton" />
          ) : (
            <div className="products-slider__navigation">
              <IconButton
                className="products-slider__btn products-slider__btn--prev"
                aria-label="Previous slide"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
              >
                <ArrowIcon className="products-slider__icon" />
              </IconButton>

              <IconButton
                className="products-slider__btn products-slider__btn--next"
                aria-label="Next slide"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
              >
                <ArrowIcon className="products-slider__icon" />
              </IconButton>
            </div>
          ))}
      </div>

      <div className="products-slider__swiper-wrapper">
        <AsyncData hasError={hasError} onRetry={onRetry}>
          <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            breakpoints={{
              320: { slidesPerView: 'auto' },
              640: { slidesPerView: 'auto' },
              1200: { slidesPerView: 4 },
            }}
            //slidesPerView={'auto'}
            spaceBetween={16}
            className="styles-mySwiper"
          >
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <SwiperSlide className="mySwiper-slide" key={index}>
                    <ProductCardSkeleton />
                  </SwiperSlide>
                ))
              : (products ?? []).map(product => (
                  <SwiperSlide className="mySwiper-slide" key={product.id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </AsyncData>
      </div>
    </section>
  );
};
</file>

<file path="src/styles/utils/_variables.scss">
$z-indexes: (
  'dropdown': 100,
  'modal': 500,
  'overlay': 900,
  'header': 1000,
);

@function z($layer) {
  @return map-get($z-indexes, $layer);
}

// ==========================================================================
// Nice Gadgets Palette Variables (Modern SCSS)
// ==========================================================================

// --- Текст и глобальные цвета ---
$color-primary: #0f0f11;       // Основной темный цвет текста и заголовков
$color-secondary-grau: #89939a;     // Вторичный серый цвет (подзаголовки, описания)
$color-white: #ffff;         // Белый цвет

// --- Акценты и статусы ---
$color-accent: #f86800;        // Главный оранжевый акцент (активные элементы, кнопки)
$color-secondary: #476DF4;        // Главный оранжевый акцент (активные элементы, кнопки)
$color-green: #27ae60;         // Зеленый (успех, наличие товара)
$color-red: #eb5757;           // Красный (ошибки, скидки, удаление)

// --- Границы и иконки ---
$color-icons: #b4bdc3;         // Цвет иконок по умолчанию
$color-elements: #e2e6e9;      // Бордеры, рамки карточек, разделительные линии
$color-hover-bg: #e2e6e9;      // Светло-серый фон при наведении (hover)

// --- Подложки и фоны (Surfaces) ---
$color-surface-1: #ffff;     // Фон карточек, шапки, футера
$color-surface-2: #fafbfc;     // Общий светлый фон всего приложения (body)
$color-surface-3: #0f2338;     // Общий darkl  фон всего приложения (body)

// --- Анимации и транзишены ---
$transition-duration: 0.3s;
$transition-effect: ease-in-out;

// ==================== FONTS ==============
$font-family-base: 'Mont', sans-serif;
</file>

<file path="src/shared/components/ProductCard/ProductCard.tsx">
import React from 'react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';

import { ProductActions } from '../ProductActions';
import { ProductSpecs } from '../ProductSpecs';
import { ProductPrice } from '../ProductPrice';

import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article className="product-card">
      {/* 1. Изображение товара */}
      <Link
        to={`/${product.category}/${product.itemId}`}
        className="product-card__image-container"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </Link>

      {/* 2. Наименование продукта */}
      <h3 className="product-card__title">
        <Link to={`/${product.category}/${product.itemId}`}>
          {product.name}
        </Link>
      </h3>

      {/* 3. Блок цен */}
      <ProductPrice
        className="product-card__price-block"
        price={product.price}
        fullPrice={product.fullPrice}
      />

      {/* Разделитель по дизайну, если нужен */}
      {/* <div className="product-card__divider" /> */}

      {/* 4. Блок характеристик */}
      <ProductSpecs product={product} className="product-card__specs" />
      {/* <div className="product-card__specs">
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Screen</span>
          <span className="product-card__spec-value">{product.screen}</span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Capacity</span>
          <span className="product-card__spec-value">{product.capacity}</span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">RAM</span>
          <span className="product-card__spec-value">{product.ram}</span>
        </div>
      </div> */}

      {/* (кнопки) */}
      <ProductActions product={product} className="product-card__actions" />
      {/* <div className="product-card__actions">
        <ActionButton
          className="product-card__btn-add"
          aria-label="Add to cart"
        >
          Add to cart
        </ActionButton>
        <IconButton
          className="product-card__btn-favorite"
          aria-label="Add to favorites"
          onClick={() => toggleFavorite(product)}
        >
          {isProductFavorite ? (
            <FavoriteIconSelected className="product-card__favorite-icon" />
          ) : (
            <FavoriteIconDefault className="product-card__favorite-icon" />
          )}
        </IconButton>
      </div> */}
    </article>
  );
};
</file>

<file path="src/styles/utils/_placeholder.scss">
// Template for square interactive buttons (48x48, centered)
@use './variables' as *;
@use './mixins' as *;

%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;

  @include on-tablet {
    flex-direction: row;
    gap: 24px;
  }
}

%content-width {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;

  padding-inline: 16px;
}

/* #region Tiphografe */

// H1
%h1-title {
  font-family: $font-family-base;
  font-weight: 700;
  font-size: 32px;
  line-height: 41px;
  letter-spacing: -0.01em;
  color: $color-primary;

  @include on-tablet {
    font-size: 48px;
    line-height: 56px;
  }
}

// H2
%h2-title {
  font-family: $font-family-base;
  font-weight: 700;
  font-size: 22px;
  line-height: 31px;
  color: $color-primary;

  @include on-tablet {
    font-size: 32px;
    line-height: 41px;
    letter-spacing: -0.01em;
  }
}

// H3 (Subtitle / Section Header)
%h3-title {
  font-family: $font-family-base;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  color: $color-primary;
}

// H4
%h4-title {
  font-family: $font-family-base;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: $color-primary;

  @include on-tablet {
    font-size: 20px;
    line-height: 26px;
  }
}

// Uppercase (Links, Navigation)
%uppercase-text {
  font-family: $font-family-base;
  font-weight: 700;
  font-size: 12px;
  line-height: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: $color-secondary-grau;
}

// Buttons
%button-text {
  font-family: $font-family-base;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
}

// Body Text
%body-text {
  font-family: $font-family-base;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: $color-primary;
}

// Small Text
%small-text {
  font-family: $font-family-base;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: $color-secondary-grau;
}

/* #endregion */
</file>

<file path="src/styles/utils/_mixins.scss">
@use '../utils/variables' as *;

@mixin on-tablet {
  @media (min-width: 640px) {
    @content;
  }
}

@mixin on-desktop {
  @media (min-width: 1200px) {
    @content;
  }
}

@mixin hover($_property, $_toValue) {
  transition: #{$_property} 0.3s;
  &:hover {
    #{$_property}: $_toValue;
  }
}

@mixin hover-scale {
  transition: $transition-duration;
  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
  }
}

@mixin active-effect {
  &:active {
    transform: scale(0.95);
  }
}

@mixin hover-shadow {
  &:hover {
    box-shadow:
      0 3px 13px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.1);
    @content;
  }
}

// box-shadow: 0px 3px 13px 0px #17203166;

@mixin active-underline($color: $color-primary, $height: 2px) {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: $height;
    background-color: $color;

    opacity: 0;
    transition: opacity 0.3s ease;
  }

  // Применится к элементу, когда на нем появится класс is-active
  &.is-active {
    &::after {
      opacity: 1;
    }
  }
}

@mixin base-button($width: 48px, $height: 48px, $radius: 0, $has-border: true) {
  // --- Global style ---
  display: flex;
  align-items: center;
  justify-content: center;
  width: $width;
  height: $height;
  flex-shrink: 0;
  border-radius: $radius;
  transition:
    border-color $transition-duration ease,
    transform $transition-duration ease;

  @if $has-border {
    border: 1px solid $color-icons;
    &:hover {
      border: 1px solid $color-primary;
    }
  } @else {
    border: none;
  }
  @content;
}

@mixin error-button {
  @include base-button(120px, 40px, 8px) {
    @extend %button-text;

    color: $color-primary;
    background-color: $color-hover-bg;
  }
}

@mixin padding-block-content($top: 24px) {
  padding-top: $top;
  padding-bottom: 56px;

  @include on-tablet {
    padding-top: $top;
    padding-bottom: 64px;
  }

  @include on-desktop {
    padding-top: $top;
    padding-bottom: 80px;
  }
}

@mixin skeleton-bg {
  background-color: $color-elements;
  border-radius: 4px;
  animation: skeleton-glow 1.5s ease-in-out infinite;
}

// @mixin product-card-base {
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   padding: 32px;
//   border: 1px solid $color-elements;
//   border-radius: 8px;
//   height: 100%;
//   background-color: $color-surface-1;

//   &__image-container {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 196px;
//     flex-shrink: 0;
//   }

//   &__divider {
//     border: none;
//     border-top: 1px solid $color-elements;
//     margin: 0;
//   }

//   &__price-block {
//     display: flex;
//     align-items: center;
//     height: 31px; // Фиксированная высота блока цены
//   }

//   &__actions {
//     display: flex;
//     align-items: center;
//     margin-top: auto; // Прижимает кнопки к низу
//     height: 40px; // Фиксированная высота блока кнопок
//   }

// }

// @mixin product-specs-base {
//   display: flex;
//   flex-direction: column;
//   gap: 8px;

//   &__row {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     height: 16px;
//   }

//   &__name {
//     @extend %small-text;
//   }

//   &__value {
//     @extend %small-text;

//     font-weight: 700;
//     color: $color-primary;
//   }
// }

@mixin divider($side: top) {
  border: none;
  border-#{$side}: 1px solid $color-elements;
  margin: 0;
}

@mixin product-specs-base {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 16px;
  }

  &__name {
    @extend %small-text;
  }

  &__value {
    @extend %small-text;

    font-weight: 700;
    color: $color-primary;
  }
}

@mixin product-card-base {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  border: 1px solid $color-elements;
  border-radius: 8px;
  height: 100%;
  background-color: $color-surface-1;

  &__image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 196px;
    flex-shrink: 0;
  }


  // Задаем внутренний отступ контейнеру
  &__specs {
    padding-block: 8px;

    @include divider;

    // Подключаем стили для внутренних элементов ProductSpecs
    .product-specs__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 16px;
    }

    .product-specs__name {
      @extend %small-text;
    }

    .product-specs__value {
      @extend %small-text;

      font-weight: 700;
      color: $color-primary;
      font-size: 12px;
    }
  }

  &__price-block {
    display: flex;
    align-items: center;
    height: 31px;


  }

  &__actions {
    display: flex;
    align-items: center;
    margin-top: auto;
    height: 40px;
  }
}
</file>

<file path="src/App.tsx">
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './modules/HomePage/components';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header/Header';
import { PhonesPage } from './modules/PhonesPage';
import { TabletsPage } from './modules/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { FavoritesPage } from './modules/FavoritesPage/components';
import { CartPage } from './modules/CartPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <h1 className="visually-hidden">Product Catalog</h1>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/phones' element={<PhonesPage />} />
          <Route path='/tablets' element={<TabletsPage />} />
          <Route path='/accessories' element={<AccessoriesPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/:category/:productId' element={<ProductDetailsPage />} />

          <Route path='/home' element={<Navigate to='/' replace />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </main>

      <Footer />
    </div>
  );
};
</file>

</files>
