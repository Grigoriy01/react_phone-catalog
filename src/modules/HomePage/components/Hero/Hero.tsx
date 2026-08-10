import { PromoSlider } from '../PromoSlider';
import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h2 className="hero__title">Welcome to Nice Gadgets store!</h2>
      </div>

      <div className="hero__slider-wrapper">
        <PromoSlider />
      </div>
    </section>
  );
};
