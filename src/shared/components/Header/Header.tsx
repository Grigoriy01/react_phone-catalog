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
        {isSearchVisible  && (<SearchField />)}
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
