import React from 'react';
import { ActionButton } from '../Buttons/components/ActionButton';

import cn from 'classnames';
import './EmptyState.scss';

interface Props {
  title: string;
  children: React.ReactNode;
  buttonText?: string;
  buttonTo?: string;
  className?: string;
}

export const EmptyState: React.FC<Props> = ({
  title,
  children,
  buttonText = 'Go to catalog',
  buttonTo = '/phones',
  className,
}) => {
  return (
    <div className={cn('empty-state', className)}>
      <p className="empty-state__title">{title}</p>

      <div className="empty-state__icon">{children}</div>

      {buttonTo && (
        <ActionButton to={buttonTo} className="empty-state__btn">
          {buttonText}
        </ActionButton>
      )}
    </div>
  );
};
