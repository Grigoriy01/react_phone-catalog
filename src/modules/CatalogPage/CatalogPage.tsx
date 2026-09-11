//#region import
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { SelectOption, SortBy, SORT_BY, isSortBy } from '@/shared/types';
import { getSortBySelected } from '@/utils';

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
  PAGE_PARAM,
  PER_PAGE_ALL,
  DEFAULT_PAGE,
  PER_PAGE_OPTIONS,
  getPageFromSearchParams,
  getPerPageFromSearchParams,
} from '@/shared/components/Pagination';

import './CatalogPage.scss';
import { useProducts } from '../HomePage/Hook/useProducts';
//#endregion import

const SORT_PARAM = 'sort';
//const PAGE_PARAM = 'page';
const PER_PAGE_PARAM = 'perPage';

//const PER_PAGE_ALL = 'all';

const VALID_CATEGORIES = ['phones', 'tablets', 'accessories'] as const;

const CATEGORY_TITLES: Record<string, string> = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

const SORT_OPTIONS: SelectOption[] = [
  { value: SORT_BY.AGE, label: 'Newest' },
  { value: SORT_BY.TITLE, label: 'Alphabetically' },
  { value: SORT_BY.PRICE, label: 'Cheapest' },
];

function getSortByFromSearchParams(searchParams: URLSearchParams): SortBy {
  const sort = searchParams.get(SORT_PARAM);

  return isSortBy(sort) ? sort : SORT_BY.AGE;
}

export const CatalogPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  if (!category || !VALID_CATEGORIES.includes(category as any)) {
    return <NotFoundPage />;
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading } = useProducts();

  const categoryTitle = CATEGORY_TITLES[category];
  const categoryProducts = products.filter(
    product => product.category === category,
  );
  const countProducts = categoryProducts.length;

  const sortBy = getSortByFromSearchParams(searchParams);
  const sortedPhones = getSortBySelected(categoryProducts, sortBy);

  //#region Pagination logic
  const currentPage = getPageFromSearchParams(searchParams);
  const perPageStr = getPerPageFromSearchParams(searchParams);
  const perPageNum =
    perPageStr === PER_PAGE_ALL ? countProducts : Number(perPageStr);
  const startIndex = (currentPage - 1) * perPageNum;
  const endIndex = startIndex + perPageNum;
  const visibleProducts =
    perPageStr === PER_PAGE_ALL
      ? sortedPhones
      : sortedPhones.slice(startIndex, endIndex);

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
  //#endregion Pagination logic

  const handleSortChange = (value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.set(SORT_PARAM, value);
    setSearchParams(nextParams);
  };

  return (
    <section className="catalog-page container">
      <BreadcrumbsNav isLoading={isLoading} />
      <CatalogHeader
        catalogName={categoryTitle}
        countProduct={countProducts}
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

      <ProductsList products={visibleProducts} isLoading={isLoading} />

      <div className="catalog-page__pagination">
        {isLoading ? (
          <PaginationSkeleton />
        ) : (
          perPageStr !== PER_PAGE_ALL && (
            <Pagination
              total={countProducts}
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
