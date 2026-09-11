import { SelectOption } from '@/shared/types';

export const PAGE_PARAM = 'page';
export const PER_PAGE_PARAM = 'perPage';
export const PER_PAGE_ALL = 'all';
export const DEFAULT_PAGE = 1;

export const PER_PAGE_OPTIONS: SelectOption[] = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
  { value: PER_PAGE_ALL, label: 'All' },
];

export function getPageFromSearchParams(searchParams: URLSearchParams): number {
  const page = searchParams.get(PAGE_PARAM);
  const parsedPage = Number(page);

  return parsedPage && !isNaN(parsedPage) && parsedPage > 0
    ? parsedPage
    : DEFAULT_PAGE;
}

export function getPerPageFromSearchParams(searchParams: URLSearchParams): string {
  const perPage = searchParams.get(PER_PAGE_PARAM);
  const validValues = PER_PAGE_OPTIONS.map(option => option.value);

  return perPage && validValues.includes(perPage) ? perPage : PER_PAGE_ALL;
}
