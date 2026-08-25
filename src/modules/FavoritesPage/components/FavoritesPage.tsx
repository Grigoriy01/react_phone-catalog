import { ProductsList } from '@/shared/components/ProductsList/ProductsList';
import { BreadcrumbsNav } from '../../../shared/components/BreadcrumbsNav';
import { useFavorites } from '../../../shared/context/FavoriteContext';
import { CatalogHeader } from '@/shared/components/CatalogHeader';

import './FavoritesPage.scss';
import { useProducts } from '@/modules/HomePage/components/Hook/useProducts';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const {isLoading} = useProducts()

  const countProduct = favorites.length;

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav />
      <CatalogHeader catalogName='Favourites' countProduct={countProduct} />

      <ProductsList products={favorites} isLoading={isLoading} skeletonCount={countProduct} />
    </section>
  );
};
