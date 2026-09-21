import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useProducts } from '../HomePage/Hook/useProducts';
import { useFavorites } from '../../shared/context/FavoriteContext';
import { processProducts } from '@/utils';

import { CatalogHeader } from '@/shared/components/CatalogHeader';
import { BreadcrumbsNav } from '../../shared/components/BreadcrumbsNav';
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';

import './FavoritesPage.scss';

export const FavoritesPage = () => {
  const [searchParams] = useSearchParams();
  const { favorites } = useFavorites();
  const { isLoading, hasError, loadData } = useProducts();

  const query = searchParams.get('query') ?? undefined;

  const {totalCount, processedProducts} = useMemo(() => {
    return processProducts(favorites, { query });
  }, [favorites, query]);

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav isLoading={isLoading} />
      <CatalogHeader
        catalogName="Favourites"
        countProduct={totalCount}
        isLoading={isLoading}
        hasError={hasError}
      />

      <ProductsList
        products={processedProducts}
        isLoading={isLoading}
        skeletonCount={totalCount}
        hasError={hasError}
        massege='Your favorites list is empty'
        onRetry={loadData}
      />
    </section>
  );
};
