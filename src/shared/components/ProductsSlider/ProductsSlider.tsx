import React, { useRef } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconButton } from '../Button/components/IconButton';

import cn from 'classnames';
import './ProductsSlider.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';

import './ProductsSlider.scss'

type Props = {
  className?: string;
  title: string;
  visibleNewModels: Product[] | null;
};

export const ProductsSlider: React.FC<Props> = ({
  className,
  title,
  visibleNewModels,
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className={cn('products-slider', className)}>
      <div className="products-slider__header">
        <h2 className="products-slider__title">{title}</h2>
        <div className="products-slider__navigation">
          <IconButton
            className="products-slider__btn products-slider__btn--prev"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev}
            disabled={swiperRef.current?.isEnd}
          >
            <img
              className="products-slider__icon"
              src="/img/icons/arrow-right.svg"
              alt="Previous"
            />
          </IconButton>

          <IconButton
            className="products-slider__btn products-slider__btn--next"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext}
            disabled={swiperRef.current?.isBeginning}
          >
            <img
              className="products-slider__icon"
              src="/img/icons/arrow-right.svg"
              alt="Next"
            />
          </IconButton>
        </div>
      </div>

      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        slidesPerView={'auto'}
        spaceBetween={0}
        className="products-slider__swiper"
      >
        {(visibleNewModels ?? []).map(product => (
          <SwiperSlide className="products-slider__slide" key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
