import styles from './slider.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import slider1 from '../../assets/SLIDER2.png'
import slider2 from '../../assets/SLIDER3.png'
import slider3 from '../../assets/SLIDER4.png'
import slider4 from '../../assets/SLIDER1.png'
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
        <SwiperSlide><img src={slider1}></img></SwiperSlide>
        <SwiperSlide><img src={slider2}></img></SwiperSlide>
        <SwiperSlide><img src={slider3}></img></SwiperSlide>
        <SwiperSlide><img src={slider4}></img></SwiperSlide>
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
