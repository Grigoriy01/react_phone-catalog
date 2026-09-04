import React from 'react';

import './ProductSpecsItem.scss';

type Props = {
  label: string;
  value?: string;
  className?: string;
};

export const ProductSpecsItem: React.FC<Props> = ({
  label,
  value,
  className = '',
}) => {
  if (!value) return null;
  return (
    <div className={`product-specs__row ${className}`.trim()}>
      <dt className="product-specs__name">{label}</dt>
      <dd className="product-specs__value">{value}</dd>
    </div>
  );
};
