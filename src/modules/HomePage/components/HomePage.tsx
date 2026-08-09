import { PromoSlider } from "./PromoSlider";

export const HomePage = () => {
  return (
    <div className="home-page">
          <section className="hero">
            <div className="hero__container container">
              <h2 className="hero__title">Welcome to Nice Gadgets store!</h2>
              
              <div className="hero__slider">

                <PromoSlider />
              </div>
            </div>
          </section>
        </div>
  );
};
