import { useEffect, useState } from 'react';
import { BackHeader } from '@/shared/components/BackHeader';
import { BreadcrumbsNav } from '@/shared/components/BreadcrumbsNav';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductDetails } from './Hook';
import cn from 'classnames';

import './ProductDetailsPage.scss';
import { useProducts } from '../HomePage/components/Hook/useProducts';

import { ProductActions } from '@/shared/components/ProductActions';
import { Product } from '@/shared/types';
import { ProductPrice } from '@/shared/components/ProductPrice';
import { ProductSpecs } from '@/shared/components/ProductSpecs';
import { AsyncData } from '@/shared/components/ProductsSlider/AsyncData';
import { ProductDetailsSkeleton } from './ProductDetailsSkeleton';

export const ProductDetailsPage = () => {
  const { productId, category } = useParams<{
    productId: string;
    category: string;
  }>();

  const navigate = useNavigate();

  const { isLoading, hasError, product, loadData } = useProductDetails(
    productId,
    category,
  );
  // !!!console.log('Current Product:', product)

  const { products } = useProducts();

  const [selectedImg, setSelectedImg] = useState(product?.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    product?.colorsAvailable[0],
  );
  const [selectedCapacity, setSelectedCapacity] = useState(
    product?.capacityAvailable[0],
  );

  useEffect(() => {
    if (product) {
      setSelectedImg(product.images[0]);
      setSelectedColor(product.color);
      setSelectedCapacity(product.capacity);
    }
  }, [product]);

  const handleColorChenge = (newColor: string) => {
    if (!product) return;

    const selectedProduct = products.find(
      item =>
        item.itemId.includes(product.namespaceId) &&
        item.itemId.includes(newColor) &&
        item.itemId.includes(product.capacity.toLowerCase()),
    );

    if (selectedProduct) {
      navigate(`/${category}/${selectedProduct.itemId}`);
    }
  };

  const handleCapacityChenge = (newCapacity: string) => {
    const selectedProduct = products.find(
      item =>
        item.capacity === newCapacity &&
        item.itemId === product?.id &&
        item.color === product.color,
    );

    if (selectedProduct) {
      navigate(`/${category}/${selectedProduct.itemId}`);
    }
  };

  return (
    <section className="product-details container">
      <BreadcrumbsNav productName={product?.name} />
      <BackHeader catalogTitle={product?.name} />

      <AsyncData hasError={hasError} onRetry={loadData}>
        {isLoading && !hasError ? (
          <ProductDetailsSkeleton />
        ) : (
          <>
            <div className="product-details__main">
              {/* Галерея картинок */}
              <section className="product-details__gallery">
                <div className="product-details__thumbnails">
                  {/* Кнопка превью картинки (выбирается через state) */}
                  {product?.images.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      className={cn('product-details__thumb', {
                        'product-details__thumb--active': selectedImg === img,
                      })}
                      onClick={() => setSelectedImg(img)}
                    >
                      <img
                        src={img}
                        alt={`{product.name}  view ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
                {/* Главное увеличенное фото */}
                <div className="product-details__main-image">
                  <img src={selectedImg} alt={product?.name} />
                </div>
              </section>

              {/* Опции и покупка */}
              <section className="product-details__actions">
                {/* Выбор цвета */}
                <div className="product-details__colors">
                  <div className="product-details__wrapper-label">
                    <span className="product-details__label">
                      Available colors
                    </span>
                    <span className="product-details__id-product">
                      ID: 802390
                    </span>
                  </div>
                  <div className="product-details__color-list">
                    {product?.colorsAvailable.map(color => {
                      const isSelected = selectedColor === color;

                      return (
                        <button
                          key={color}
                          type="button"
                          className={cn('product-details__color-btn', {
                            'product-details__color-btn--active': isSelected,
                          })}
                          style={{ background: color }}
                          onClick={() => handleColorChenge(color)}
                          aria-label=""
                        ></button>
                      );
                    })}
                  </div>
                </div>

                <div className="product-details__divider" />

                {/* Выбор объема памяти */}
                <div className="product-details__capacity">
                  <span className="product-details__label">
                    Select capacity
                  </span>
                  <div className="product-details__capacity-list">
                    {product?.capacityAvailable.map(capacity => {
                      const isSelected = selectedCapacity === capacity;

                      return (
                        <button
                          key={capacity}
                          type="button"
                          className={cn('product-details__capacity-btn', {
                            'product-details__capacity-btn--active': isSelected,
                          })}
                          onClick={() => handleCapacityChenge(capacity)}
                          aria-label=""
                        >
                          {selectedCapacity}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="product-details__divider" />

                {/* Цена */}
                <ProductPrice
                  className="product-details__price-block"
                  price={product?.priceDiscount ?? 0}
                  fullPrice={product?.priceRegular ?? 0}
                />

                {/* Кнопки действия */}
                <ProductActions
                  product={product as unknown as Product}
                  className="product-details__buttons"
                />

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
              </section>

              {/* Нижний блок: Описание и Технические характеристики */}
              <div className="product-details__info">
                {/* Описание */}
                <section className="product-details__about">
                  <h2 className="product-details__section-title">About</h2>

                  <div className="product-details__divider" />

                  <article className="product-details__description">
                    <h3 className="product-details__description-title">
                      {product?.description[0].title}
                    </h3>
                    <p className="product-details__description-text">
                      {product?.description[0].text}
                    </p>
                  </article>
                  <article className="product-details__description">
                    <h3 className="product-details__description-title">
                      {product?.description[1].title}
                    </h3>
                    <p className="product-details__description-text">
                      {product?.description[1].text}
                    </p>
                  </article>
                  <article className="product-details__description">
                    <h3 className="product-details__description-title">
                      {product?.description[2].title}
                    </h3>
                    <p className="product-details__description-text">
                      {product?.description[2].text}
                    </p>
                  </article>
                </section>

                {/* Полные технические характеристики */}
                <section className="product-details__tech-specs">
                  <h2 className="product-details__section-title">Tech specs</h2>

                  <div className="product-details__divider" />

                  <dl className="product-details__specs-list">
                    <div className="product-details__specs-item">
                      <dt>Screen</dt>
                      <dd>6.1' Liquid Retina HD</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Resolution</dt>
                      <dd>1792x828</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Processor</dt>
                      <dd>1792x828</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>RAM</dt>
                      <dd>1792x828</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Built in memory</dt>
                      <dd>1792x828</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Camera</dt>
                      <dd>1792x828</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Zoom</dt>
                      <dd>1792x828</dd>
                    </div>
                    <div className="product-details__specs-item">
                      <dt>Cell</dt>
                      <dd>1792x828</dd>
                    </div>
                  </dl>
                </section>
              </div>
            </div>

            <section className="product-details__recommended">
              <ProductsSlider
                title="You may also like"
                products={recommendedProducts}
              />
            </section>
          </>
        )}
      </AsyncData>
    </section>
  );
};
