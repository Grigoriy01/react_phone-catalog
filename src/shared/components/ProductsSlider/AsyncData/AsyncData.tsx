import React from 'react';
import { FetchError } from '../../FetchError';

type Props = {
  hasError: boolean;
  onRetry?: () => void;
  children: React.ReactNode;
};
export const AsyncData: React.FC<Props> = ({ hasError, onRetry, children }) => {
  if (hasError) {
    return <FetchError onRetry={onRetry ?? (() => {})} />;
  }
  return <>{children}</>;
};
