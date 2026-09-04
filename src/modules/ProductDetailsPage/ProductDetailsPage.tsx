import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductDetails } from './Hook';
import { useProducts } from '../HomePage/components/Hook/useProducts';
import { getSuggestedProducts } from '@/utils';
import { getColorHex } from '@/utils';
import { Product } from '@/shared/types';
import cn from 'classnames';

import { BackHeader } from '@/shared/components/BackHeader';
import { BreadcrumbsNav } from '@/shared/components/BreadcrumbsNav';
import { ProductActions } from '@/shared/components/ProductActions';
import { ProductPrice } from '@/shared/components/ProductPrice';
import { ProductDetailsSkeleton } from './ProductDetailsSkeleton';
import { ProductsSlider } from '@/shared/components/ProductsSlider';

import { ProductSpecsItem } from '@/shared/components/ProductSpecsItem';
import { FetchError } from '@/shared/components/FetchError';
import './ProductDetailsPage.scss';

export const ProductDetailsPage = () => {
  const { productId, category } = useParams<{
    productId: string;
    category: string;
  }>();

  const { products } = useProducts();
  const { isLoading, hasError, product, loadData } = useProductDetails(
    productId,
    category,
  );

  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  useEffect(() => {
    if (product) {
      setSelectedImg(product.images[0]);
    }
  }, [product]);

  const handleColorChange = (newColor: string) => {
    if (!product) return;

    const targetColor = newColor.toLowerCase();
    const targetCapacity = product.capacity.toLowerCase();

    const selectedProduct = products.find(
      item =>
        item.category === category &&
        item.itemId.includes(product.namespaceId) &&
        item.itemId.endsWith(`-${targetCapacity}-${targetColor}`),
    );

    if (selectedProduct) {
      navigate(`/${category}/${selectedProduct.itemId}`);
    }
  };

  const handleCapacityChange = (newCapacity: string) => {
    if (!product) return;

    const targetCapacity = newCapacity.toLowerCase();
    const targetColor = product.color.toLowerCase();

    const selectedProduct = products.find(
      item =>
        item.category === category &&
        item.itemId.includes(product.namespaceId) &&
        item.itemId.endsWith(`-${targetCapacity}-${targetColor}`),
    );

    if (selectedProduct) {
      navigate(`/${category}/${selectedProduct.itemId}`);
    }
  };

  const currentProduct = products.find(product => product.itemId === productId);

  if (hasError) {
    return (
      <section className="product-details container">
        <BreadcrumbsNav productName={product?.name} className="container" />
        <BackHeader
          catalogTitle={product?.name}
          className="product-details__header"
        />
        <FetchError onRetry={loadData} />
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="product-details container">
        <BreadcrumbsNav productName={product?.name}  />
        <BackHeader
          catalogTitle={product?.name}
          className="product-details__header"
        />
        <ProductDetailsSkeleton />
      </section>
    );
  }

  return (
    <section className="product-details">
      <BreadcrumbsNav productName={product?.name} className="container" />
      <BackHeader
        catalogTitle={product?.name}
        className="product-details__header container"
      />

      <div className="product-details__main container">
        {/* Галерея картинок */}
        <section className="product-details__gallery">
          <div className="product-details__thumbnails">
            {product?.images.map((img, index) => (
              <button
                key={index}
                type="button"
                className={cn('product-details__thumb', {
                  'product-details__thumb--active': selectedImg === img,
                })}
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`${product.name}  view ${index + 1}`} />
              </button>
            ))}
          </div>
          {/* Главное увеличенное фото */}
          <div className="product-details__main-image">
            <img
              src={`${import.meta.env.BASE_URL}${selectedImg}`}
              alt={product?.name}
            />
          </div>
        </section>

        {/* Colors */}
        <section className="product-details__actions">
          <div className="product-details__colors">
            <div className="product-details__wrapper-label">
              <span className="product-details__label">Available colors</span>
              <span className="product-details__id-product">ID: 802390</span>
            </div>
            <div className="product-details__color-list">
              {product?.colorsAvailable.map(color => {
                const isSelected = product.color === color;

                return (
                  <button
                    key={color}
                    type="button"
                    className={cn('product-details__color-btn', {
                      'product-details__color-btn--active': isSelected,
                    })}
                    style={{ background: getColorHex(color) }}
                    onClick={() => handleColorChange(color)}
                    aria-label={color}
                    title={color}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="product-details__inner">
            {/* Выбор объема памяти */}
            <div className="product-details__capacity">
              <span className="product-details__label">Select capacity</span>
              <div className="product-details__capacity-list">
                {product?.capacityAvailable.map(capacity => {
                  const isSelected = product.capacity === capacity;

                  return (
                    <button
                      key={capacity}
                      type="button"
                      className={cn('product-details__capacity-btn', {
                        'product-details__capacity-btn--active': isSelected,
                      })}
                      onClick={() => handleCapacityChange(capacity)}
                      aria-label={capacity}
                    >
                      {capacity}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Цена */}
            <ProductPrice
              className="product-details__price-block"
              price={product?.priceDiscount ?? 0}
              fullPrice={product?.priceRegular ?? 0}
            />

            {/* Кнопки действия */}
            {currentProduct && (
              <ProductActions
                product={currentProduct as Product}
                className="product-details__buttons"
              />
            )}

            {/* Краткие характеристики */}
            <dl className="product-details__specs-summary">
              <div className="product-details__specs-item">
                <dt>Screen</dt>
                <dd>{product?.screen}</dd>
              </div>
              <div className="product-details__specs-item">
                <dt>Resolution</dt>
                <dd>{product?.resolution}</dd>
              </div>
              <div className="product-details__specs-item">
                <dt>Processor</dt>
                <dd>{product?.processor}</dd>
              </div>
              <div className="product-details__specs-item">
                <dt>RAM</dt>
                <dd>{product?.ram}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Нижний блок: Описание и Технические характеристики */}
        <div className="product-details__info">
          {/* Описание */}
          <section className="product-details__about">
            <h2 className="product-details__section-title">About</h2>

            {product?.description.map(({ title, text }, idx) => (
              <article className="product-details__description" key={idx}>
                <h3 className="product-details__description-title">{title}</h3>
                {text.map((paragraph, pIdx) => (
                  <p className="product-details__description-text" key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </section>

          {/* Полные технические характеристики */}
          <section className="product-details__tech-specs">
            <h2 className="product-details__section-title">Tech specs</h2>

            <dl className="product-details__specs-list">
              <ProductSpecsItem
                label="Screen"
                value={product?.screen}
                className="product-details__specs-item"
              />
              <ProductSpecsItem
                label="Resolution"
                value={product?.resolution}
                className="product-details__specs-item"
              />
              <ProductSpecsItem
                label="Processor"
                value={product?.processor}
                className="product-details__specs-item"
              />
              <ProductSpecsItem
                label="RAM"
                value={product?.ram}
                className="product-details__specs-item"
              />
              <ProductSpecsItem
                label="Built in memory"
                value={product?.capacity}
                className="product-details__specs-item"
              />
              <ProductSpecsItem
                label="Camera"
                value={product?.camera}
                className="product-details__specs-item"
              />
              <ProductSpecsItem
                label="Zoom"
                value={product?.zoom}
                className="product-details__specs-item"
              />
              <ProductSpecsItem
                label="Cell"
                value={product?.cell.join(', ')}
                className="product-details__specs-item"
              />
            </dl>
          </section>
        </div>
      </div>

      <section className="product-details__recommended">
        <ProductsSlider
          title="You may also like"
          products={product ? getSuggestedProducts(products, product.id) : []}
          className="product-details__recommended"
          hasError={hasError}
          onRetry={loadData}
          isLoading={isLoading}
        />
      </section>
    </section>
  );
};
