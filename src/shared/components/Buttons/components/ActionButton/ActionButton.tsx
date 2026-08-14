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
