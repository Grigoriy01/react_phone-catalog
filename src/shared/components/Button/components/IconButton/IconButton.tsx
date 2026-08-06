import React from 'react';
import './IconButton.scss';
import cn from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const IconButton: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(`icon-button ${className || ''}`)}
      {...props}
      >
      {children}
    </button>
  );
};
