import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowIcon } from '@/shared/assets/icons';

import './BackHeader.scss';

type Props = {
  catalogTitle?: string;
  className?: string;
  hasError: boolean;
};

export const BackHeader: React.FC<Props> = ({
  catalogTitle,
  className = '',
  hasError,
}) => {
  const navigate = useNavigate();

  const handelBack = () => {
    navigate(-1);
  };

  return (
    <div className={`back-header ${className}`.trim()}>
      {hasError && (
        <button className="back-header__btn" type="button" onClick={handelBack}>
          <ArrowIcon className="back-header__btn-arrow" />
          <span className="back-header__btn-item">Back</span>
        </button>
      )}

      <h1 className="back-header__title">{catalogTitle}</h1>
    </div>
  );
};
