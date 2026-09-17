import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { useProducts } from '../HomePage/Hook/useProducts';
import { SORT_BY } from '@/shared/types';
import {
  PER_PAGE_PARAM,
  processProducts,
  SORT_PARAM,
  PAGE_PARAM,
  getSortByFromSearchParams,
  getPerPageFromSearchParams,
  getPageFromSearchParams,
  VALID_CATEGORIES,
  CATEGORY_TITLES,
  SORT_OPTIONS,
} from '@/utils';

import { BreadcrumbsNav } from '@/shared/components/BreadcrumbsNav';
import { CatalogHeader } from '@/shared/components/CatalogHeader';
import { ProductsList } from '@/shared/components/ProductsList/ProductsList';
import { NotFoundPage } from '../NotFoundPage';
import {
  DropdownSelect,
  DropdownSelectSkeleton,
} from '@/shared/components/DropdownSelect';
import {
  Pagination,
  PaginationSkeleton,
  PER_PAGE_ALL,
  DEFAULT_PAGE,
  PER_PAGE_OPTIONS,
} from '@/shared/components/Pagination';

import './CatalogPage.scss';

export const CatalogPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  if (!category || !VALID_CATEGORIES.includes(category as any)) {
    return <NotFoundPage />;
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading } = useProducts();

  //#region Url params
  const query = searchParams.get('query') || '';
  const perPageStr = getPerPageFromSearchParams(searchParams);
  const currentPage = getPageFromSearchParams(searchParams);
  const sortBy = getSortByFromSearchParams(searchParams);
  //#endregion Url params

  const categoryProducts = useMemo(() => {
    return products.filter(product => product.category === category);
  }, [products, category]);

  const categoryTitle = CATEGORY_TITLES[category];

  // sort - search - pagination
  const { totalCount, processedProducts } = useMemo(() => {
    return processProducts(categoryProducts, {
      query,
      sortBy,
      page: currentPage,
      perPage: perPageStr === PER_PAGE_ALL ? PER_PAGE_ALL : Number(perPageStr),
    });
  }, [query, perPageStr, currentPage, categoryProducts, sortBy]);

  const perPageNum =
    perPageStr === PER_PAGE_ALL ? totalCount : Number(perPageStr);

  //#region handles (updating Urls)
  const updateUrlParams = (newParams: Record<string, string | null>) => {
    const nextParams = new URLSearchParams(searchParams);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null) {
        nextParams.delete(key);
      } else {
        nextParams.set(key, value);
      }
    });

    setSearchParams(nextParams);
  };

  const handlePerPageChange = (value: string) => {
    updateUrlParams({
      [PER_PAGE_PARAM]: value === PER_PAGE_ALL ? null : value,
      [PAGE_PARAM]: null,
    });
  };

  const handlePageChange = (page: number) => {
    updateUrlParams({
      [PAGE_PARAM]: page === DEFAULT_PAGE ? null : String(page),
    });
  };

  const handleSortChange = (value: string) => {
    updateUrlParams({
      [SORT_PARAM]: value === SORT_BY.AGE ? null : value,
      [PAGE_PARAM]: null,
    });
  };
  //#endregion handles (updating Urls)

  return (
    <section className="catalog-page container">
      <BreadcrumbsNav isLoading={isLoading} />
      <CatalogHeader
        catalogName={categoryTitle}
        countProduct={totalCount}
        isLoading={isLoading}
      />

      <div className="catalog-page__controls">
        {isLoading ? (
          <>
            <DropdownSelectSkeleton />
            <DropdownSelectSkeleton />
          </>
        ) : (
          <>
            <DropdownSelect
              label="Sort by"
              value={sortBy}
              options={SORT_OPTIONS}
              onChange={handleSortChange}
            />
            <DropdownSelect
              label="Items on page"
              value={perPageStr}
              options={PER_PAGE_OPTIONS}
              onChange={handlePerPageChange}
              className="catalog-page__select-page"
            />
          </>
        )}
      </div>

      <ProductsList products={processedProducts} isLoading={isLoading} />

      <div className="catalog-page__pagination">
        {isLoading ? (
          <PaginationSkeleton />
        ) : (
          perPageStr !== PER_PAGE_ALL && (
            <Pagination
              total={totalCount}
              perPage={perPageNum}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )
        )}
      </div>
    </section>
  );
};
