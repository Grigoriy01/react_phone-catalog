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
