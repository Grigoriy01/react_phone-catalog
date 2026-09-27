import React from 'react';
import { itemsText } from '@/utils';

import cn from 'classnames';
import './CatalogHeader.scss';
import { useOnlineStatus } from '@/shared/hooks/useOnlineStatus';

type Props = {
  countProduct: number;
  catalogName: string;
  className?: string;
  isLoading?: boolean;
  hasError?: boolean;
};
export const CatalogHeader: React.FC<Props> = ({
  countProduct,
  catalogName,
  isLoading,
  hasError,
  className,
}) => {
  const isOnline = useOnlineStatus();

  return (
    <div className={cn('catalog-header', className)}>
      <h1 className="catalog-header__title">{catalogName}</h1>

      {hasError || !isOnline ? null : isLoading ||
        countProduct === undefined ? (
        <div className="catalog-header__count-skeleton"></div>
      ) : (
        <div className="catalog-header__count">
          {countProduct} {itemsText(countProduct)}
        </div>
      )}
    </div>
  );
};
