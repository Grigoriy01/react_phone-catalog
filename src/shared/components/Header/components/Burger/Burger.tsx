import React from 'react';

import cn from 'classnames';
import './Burger.scss';

type Props = {
  onOpenChange: (target: boolean) => void;
  isOpen: boolean;
  className?: string;
};

export const Burger: React.FC<Props> = ({
  isOpen,
  onOpenChange,
  className,
}) => {
  return (
    <button
      className={cn('burger', className)}
      type="button"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      onClick={() => onOpenChange(!isOpen)}
    >
      <span className="burger__line"></span>
    </button>
  );
};
