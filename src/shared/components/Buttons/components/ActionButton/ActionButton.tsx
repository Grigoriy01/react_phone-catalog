import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import './ActionButton.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
  to?: string;
  variant?: 'primary' | 'secondary';
}

export const ActionButton: React.FC<Props> = ({
  children,
  className,
  isActive = false,
  to,
  variant = 'primary',
  ...props
}) => {
  const combinedClassName = cn(
    'action-button',
    `action-button--${variant}`,
    className,
    {
      'action-button--active': isActive,
    },
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
