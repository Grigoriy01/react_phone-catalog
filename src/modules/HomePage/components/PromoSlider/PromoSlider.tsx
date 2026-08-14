import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IconButton } from '../../../../shared/components/Buttons/components/IconButton';

import 'swiper/swiper.css';
import './PromoSlider.scss';

const BANNERS = [
  {
    id: 1,
    src: '/public/img/banner-accessories.png',
    alt: 'Accessories Promo Banner',
  },
  { id: 2, src: '/public/img/banner-tablets.png', alt: 'Tablets Promo Banner' },
  { id: 3, src: '/public/img/banner-phones.png', alt: 'Phones Promo Banner' },
];

export const PromoSlider = () => {
  return (
    <div className="promo-slider">
      <IconButton
        className="promo-slider__btn promo-slider__btn--prev"
        aria-label="Previous slide"
      >
        <img
          src="/img/icons/arrow-right.svg"
          alt="Arrow left"
          className="promo-slider__icon promo-slider__icon--prev"
        />
      </IconButton>

      <IconButton
        className="promo-slider__btn promo-slider__btn--next"
        aria-label="Next slide"
      >
        <img
          src="/img/icons/arrow-right.svg"
          alt="Arrow right"
          className="promo-slider__icon"
        />
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
