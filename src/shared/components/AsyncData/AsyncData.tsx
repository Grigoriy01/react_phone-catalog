import React, { useEffect, useRef } from 'react';
import { FetchError } from '../FetchError';
import { useOnlineStatus } from '@/shared/hooks/useOnlineStatus';

type Props = {
  hasError: boolean;
  isOnline?: boolean;
  onRetry?: () => void;
  children: React.ReactNode;
};
export const AsyncData: React.FC<Props> = ({
  hasError,
  onRetry,
  children,
  isOnline: isOnlineProp,
}) => {
  const isOnlineHook = useOnlineStatus();
  const isOnline = isOnlineProp ?? isOnlineHook;

  //#region save prev-status for auto reload page if internet connected
  const prevIsOnlineRef = useRef(isOnline);

  useEffect(() => {
    const wasOffline = !prevIsOnlineRef.current;
    const isNowOnline = isOnline;

    if (wasOffline && isNowOnline && onRetry) {
      onRetry();
    }

    // Reload Ref
    prevIsOnlineRef.current = isOnline;
  }, [isOnline, onRetry]);
  //#endregion

  if (hasError || !isOnline) {
    return (
      <FetchError onRetry={onRetry} type={!isOnline ? 'offline' : 'server'} />
    );
  }

  return <>{children}</>;
};
