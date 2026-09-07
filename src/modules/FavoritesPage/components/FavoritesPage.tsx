import { useEffect } from 'react';
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';
import { BreadcrumbsNav } from '../../../shared/components/BreadcrumbsNav';
import { useFavorites } from '../../../shared/context/FavoriteContext';
import { CatalogHeader } from '@/shared/components/CatalogHeader';
import { useProducts } from '@/modules/HomePage/components/Hook/useProducts';

import './FavoritesPage.scss';

export const FavoritesPage = () => {


  const { favorites } = useFavorites();
  const {isLoading} = useProducts()
  const countProduct = favorites.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [favorites]);

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav />
      <CatalogHeader catalogName='Favourites' countProduct={countProduct} isLoading={isLoading} />

      <ProductsList products={favorites} isLoading={isLoading} skeletonCount={countProduct} />
    </section>
  );
};
