import React, { useRef, useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowIcon from '@/shared/assets/arrow-right/arrow-right.svg?react';

import { IconButton } from '../Buttons/components/IconButton';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';
import { ProductCardSkeleton } from '../ProductCard/component/ProductCardSkeleton/ProductCardSkeleton';

import './ProductsSlider.scss';
import './ProductsSlider.scss';
import cn from 'classnames';

type Props = {
  isLoading: boolean;
  className?: string;
  title: string;
  products: Product[] | null;
};

export const ProductsSlider: React.FC<Props> = ({
  className,
  title,
  products,
  isLoading,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className={cn('products-slider', className)}>
      <div className="products-slider__header">
        <h2 className="products-slider__title">{title}</h2>
        <div className="products-slider__navigation">
          <IconButton
            className="products-slider__btn products-slider__btn--prev"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowIcon className="products-slider__icon" />
            {/* <img
              className="products-slider__icon"
              src="/img/icons/arrow-right.svg"
              alt="Previous"
            /> */}
          </IconButton>

          <IconButton
            className="products-slider__btn products-slider__btn--next"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowIcon className="products-slider__icon" />
            {/* <img
              className="products-slider__icon"
              src="/img/icons/arrow-right.svg"
              alt="Next"
            /> */}
          </IconButton>
        </div>
      </div>

      <div className="products-slider__swiper-wrapper">
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: { slidesPerView: 'auto' },
            640: { slidesPerView: 'auto' },
            1200: { slidesPerView: 4 },
          }}
          //slidesPerView={'auto'}
          spaceBetween={16}
          className="styles-mySwiper"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <SwiperSlide className="mySwiper-slide" key={index}>
                  <ProductCardSkeleton />
                </SwiperSlide>
              ))
            : (products ?? []).map(product => (
                <SwiperSlide className="mySwiper-slide" key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
};
