import { ProductsSlider } from "../../../../shared/components/ProductsSlider";
import './HotPrices.scss';

export const HotPrices = () => {
  return (
    <section className="brand-new-models">
          <ProductsSlider
            hasError={hasError}
            isLoading={isLoading}
            title="Brand New Models"
            visibleNewModels={visibleNewModels}
          />
        </section>
  );
};
