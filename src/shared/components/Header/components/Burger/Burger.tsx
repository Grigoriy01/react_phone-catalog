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
