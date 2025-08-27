import styles from './slider.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import verticales from '../../assets/verticales.jpg';
import roller from '../../assets/rollersunscreenin.jpg';
import toldos from '../../assets/toldos.jpg';
import tradicionales from '../../assets/tradicionales.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  const slides = [
    { img: verticales, title: "Cortinas Verticales" },
    { img: roller, title: "Cortinas Roller" },
    { img: toldos, title: "Toldos" },
    { img: tradicionales, title: "Cortinas Tradicionales" },
  ];

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.title}>Inspirate con algunos de nuestros trabajos.</h2>
      <p className={styles.subtitle}>"Ambientes reales, soluciones reales"</p>

      <Swiper
        navigation={true}
        autoplay={{ delay: 3000 }}
        slidesPerView={3}
        spaceBetween={-40}
        modules={[Navigation]}
        className={styles.slider}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={styles.card}>
              <img src={slide.img} alt={slide.title} className={styles.image} />
              <div className={styles.overlay}>
                <p>{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

