import React from 'react';

import './FetchError.scss';
import { ConnectionLostImg } from '@/shared/assets/error-img';
import { ActionButton } from '../Buttons/components/ActionButton';

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
    <div className={`error-message ${className}`.trim()} role="alert">
      <ConnectionLostImg className="error-message__image" />

      <h2 className="error-message__text">{message}</h2>

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
