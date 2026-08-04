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
        HomePage.tsx
  shared/
    components/
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
  styles/
    base/
      _container.scss
      _helpers.scss
      _normalize.scss
      _typography.scss
    utils/
      _index.scss
      _mixins.scss
      _placeholder.scss
      _variables.scss
    index.scss
  App.scss
  App.tsx
  index.tsx
  vite-env.d.ts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/shared/components/Header/components/Burger/Burger.scss">
@use '../../../../../styles/utils/' as *;

.burger {
  cursor: pointer;

  @extend %square-action-btn;

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

<file path="src/shared/components/Header/components/BurgerMenu/BurgerMenu.scss">
@use '../../../../../styles/utils/' as *;

.burger-menu {
  position: fixed;

  // Отступаем ровно от нижнего края хедера

  top: 48px;
  left: 0;
  width: 100vw;

  // Высота ровно на оставшийся экран

  height: calc(100vh - 48px);

  background-color: $color-surface-1;
  z-index: z('modal'); // Перекрывает основной контент страницы

  // --- Настройки анимации выезда ---
  transform: translateX(-100%); // По умолчанию убрано влево за экран
  transition: transform 0.3s ease;

  // --- Состояние ОТКРЫТО ---
  &.is-open {
    transform: translateX(0); // Плавно выезжает на весь экран
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 24px 16px;
  }
}
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
    <div className={cn('burger-menu', { 'is-hidden': !isBurgerMenuOpen })}>
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

<file path="src/styles/utils/_placeholder.scss">
// Template for square interactive buttons (48x48, centered)
@use './variables' as *;

%square-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-left: 1px solid $color-elements;
  border-right: 1px solid $color-elements;
}
</file>

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

<file path="src/modules/HomePage/components/HomePage.tsx">

</file>

<file path="src/shared/components/Header/components/HaederActions/HaederActions.scss">
@use '../../../../../styles/utils' as *;

.header-actions {
  display: flex;

  &__link {
    position: relative;

    @extend %square-action-btn;
    @include active-underline;
  }

  &__badge-counter {
    // -
  }
}
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

<file path="src/shared/components/Header/components/SearchField/SearchField.scss">
.search {
  height: 100%;
  width: 100%;
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
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__desktop-nav {
    display: none;

    @include on-tablet {
      display: flex;
    }

  }

  &__desktop-actions {
    display: none;

    @include on-tablet {
      display: flex;
    }
  }

  .nav-site {
    margin-inline: 16px;
  }
  .logo {
    flex-shrink: 0;
  }

  .header-actions {
    margin-left: auto;
    flex-shrink: 0;

    @include on-tablet {
      // -
    }

  }
  .burger {
    margin-left: auto;

    @include on-tablet {
      display: none;
    }
  }
}
</file>

<file path="src/shared/components/Header/Header.tsx">
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { HaederActions } from './components/HaederActions';
import { SearchField } from './components/SearchField/SearchField';
import { Burger } from './components/Burger';
import { BurgerMenu } from './components/BurgerMenu';
import { Nav } from '../Nav';

import './Header.scss';

const SEARCH_ALLOWED_ROUTES = [
  '/phones',
  '/tablets',
  '/accessories',
  '/favorites',
] as const;

export const Header = () => {
  const { pathname } = useLocation();

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  console.log('toggle', isBurgerMenuOpen);
  const isSearchVisible = (SEARCH_ALLOWED_ROUTES as readonly string[]).includes(
    pathname,
  );

  return (
    <header className="header">
      {/* Header content */}
      <div className="container header__container">
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

<file path="src/shared/components/Header/index.ts">
export * from './Header'
</file>

<file path="src/shared/components/Logo/index.ts">
export * from './Logo'
</file>

<file path="src/shared/components/Logo/Logo.scss">
@use '../../../styles/utils/' as *;

.logo {
  width: 96px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  

  &__img {
    // -
  }

  @include hover-scale;
}
</file>

<file path="src/shared/components/Logo/Logo.tsx">
import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
  return (
    <Link className="logo " to="/ ">
      <img src="../public/img/logo/logo-light.svg" className="logo__img" alt="logo" />
    </Link>
  );
};
</file>

<file path="src/shared/components/Nav/index.ts">
export * from './Nav'
</file>

<file path="src/shared/components/Nav/Nav.scss">
@use '../../../styles/utils/mixins' as *;
@use '../../../styles/utils/variables' as *;

.nav-site {
  height: 100%;

  &__list {
    display: flex;
    flex-direction: row;
    gap: clamp(32px, 3vw, 64px);
    height: 100%;
  }
  &__item {
    height: 100%;
  }

  &__link {
    display: flex;
    text-transform: uppercase;
    height: 100%;
    align-items: center;

    &:hover {
      color: $color-primary;
    }

    @include active-underline;
  }
}
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
        <li className='nav-site__item'>
          <NavLink to="/" className={isActiveClass}>
            Home
          </NavLink>
        </li>
        <li className='nav-site__item'>
          <NavLink to="/phones" className={isActiveClass}>
            Phones
          </NavLink>
        </li>
        <li className='nav-site__item'>
          <NavLink to="/tablets" className={isActiveClass}>
            Tablets
          </NavLink>
        </li>
        <li className='nav-site__item'>
          <NavLink to="/accessories" className={isActiveClass}>
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
</file>

<file path="src/styles/base/_container.scss">
@use '../utils/' as *;

.container {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;

  @include on-tablet {
    padding: 0 24px;
  }

  @include on-desktop {
    padding: 0 32px;
  }
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

<file path="src/styles/utils/_index.scss">
@forward './variables';
@forward './mixins';
@forward './placeholder';
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

// @mixin hover($_property, $_toValue) {
//   transition: #{$_property} 0.3s;
//   &:hover {
//     #{$_property}: $_toValue;
//   }
// }

@mixin hover-scale {
  transition: $transition-duration;
  &:hover {
    transform: scale(1.08);
  }
}

// @mixin hover-shadow {
//   transition:
//     transform $transition-3,
//     box-shadow $transition-3;

//   &:hover {
//     transform: scale(1.08);
//     box-shadow:
//       0 2px 4px rgba(0, 0, 0, 0.1),
//       0 2px 4px rgba(0, 0, 0, 0.1);
//     @content;
//   }
// }

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
$color-secondary: #89939a;     // Вторичный серый цвет (подзаголовки, описания)
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

// --- Анимации и транзишены ---
$transition-duration: 0.3s;
$transition-effect: ease-in-out;

// ====================
</file>

<file path="src/styles/index.scss">
@use './utils/' as *;
@use './base/normalize';
@use './base/typography';
@use './base/helpers';
@use './base/container';
</file>

<file path="src/vite-env.d.ts">
/// <reference types="vite/client" />
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

<file path="src/App.tsx">
import './App.scss';
import { Header } from './shared/components/Header/Header';

export const App = () => {
  return (
    <div className="app">
      <Header />
      
      <main className="main">
        <div className="container">
          {/* Page content / Router Outlet */}
          Page content / Router Outlet
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          {/* Footer content */}
          Footer content
        </div>
      </footer>
    </div>
  );
};
</file>

</files>
