import styles from './slider.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[ Navigation, Autoplay]}
        className={styles.slider}
      >
     
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
