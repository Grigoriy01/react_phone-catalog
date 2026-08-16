import React from 'react';

import './FetchError.scss';
type Props = {
  message?: string;
  onRetry: () => void;
};
export const FetchError: React.FC<Props> = ({
  message = 'Something went wrong. Failed to load data.',
  onRetry,
}) => {
  return (
    <div className="error-message" role="alert">
      <img
        className="error-message__image"
        src="/img/product-not-found.png"
        alt="Error indicator"
      />

      <p className="error-message__text">{message}</p>

      <button type="button" className="error-message__button" onClick={onRetry}>
        Reload page
      </button>
    </div>
  );
};
