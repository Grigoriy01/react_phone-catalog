import './ProductDetailsSkeleton.scss'

export const ProductDetailsSkeleton = () => {
  return (

    <div className="product-details-skeleton">
      {/* Скелетон галереи */}
      <div className="product-details-skeleton__gallery">
        <div className="product-details-skeleton__thumbs">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="product-details-skeleton__thumb-box" />
          ))}
        </div>
        <div className="product-details-skeleton__main-img" />
      </div>

      {/* Скелетон панели выбора */}
      <div className="product-details-skeleton__actions">
        <div className="product-details-skeleton__line product-details-skeleton__line--title" />
        <div className="product-details-skeleton__line product-details-skeleton__line--price" />
        <div className="product-details-skeleton__btn-box" />
      </div>
    </div>
  );
};
