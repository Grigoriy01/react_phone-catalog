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
    FavoritesPage/
      components/
        FavoritesPage.scss
        FavoritesPage.tsx
        index.ts
    HomePage/
      components/
        BrandNewModels/
          BrandNewModels.scss
          BrandNewModels.tsx
          index.ts
        Hero/
          Hero.scss
          Hero.tsx
          insex.ts
        PromoSlider/
          index.ts
          PromoSlider.scss
          PromoSlider.tsx
        HomePage.scss
        HomePage.tsx
        index.ts
  services/
    products.ts
  shared/
    components/
      Button/
        components/
          ActionButton/
            ActionButton.scss
            ActionButton.tsx
            index.ts
          IconButton/
            IconButton.scss
            IconButton.tsx
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
      ProductCard/
        index.ts
        ProductCard.scss
        ProductCard.tsx
      ProductsSlider/
        index.ts
        ProductsSlider.scss
        ProductsSlider.tsx
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
  index.tsx
  vite-env.d.ts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/modules/FavoritesPage/components/FavoritesPage.scss">
// -
</file>

<file path="src/modules/FavoritesPage/components/FavoritesPage.tsx">
export const FavoritesPage = () => {
  return (

  );
};
</file>

<file path="src/modules/FavoritesPage/components/index.ts">
export * from './FavoritesPage'
</file>

<file path="src/modules/HomePage/components/BrandNewModels/index.ts">
export * from './BrandNewModels';
</file>

<file path="src/modules/HomePage/components/Hero/insex.ts">
export * from './Hero';
</file>

<file path="src/modules/HomePage/components/PromoSlider/index.ts">
export * from './PromoSlider';
</file>

<file path="src/modules/HomePage/components/index.ts">
export * from './HomePage'
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

export async function getProductsDetails(category: string): Promise<Product[]> {
  const response = await fetch(`/api/${category}.json`);

  // keep this delay for testing purpose
  await wait(500);

  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }

  return (await response.json()) as Product[];
}
</file>

<file path="src/shared/components/Button/components/ActionButton/index.ts">
export * from './ActionButton';
</file>

<file path="src/shared/components/Button/components/IconButton/index.ts">
export * from './IconButton';
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

<file path="src/shared/components/Header/components/HaederActions/HaederActions.tsx">
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './HaederActions.scss';

export const HaederActions = () => {
  const { pathname } = useLocation();
  console.log('info', pathname);

  return (
    <div className="header-actions">
      <Link
        className={cn('header-actions__link', {
          'is-active': pathname === '/favorites',
        })}
        to="/favorites"
      >
        <img
          className="header-actions__icon"
          src="/public/img/icons/icon-favorite.svg"
          alt="icon favorite"
        />
        <span className="header-actions__badge-counter"></span>
      </Link>
      <Link className={cn('header-actions__link', {
          'is-active': pathname === '/cart',
        })}
        to="/cart"
        >
        <img src="/public/img/icons/icon-cart.svg" alt="icon favorite" />
        <span className="header-actions__badge-counter"></span>
      </Link>
    </div>
  );
};
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

<file path="src/shared/components/ProductCard/index.ts">
export * from './ProductCard';
</file>

<file path="src/shared/components/ProductsSlider/index.ts">
export * from './ProductsSlider';
</file>

<file path="src/shared/types/index.ts">
export * from './Product';
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

ul {
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

<file path="src/utils/sortProducts.ts">
import { Product } from "../shared/types";

export function sortByYear (products: Product[] | null): Product[] | null {
  if (!products) {
    return null
  }

  return products.sort((productA, productB) => productB.year - productA.year)
}
</file>

<file path="src/vite-env.d.ts">
/// <reference types="vite/client" />
</file>

<file path="src/modules/HomePage/components/BrandNewModels/BrandNewModels.scss">
@use '../../../../styles/utils/' as *;

.brand-new-models {
  
}
</file>

<file path="src/modules/HomePage/components/BrandNewModels/BrandNewModels.tsx">
import { useEffect, useState } from "react";

import { Product } from "../../../../shared/types";
import { ProductsSlider } from "../../../../shared/components/ProductsSlider";

import { sortByYear } from "../../../../utils";
import { getProducts } from "../../../../services/products";

import './BrandNewModels.scss'

export const BrandNewModels = () => {
  const [products, setProducts] = useState<Product[] | null>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<string | null>(null);

  useEffect (() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
        setHasError(null);
      }catch{
        setHasError('/public/img/product-not-found.png')
      }finally {
        setIsLoading(false);
      }
    }
    fetchData()
  }, [])

  const visibleNewModels = sortByYear(products)

  return (
    <section className="brand-new-models">
      <ProductsSlider title="Brand New Models" visibleNewModels={visibleNewModels} />
    </section>
  );
};
</file>

<file path="src/modules/HomePage/components/PromoSlider/PromoSlider.tsx">
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IconButton } from '../../../../shared/components/Button/components/IconButton';

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
        <img
          src="/img/icons/arrow-right.svg"
          alt="Arrow left"
          className="promo-slider__icon promo-slider__icon--prev"
        />
      </IconButton>

      <IconButton
        className="promo-slider__btn promo-slider__btn--next"
        aria-label="Next slide"
      >
        <img
          src="/img/icons/arrow-right.svg"
          alt="Arrow right"
          className="promo-slider__icon"
        />
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

<file path="src/shared/components/Button/components/IconButton/IconButton.tsx">
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

<file path="src/shared/components/Footer/components/ButtonTop/ButtonTop.tsx">
import { IconButton } from '../../../Button/components/IconButton';
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

<file path="src/shared/components/ProductCard/ProductCard.scss">
@use '../../../styles/utils/' as *;

.product-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  border: 1px solid $color-elements;
  border-radius: 8px;

  &__image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 196px;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;

    object-fit: contain;
  }

  &__actions {
    display: flex;
  }

  &__btn-favorite {
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }

  &__title {
    @extend %body-text;

    padding-top: 16px;
  }

  &__price-block {
    display: flex;
    align-items: center;
  }

  &__price {
    font-family: $font-family-base;
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;

    &--old {
      font-weight: 500;
      line-height: 100%;
      margin-left: 8px;
      color: $color-secondary-grau;
      text-decoration: line-through;
    }
  }

  &__divider {
    border: 1px solid $color-elements;
  }

  &__specs {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-block: 8px;
  }

  &__spec-row {
   display: flex;
   align-items: center;
   justify-content: space-between;
  }
  &__spec-name {
    @extend %small-text;
  }
  &__spec-value {
    @extend %small-text;

    font-weight: 700;
    color: $color-primary;
  }
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
  }

  &__icon {
    &--prev {
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

<file path="src/shared/components/Button/components/ActionButton/ActionButton.tsx">
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

<file path="src/shared/components/Header/components/Burger/Burger.scss">
@use '../../../../../styles/utils/' as *;

.burger {
  @include base-button;

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

<file path="src/shared/components/ProductCard/ProductCard.tsx">
import React from 'react';
import { Product } from '../../types';

import { IconButton } from '../Button/components/IconButton';
import { ActionButton } from '../Button/components/ActionButton';

import './ProductCard.scss'

type Props = {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <article className="product-card">
      {/* 1. Изображение товара */}
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </div>

      {/* 2. Наименование продукта */}
      <h3 className="product-card__title">
        {product.name}
      </h3>

      {/* 3. Блок цен */}
      <div className="product-card__price-block">
        <span className="product-card__price product-card__price--current">
          ${product.price}
        </span>
        <s className="product-card__price product-card__price--old">
          ${product.fullPrice}
        </s>
      </div>

      {/* Разделитель по дизайну, если нужен */}
      <div className="product-card__divider" />

      {/* 4. Блок характеристик */}
      <div className="product-card__specs">
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Screen</span>
          <span className="product-card__spec-value">
            {product.screen}
          </span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">Capacity</span>
          <span className="product-card__spec-value">{product.capacity}
          </span>
        </div>
        <div className="product-card__spec-row">
          <span className="product-card__spec-name">RAM</span>
          <span className="product-card__spec-value">{product.ram}
          </span>
        </div>
      </div>

      {/* 5. Блок действий (кнопки) */}
      <div className="product-card__actions">
        <ActionButton
        className="product-card__btn-add"
        aria-label="Add to cart"
        >
          Add to cart
        </ActionButton>
        <IconButton
          className="product-card__btn-favorite"
          aria-label="Add to favorites"
        >
          <img
            src="/img/icons/hearts/heart-default.svg"
            alt="Favorite"
            className="product-card__favorite-icon"
          />
        </IconButton>
      </div>
    </article>
  );
};
</file>

<file path="src/shared/components/ProductsSlider/ProductsSlider.scss">
@use '../../../styles/utils/' as *;

.products-slider {
  &__header {
    @extend %content-width;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    @include on-tablet {
      padding: 0 24px;
    }

    @include on-desktop {
      padding: 0 32px;
    }
  }

  &__title {
    @extend %h2-title;
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

  .styles-mySwiper {
    @extend %content-width;



    @include on-tablet {
      padding-left: 24px;

    }

    @include on-desktop {
      padding-inline: 32px;

    }

    .mySwiper-slide {
      height: auto;
      width: 212px;
      flex-shrink: 0;
    }

    @include on-tablet {
      width: 237px;
    }

    @include on-desktop {
      width: 272px;
    }
  }

}
</file>

<file path="src/shared/components/ProductsSlider/ProductsSlider.tsx">
import React, { useRef, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconButton } from '../Button/components/IconButton';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';

import './ProductsSlider.scss';
import './ProductsSlider.scss';
import cn from 'classnames';

type Props = {
  className?: string;
  title: string;
  visibleNewModels: Product[] | null;
};

export const ProductsSlider: React.FC<Props> = ({
  className,
  title,
  visibleNewModels,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={cn('products-slider', className)}>
      <div className="products-slider__header">
        <h2 className="products-slider__title">{title}</h2>
        <div className="products-slider__navigation">
          <IconButton
            className="products-slider__btn products-slider__btn--prev"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <img
              className="products-slider__icon"
              src="/img/icons/arrow-right.svg"
              alt="Previous"
            />
          </IconButton>

          <IconButton
            className="products-slider__btn products-slider__btn--next"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <img
              className="products-slider__icon"
              src="/img/icons/arrow-right.svg"
              alt="Next"
            />
          </IconButton>
        </div>
      </div>

      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={'auto'}
        spaceBetween={16}
        className="styles-mySwiper"
      >
        {(visibleNewModels ?? []).map(product => (
          <SwiperSlide className="mySwiper-slide" key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
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

<file path="src/modules/HomePage/components/HomePage.tsx">
import { BrandNewModels } from './BrandNewModels';
import { Hero } from './Hero/Hero';

import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <BrandNewModels />
    </div>
  );
};
</file>

<file path="src/shared/components/Button/components/ActionButton/ActionButton.scss">
@use '../../../../../styles/utils/' as *;

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;

  color: $color-white;
  background-color: $color-accent;
  border: none;
  border-radius: 8px; 

  cursor: pointer;
  transition:
    background-color $transition-duration ease,
    color $transition-duration ease;

  @include hover-shadow;

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

<file path="src/shared/components/Button/components/IconButton/IconButton.scss">
@use '../../../../../styles/utils/' as *;

.icon-button {
  @include base-button(32px, 32px, 50%);

  // &:hover {
  //   @include hover-scale;
  // }
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
    @include aclive-effect;
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

<file path="src/styles/base/_container.scss">
@use '../utils/' as *;

.container {
  @extend %content-width;

  @include on-tablet {
    padding: 0 24px;
  }

  @include on-desktop {
    padding: 0 32px;
  }

  // @include padding-block-content;
}
</file>

<file path="src/shared/components/Header/components/HaederActions/HaederActions.scss">
@use '../../../../../styles/utils' as *;

.header-actions {
  display: flex;
  width: 100%;
  height: 48px;

  &__link {
    @include base-button(48px) {
      border-bottom: 0

    };

    @include active-underline;

    width: 50%;

     @include on-tablet {
       width: 48px;
     }

     @include on-desktop {
       width: 64px;
     }

    height: 100%;
  }

  &__badge-counter {
    // -
  }

  @include on-desktop {
    height: 100%;
  }
}
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
$color-surface-3: #0f2338;     // Общий светлый фон всего приложения (body)

// --- Анимации и транзишены ---
$transition-duration: 0.3s;
$transition-effect: ease-in-out;

// ==================== FONTS ==============
$font-family-base: 'Mont', sans-serif;
</file>

<file path="src/index.tsx">
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>,
);
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

@mixin aclive-effect {
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

@mixin padding-block-content($top: 56px) {
  padding-top: 24px;
  padding-bottom: 64px;

  @include on-tablet {
    padding-top: 32px;
  }

  @include on-desktop {
    padding-top: $top;
    padding-bottom: 80px;
  }
}
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

  padding: 0 16px;


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
  line-height: 26px;
  color: $color-primary;

  @include on-tablet {
    font-weight: 700;
    font-size: 22px;
    line-height: 31px;
  }
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
  font-size: 12px;
  line-height: 100%;
  color: $color-secondary-grau;
}

/* #endregion */
</file>

<file path="src/App.tsx">
import './App.scss';
import { HomePage } from './modules/HomePage/components';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <h1 className="visually-hidden">Product Catalog</h1>

        <HomePage />
      </main>

      <Footer />
    </div>
  );
};
</file>

</files>
