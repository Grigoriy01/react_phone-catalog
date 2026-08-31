import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IconButton } from '../../../../shared/components/Buttons/components/IconButton';
import ArrowIcon from '@/shared/assets/icons/arrow-right/arrow-right.svg?react';

import bannerId1 from '@/shared/assets/home-page-img/banner/banner-accessories.png'
import bannerId2 from '@/shared/assets/home-page-img/banner/banner-tablets.png'
import bannerId3 from '@/shared/assets/home-page-img/banner/banner-phones.png'

import 'swiper/swiper.css';
import './PromoSlider.scss';

const BANNERS = [
  {
    id: 1,
    src: bannerId1,
    alt: 'Accessories Promo Banner',
  },
  { id: 2, src: bannerId2, alt: 'Tablets Promo Banner' },
  { id: 3, src: bannerId3, alt: 'Phones Promo Banner' },
];

export const PromoSlider = () => {
  return (
    <div className="promo-slider">
      <IconButton
        className="promo-slider__btn promo-slider__btn--prev"
        aria-label="Previous slide"
      >
        <ArrowIcon className="promo-slider__icon" />
      </IconButton>

      <IconButton
        className="promo-slider__btn promo-slider__btn--next"
        aria-label="Next slide"
      >
        <ArrowIcon className="promo-slider__icon" />
      </IconButton>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.promo-slider__btn--prev',
          nextEl: '.promo-slider__btn--next',
        }}
        className="promo-slider__swiper"
      >
        {BANNERS.map(banner => (
          <SwiperSlide className="promo-slider__slide" key={banner.id}>
            <img
              className="promo-slider__img"
              src={banner.src}
              alt={banner.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
