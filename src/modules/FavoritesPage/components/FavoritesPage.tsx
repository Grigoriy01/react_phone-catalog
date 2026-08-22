import { BreadcrumbsNav } from '../../../shared/components/BreadcrumbsNav';
import { ProductCard } from '../../../shared/components/ProductCard';
import { useFavorites } from '../../../shared/context/FavoriteContext';

import './FavoritesPage.scss';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <section className="favorites-page">
      <BreadcrumbsNav />
      <h1 className="favorites-page__title">Favourites</h1>
      <div className="favorites-page__count">{favorites.length} items</div>

      {favorites.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
};
