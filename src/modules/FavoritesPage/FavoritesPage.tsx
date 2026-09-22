import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useProducts } from '../HomePage/Hook/useProducts';
import { useFavorites } from '../../shared/context/FavoriteContext';
import { processProducts } from '@/utils';

import { CatalogHeader } from '@/shared/components/CatalogHeader';
import { BreadcrumbsNav } from '../../shared/components/BreadcrumbsNav';
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';

import './FavoritesPage.scss';
import { FetchError } from '@/shared/components/FetchError';
import { EmptyFavIcon } from '@/shared/assets/icons';
import { EmptyState } from '@/shared/components/EmptyState';

export const FavoritesPage = () => {
  const [searchParams] = useSearchParams();
  const { favorites } = useFavorites();
  const { isLoading, hasError, loadData } = useProducts();

  const query = searchParams.get('query') ?? undefined;

  const { totalCount, processedProducts } = useMemo(() => {
    return processProducts(favorites, { query });
  }, [favorites, query]);

  if (hasError) {
    return (
      <section className="favorites-page container">
        <CatalogHeader
          catalogName="Favorites"
          countProduct={totalCount}
          isLoading={false}
          hasError={true}
        />
        <FetchError onRetry={loadData} className="favorites-page__error" />
      </section>
    );
  }

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav isLoading={isLoading} />
      <CatalogHeader
        catalogName="Favorites"
        countProduct={totalCount}
        isLoading={isLoading}
        hasError={hasError}
      />

      {processedProducts.length === 0 && !isLoading ? (
        <EmptyState
          className="favorites-page__empty"
          title="Your favorites list is empty"
        >
          <EmptyFavIcon className="empty-icon-heart" />
        </EmptyState>
      ) : (
        <ProductsList
          products={processedProducts}
          isLoading={isLoading}
          skeletonCount={totalCount}
        />
      )}
    </section>
  );
};
