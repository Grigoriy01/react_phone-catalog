import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { processProducts } from '@/utils';

import { useProducts } from '../HomePage/hooks/useProducts';
import { useFavorites } from '@/shared/context/FavoriteContext';

import { CatalogHeader } from '@/shared/components/CatalogHeader';
import { BreadcrumbsNav } from '@/shared/components/BreadcrumbsNav';
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';
import { FetchError } from '@/shared/components/FetchError';
import { EmptyFavIcon } from '@/shared/assets/icons';
import { EmptyState } from '@/shared/components/EmptyState';

import './FavoritesPage.scss';

export const FavoritesPage = () => {
  const [searchParams] = useSearchParams();
  const { favorites } = useFavorites();
  const { isLoading, hasError, loadData } = useProducts();

  const query = searchParams.get('query') ?? undefined;

  const { totalCount, processedProducts } = useMemo(() => {
    return processProducts(favorites, { query });
  }, [favorites, query]);

  return (
    <div className="favorites-page container">
      {!hasError && <BreadcrumbsNav isLoading={isLoading} />}

      <CatalogHeader
        catalogName="Favorites"
        countProduct={totalCount}
        isLoading={isLoading}
        hasError={hasError}
        className="favorites-page__header"
      />

      {hasError ? (
        <FetchError onRetry={loadData} className="favorites-page__error" />
      ) : processedProducts.length > 0 || isLoading ? (
        <ProductsList
          products={processedProducts}
          isLoading={isLoading}
          skeletonCount={favorites.length || 3}
        />
      ) : (
        <EmptyState title="Your favorites list is empty">
          <EmptyFavIcon />
        </EmptyState>
      )}
    </div>
  );
};
