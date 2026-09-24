import React from 'react';

import { ConnectionLostImg } from '@/shared/assets/error-img';
import { ActionButton } from '../Buttons/components/ActionButton';

import cn from 'classnames';
import './FetchError.scss';

type Props = {
  message?: string;
  onRetry?: () => void;
  className?: string;
};
export const FetchError: React.FC<Props> = ({
  message = 'Something went wrong. Failed to load data.',
  onRetry,
  className = '',
}) => {
  return (
    <div className={cn('error-message', className)} role="alert">
      <ConnectionLostImg className="error-message__image" />

      <p className="error-message__text">{message}</p>

      {onRetry && (
        <ActionButton
          className="error-message__button"
          onClick={onRetry}
          variant="secondary"
        >
          Reload page
        </ActionButton>
      )}
    </div>
  );
};
