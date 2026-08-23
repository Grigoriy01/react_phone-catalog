import { ProductsList } from '@/shared/components/ProductList/ProductsList';
import { BreadcrumbsNav } from '../../../shared/components/BreadcrumbsNav';
import { useFavorites } from '../../../shared/context/FavoriteContext';
import { CatalogHeader } from '@/shared/components/CatalogHeader';

import './FavoritesPage.scss';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  const countProduct = favorites.length;

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav />
      <CatalogHeader catalogName='Favourites' countProduct={countProduct} />
      <ProductsList products={favorites} />
    </section>
  );
};
