import React from 'react';
import './Pagination.scss';

export const PaginationSkeleton: React.FC = () => {
  return (
    <div className="pagination pagination--skeleton">
      <div className="pagination__button pagination__button--skeleton" />
      <div className="pagination__list">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="pagination__button pagination__button--skeleton"
          />
        ))}
      </div>
      <div className="pagination__button pagination__button--skeleton" />
    </div>
  );
};
