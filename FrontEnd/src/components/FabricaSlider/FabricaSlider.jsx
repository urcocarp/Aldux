import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme, useMediaQuery } from '@mui/material';

import fabrica1 from '../../assets/carruselFabrica/fabrica1.webp';
import fabrica2 from '../../assets/carruselFabrica/fabrica2.webp';
import fabrica3 from '../../assets/carruselFabrica/fabrica3.webp';
import fabrica4 from '../../assets/carruselFabrica/fabrica4.webp';

const FabricaSlider = () => {
  const slides = [
    { img: fabrica1 },
    { img: fabrica2 },
    { img: fabrica3 },
    { img: fabrica4 },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // ---- RESPONSIVE MUI ----
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px

  // Tamaños dinámicos segun el breakpoint
  const getCardStyle = () => {
    if (isMobile) {
      return {
        flex: "0 0 90vw",
        maxWidth: "90vw",
        height: "260px",
      };
    }

    if (isTablet) {
      return {
        flex: "0 0 calc(50% - 20px)",
        maxWidth: "350px",
        height: "220px",
      };
    }

    // Desktop
    return {
      flex: "0 0 calc(50% - 20px)",
      maxWidth: "300px",
      height: "200px",
    };
  };

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '60px',
        justifyContent: 'center',
        padding: '30px 10px',
        width: '100%',
        margin: '50px 0',
      }}
    >
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: index * 0.2
          }}
          whileHover={{
            scale: 1.08,
            y: -10,
            boxShadow: "0 15px 25px rgba(0,0,0,0.25)",
            transition: { duration: 0.3, ease: 'easeInOut' }
          }}
          whileTap={{
            scale: 1.02,
            transition: { duration: 0.2, ease: 'easeInOut' }
          }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            ...getCardStyle(), // 👈 Responsivo REAL acá
          }}
        >
          <img
            src={slide.img}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FabricaSlider;
