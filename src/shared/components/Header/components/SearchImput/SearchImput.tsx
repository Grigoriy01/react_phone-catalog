import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith, QUERY_PARAM } from '@/utils';

import { DeleteIcon } from '@/shared/assets/icons';

import './SearchImput.scss';

export const SearchImput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get(QUERY_PARAM) || '';

  const [inputValue, setInputValue] = useState(queryParam);

  // sync local state if the URL outside changed
  useEffect(() => {
    setInputValue(queryParam);
  }, [queryParam]);

  // Debounce
  useEffect(() => {
    if (inputValue === queryParam) return;

    const timerId = setTimeout(() => {
      const newSearch = getSearchWith(
        { [QUERY_PARAM]: inputValue.trim() || null, page: null },
        searchParams,
      );

      setSearchParams(newSearch);
    }, 300);

    return () => clearTimeout(timerId);
  }, [inputValue, queryParam, searchParams, setSearchParams]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <label className="search-input" aria-label="Search feild">
      <input
      className="search-input__control"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search ..."
      />
      {inputValue && (
        <button
          className="search-input__clear-btn"
          onClick={() => setInputValue('')}
        >
          <DeleteIcon className="search-input__clear-icon" />
        </button>
      )}
    </label>
  );
};
