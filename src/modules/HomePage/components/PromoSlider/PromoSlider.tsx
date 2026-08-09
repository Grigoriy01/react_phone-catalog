import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

export const PromoSlider = () => {
  return (
    <div className="promo-slider">
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
        navigation={true}
        className="promo-slider__swiper"
      >
        <SwiperSlide>
          <img src="/img/banner-accessories.png" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner-phones.png" alt="Banner 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
