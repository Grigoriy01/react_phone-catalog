import React, { useEffect } from 'react';
import { Nav } from '../../../Nav';
import { HeaderActions } from '../HeaderActions';
import cn from 'classnames';

import './BurgerMenu.scss';

type Props = {
  isBurgerMenuOpen: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ isBurgerMenuOpen }) => {
  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.classList.add('is-locked');
    } else {
      document.body.classList.remove('is-locked');
    }

    return () => {
      document.body.classList.remove('is-locked');
    };
  }, [isBurgerMenuOpen]);

  return (
    <div className={cn('burger-menu', { 'is-open': isBurgerMenuOpen })}>
      <div className="burger-menu__content">
        <Nav />
        <HeaderActions />
      </div>
    </div>
  );
};
