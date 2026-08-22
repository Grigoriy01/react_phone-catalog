import { ProductList } from '@/shared/components/ProductList/ProductList';
import { BreadcrumbsNav } from '../../../shared/components/BreadcrumbsNav';
import { useFavorites } from '../../../shared/context/FavoriteContext';

import './FavoritesPage.scss';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <section className="favorites-page container">
      <BreadcrumbsNav />
      <h1 className="favorites-page__title">Favourites</h1>
      <div className="favorites-page__count">{favorites.length} items</div>

      <ProductList products={favorites} />
    </section>
  );
};
