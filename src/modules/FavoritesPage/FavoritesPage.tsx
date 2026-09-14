import { useProducts } from '../HomePage/Hook/useProducts';
import { useFavorites } from '../../shared/context/FavoriteContext';
import { CatalogHeader } from '@/shared/components/CatalogHeader';
import { BreadcrumbsNav } from '../../shared/components/BreadcrumbsNav';
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';

import './FavoritesPage.scss';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { processProducts } from '@/utils';

export const FavoritesPage = () => {
  const [searchParams] = useSearchParams();
  const { favorites } = useFavorites();
  const { isLoading } = useProducts();

  const query = searchParams.get('query') ?? undefined;

  const {totalCount, processedProducts} = useMemo(() => {
    return processProducts(favorites, { query });
  }, [favorites, query]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [favorites]);

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav isLoading={isLoading} />
      <CatalogHeader
        catalogName="Favourites"
        countProduct={totalCount}
        isLoading={isLoading}
      />

      <ProductsList
        products={processedProducts}
        isLoading={isLoading}
        skeletonCount={totalCount}
      />
    </section>
  );
};
