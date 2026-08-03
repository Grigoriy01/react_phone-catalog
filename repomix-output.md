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
    HomePage/
      HomePage.tsx
  shared/
    components/
      Header/
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
      _variables.scss
    index.scss
  App.scss
  App.tsx
  index.tsx
  vite-env.d.ts
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/modules/HomePage/HomePage.tsx">

</file>

<file path="src/shared/components/Header/Header.scss">
.header {
  position: sticky;
  top: 0;
  z-index: z('header');
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 48px;
  width: 100%;
}
</file>

<file path="src/shared/components/Header/Header.tsx">
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      {/* Header content */}
      <div className="container container--header">
        <Logo />
      </div>
    </header>
  );
};
</file>

<file path="src/shared/components/Header/index.ts">
export * from './Header.scss'
</file>

<file path="src/shared/components/Logo/index.ts">
export * from './Logo.scss'
</file>

<file path="src/shared/components/Logo/Logo.scss">
@use '/src/styles/utils/' as *;

.logo {
  width: 96px;
  height: 100%;



  &__img {
    width: 100%;
    height: 100%;
  }

  @include hover-scale;
}
</file>

<file path="src/shared/components/Logo/Logo.tsx">
import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
  return (
    <Link className="logo" to="/ ">
      <img src="../public/img/logo/logo-light.svg" className="logo__img" alt="logo" />
    </Link>
  );
};
</file>

<file path="src/shared/components/Nav/index.ts">
export * from './Nav.scss'
</file>

<file path="src/shared/components/Nav/Nav.scss">
// empty
</file>

<file path="src/shared/components/Nav/Nav.tsx">
import './Nav.scss'
export const Nav = () => {
  return (

  );
};
</file>

<file path="src/styles/base/_container.scss">
@use '../utils/' as *;

.container {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;

  &--header {
    padding: 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
  }

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
</file>

<file path="src/styles/utils/_mixins.scss">
@use '../utils' as *;

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
}

@mixin hover-shadow {
  transition:
    transform $transition-3,
    box-shadow $transition-3;

  &:hover {
    transform: scale(1.08);
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.1);
    @content;
  }
}
</file>

<file path="src/styles/utils/_variables.scss">
$z-indexes: (
  'dropdown': 100,
  'header': 500,
  'overlay': 900,
  'modal': 1000,
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
