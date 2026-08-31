import React from 'react';
import { Nav } from '../../../Nav';
import { HeaderActions } from '../HeaderActions';
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
        <HeaderActions />
      </div>
    </div>
  );
};
