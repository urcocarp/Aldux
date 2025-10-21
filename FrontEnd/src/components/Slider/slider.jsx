import styles from './slider.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import verticales from '../../assets/verticales.jpg';
import toldos from '../../assets/toldos.webp';
import tradicionales from '../../assets/tradicionales.webp';
import rollerscreen from '../../assets/rollersunscreen.webp';
import toldos2 from '../../assets/toldoext.webp'
import verticales2 from '../../assets/cortinasverticales2.jpg';
import espacios from '../../assets/espaciosverticales.jpg';
import toldos3 from '../../assets/toldosext.webp'
import toldos4 from '../../assets/carrusel/Toldo1.webp'
import toldos5 from '../../assets/carrusel/Toldo2.webp'
import tradicionales2 from '../../assets/carrusel/tradicionales1.webp'
import tradicionales4 from '../../assets/carrusel/tradicionales3.webp'
import verticales3 from '../../assets/carrusel/verticales3.webp'
import verticales4 from '../../assets/carrusel/verticales1.webp'
import verticales5 from '../../assets/carrusel/verticales2.webp'
import toldosMicroPerforados from '../../assets/carrusel/Toldo microperforado1.webp'
import rollerscreen1 from '../../assets/carrusel/Sunscreen.webp'


import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  const slides = [
    { img: verticales, title: "Cortinas Verticales" },
    { img: toldos, title: "Toldos" },
    { img: tradicionales, title: "Cortinas Tradicionales" },
    {img:rollerscreen, title: "Cortinas Roller Sunscreen"},
    {img:toldos2, title: "Toldos exterior proyectables"},
    {img:toldos3, title: 'Toldos para tu espacio'},
    {img:tradicionales4, title: "Cortinas Tradicionales"},
    {img:verticales4, title: "Cortinas Verticales"},
    { img: toldos4, title: "Toldos" },
    {img:verticales2, title: "Verticales de lujo"},
    {img:espacios, title: "Espacios detallados"},
    {img:verticales3, title: "Cortinas Verticales"},
    {img:toldosMicroPerforados, title: "Toldos Microperforados"}, 
    {img:rollerscreen1, title: "Cortinas Roller Sunscreen"},
    {img:tradicionales2, title: "Cortinas Tradicionales"},
    { img: toldos5, title: "Toldos" },
    {img:verticales5, title: "Cortinas Verticales"},
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
        modules={[Navigation, Autoplay]}
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

