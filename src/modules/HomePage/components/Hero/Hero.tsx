import React from 'react';
import { PromoSlider } from '../PromoSlider';
import './Hero.scss';
import { ThemeToggle } from '@/shared/components/ThemeToggle';

type Props = {
  hasError?: boolean;
  isLoading?: boolean;
};

export const Hero: React.FC<Props> = ({ hasError, isLoading }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__top-bar">
          <h2 className="hero__title">Welcome to Nice Gadgets store!</h2>
          <ThemeToggle
            className="hero__theme-btn"
            isLoading={isLoading}
            hasError={hasError}
          />
        </div>
        <PromoSlider hasError={hasError} />
      </div>
    </section>
  );
};
