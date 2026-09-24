import React from 'react';
import { PromoSlider } from '../PromoSlider';
import './Hero.scss';

type Props = {
  hasError?: boolean;
};

export const Hero: React.FC<Props> = ({hasError}) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h2 className="hero__title">Welcome to Nice Gadgets store!</h2>
        <PromoSlider hasError={hasError} />
      </div>
    </section>
  );
};
