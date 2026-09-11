import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BackHeaderSkeleton } from './BackHeaderSkeleton';

import './BackHeader.scss';
import { ArrowIcon } from '@/shared/assets/icons/arrow-right';

type Props = {
  catalogTitle?: string;
  className?: string;
};

export const BackHeader: React.FC<Props> = ({
  catalogTitle,
  className = '',
}) => {
  const navigate = useNavigate();

  const handelBack = () => {
    navigate(-1);
  };

  if (catalogTitle) {
    return (
      <div className={`back-header ${className}`.trim()}>
        <button className="back-header__btn" type="button" onClick={handelBack}>
          <ArrowIcon className="back-header__btn-arrow" />
          <span className="back-header__btn-item">Back</span>
        </button>
        <h1 className="back-header__title">{catalogTitle}</h1>
      </div>
    );
  }
  return <BackHeaderSkeleton />;
};
