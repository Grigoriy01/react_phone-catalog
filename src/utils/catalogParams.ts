import {
  DEFAULT_PAGE,
  PER_PAGE_ALL,
  PER_PAGE_OPTIONS,
} from '@/shared/components/Pagination';
import { isSortBy, SORT_BY, SortBy } from '@/shared/types';

export const SORT_PARAM = 'sort';
export const PER_PAGE_PARAM = 'perPage';
export const PAGE_PARAM = 'page';
export const QUERY_PARAM = 'query';

export function getSortByFromSearchParams(searchParams: URLSearchParams): SortBy {
  const sort = searchParams.get(SORT_PARAM);

  return isSortBy(sort) ? sort : SORT_BY.AGE;
}

export function getPageFromSearchParams(searchParams: URLSearchParams): number {
  const page = searchParams.get(PAGE_PARAM);
  const parsedPage = Number(page);

  return parsedPage && !isNaN(parsedPage) && parsedPage > 0
    ? parsedPage
    : DEFAULT_PAGE;
}

export function getPerPageFromSearchParams(
  searchParams: URLSearchParams,
): string {
  const perPage = searchParams.get(PER_PAGE_PARAM);
  const validValues = PER_PAGE_OPTIONS.map(option => option.value);

  return perPage && validValues.includes(perPage) ? perPage : PER_PAGE_ALL;
}
