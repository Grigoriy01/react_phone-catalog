import { BreadcrumbsNav } from '@/shared/components/BreadcrumbsNav';
import { CatalogHeader } from '@/shared/components/CatalogHeader';
import { PhonesPageList } from './components/PhonesPageList';
import { useProducts } from '../HomePage/components/Hook/useProducts';

import './PhonesPage.scss'

export const PhonesPage = () => {
  const { products, isLoading, hasError, loadData } = useProducts();

  const phonesCatalog = products.filter(product => product.category === 'phones');
  const countProduct = phonesCatalog.length;
  return (
    <section className="phones-page container">
      <BreadcrumbsNav />
      <CatalogHeader catalogName="Phones" countProduct={countProduct} isLoading={isLoading} />
      <PhonesPageList products={phonesCatalog} isLoading={isLoading} />
    </section>
  );
};
