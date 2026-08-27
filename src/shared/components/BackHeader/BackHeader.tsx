import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  catalogTitle?: string;
};

export const BackHeader: React.FC<Props> = ({ catalogTitle }) => {
  const navigate = useNavigate();

  const handelBack = () => {
    navigate(-1);
  };

  return (
    <div className="back-header">
      <button className="back-header__btn" type="button" onClick={handelBack}>
        Back
      </button>
      <h1 className="back-header__title">{catalogTitle}</h1>
    </div>
  );
};
