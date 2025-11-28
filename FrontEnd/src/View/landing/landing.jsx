// 🟠 TU COMPONENTE COMPLETO (form con animación más lenta y delay aumentado)

import style from './landing.module.css';
import NavBar from '../../components/navBar/navbar';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../../assets/images/hero.jpg";
import aboutImg from '../../assets/QuienesSomos.png';
import BulletPoint from '../../components/bulletPoint/bulletPoint';
import Form from '../../components/Form/form';

import callIcon from '../../assets/iconos/Untitled/tabler-icon-headset.svg';
import toolIcon from '../../assets/iconos/Untitled/tabler-icon-tool.svg';
import currencyIcon from '../../assets/iconos/Untitled/tabler-icon-currency-dollar.svg';

import Footer from '../../components/Footer/footer.jsx';
import Slider from '../../components/Slider/slider.jsx';
import { useRef , useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";
import portada from '../../assets/Portada.webp';
import Bannerprincipal from '../../assets/Bannerprincipal.webp';

import AboutCard from '../../components/AboutCard.jsx';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FabricaSlider from '../../components/FabricaSlider/FabricaSlider.jsx';

// ⭐ NUEVOS ICONOS MUI
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const Landing = () => {
  const [open, setOpen] = useState(true);
  const formRef = useRef(null); 
  const heroRef = useRef(null);
  const sobreRef = useRef(null);
  const productosRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onTiendaClick = () => {
    window.location.href = "https://www.aldux.com.ar/tienda/shop";
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <LandingContainer component="main">
      
      <NavBar 
        onInicioClick={() => scrollToSection(heroRef)}
        onSobreClick={() => scrollToSection(sobreRef)}
        onProductosClick={() => scrollToSection(productosRef)}
        onCotizacionClick={() => scrollToSection(formRef)}
        onTiendaClick={onTiendaClick}
      /> 

      {/* 🔥 CARD FLOTANTE: WhatsApp + Teléfono */}
      <Box
        sx={{
          position: "fixed",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
          borderRadius: "16px",
          padding: "16px",
          zIndex: 2000,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/5493516548401"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 55,
            height: 55,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            textDecoration: "none",
            color: "white",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 32 }} />
        </a>

        {/* Teléfono */}
        <a
          href="tel:5493516548401"
          style={{
            width: 55,
            height: 55,
            borderRadius: "50%",
            backgroundColor: "#1e88e5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            textDecoration: "none",
            color: "white",
          }}
        >
          <PhoneIcon sx={{ fontSize: 28 }} />
        </a>
      </Box>


      {/* HERO */}
      <HeroContainer
        ref={heroRef}
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${portada})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          padding: { xs: "0 20px", md: "0 60px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            color: "white",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <HeroTitle component="h1">
            Diseño y confort que <span style={{color:'#f16436'}}>elevan</span> tus <span style={{color:'#f16436'}}>espacios</span>
          </HeroTitle>

          <SubTitle component="h2">
            En <strong>ALDUX</strong> creamos soluciones para tus ambientes
          </SubTitle>
        </Box>
      </HeroContainer>


      <AboutContainer ref={sobreRef}>
        <AboutContent>
          
          <Box 
            ref={aboutRef}
            sx={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              width: { xs: '100%', sm: '90%', md: '50%' },
              gap: '20px',
              marginBottom: { xs: '40px', md: 0 },
            }}
          >
            {[
              { icon: callIcon, title: "Asesoramiento Personalizado", description: "Te ayudamos a elegir la mejor solución para tu espacio." },
              { icon: toolIcon, title: "Fabricación a Medida", description: "Controlamos cada etapa del proceso para garantizar calidad." },
              { icon: currencyIcon, title: "Cotización sin Cargo", description: "Envíanos tus medidas y te respondemos con presupuesto detallado." }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}
              >
                <AboutCard 
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </Box>


          <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              alignItems: { xs:'center', lg:'flex-start' },
              justifyContent:'flex-start',
              width: { xs: '100%', lg: '50%' },
              padding: { xs: '20px', lg:'50px' },
              boxSizing:'border-box',
            }}
          >
            <Typography component="h2" sx={{
              fontFamily: 'Poppins',
              fontSize: { xs:'2rem',lg: '2.5rem' },
              textAlign: {xs:'center',lg:'left'},
              marginBottom: '5px'
            }}>
              Sobre Nosotros
            </Typography>

            <SubTitle sx={{
              textAlign: {xs:'center',lg:'left'},
              marginBottom: '40px',
              fontSize: { xs: '14px', md: '16px' },
              color:'grey',
              textShadow: 'none'

            }}>
              Somos fabricantes, somos <strong>ALDUX</strong>
            </SubTitle>

            <Typography component="p" sx={{ fontFamily: 'Poppins', fontSize: { xs: '16px', md: '20px' }, textAlign: 'left' }}>
              Somos una empresa cordobesa con más de 18 años de experiencia en la fabricación de cortinas, toldos y cerramientos a medida. Nos apasiona el diseño y la arquitectura de interiores, por eso trabajamos con materiales de primera calidad y un equipo especializado que cuida cada detalle.<br/><br/>

En ALDUX fabricamos cortinas, toldos y cerramientos a medida, combinando materiales premium, terminaciones impecables y un estilo moderno que realza cada espacio. Con nosotros, tu casa o empresa tendrá ese toque sofisticado que estás buscando. Descubre cómo nuestros productos pueden transformar tu entorno y brindarte la privacidad y confort que mereces.
            </Typography>
          </Box>

        </AboutContent>
      </AboutContainer>

      <FabricaSlider />

      <BulletPoint />
      
      <Box ref={productosRef}><Slider /></Box>

      {/* FORM CON ANIMACIÓN */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.8
        }}
      >
        <Box ref={formRef} sx={{ position: "relative", zIndex: 100 }}>
          <Form open={open} setOpen={setOpen} />
        </Box>
      </motion.div>


      {!open && (
        <Box
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            bottom: 90,
            right: 20,
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 2,
            py: 1.5,
            border: "3px solid #f16436",
            cursor: "pointer",
            zIndex: 1400,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
            },
          }}
        >
          <Box
            sx={{
              bgcolor: "#f16436",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={currencyIcon}
              alt="Abrir cotizador"
              width={22}
              height={22}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "14px",
                color: "#333",
              }}
            >
              Cotizá tu proyecto
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "12px",
                color: "#555",
                lineHeight: 1.2,
              }}
            >
              Hacé clic para abrir el cotizador
            </Typography>
          </Box>
        </Box>
      )}

      <Footer />

    </LandingContainer>
  );
};

export default Landing;




// --- styled components ---
const LandingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f7f7f7",
  overflowX: "hidden",
}));

const HeroContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  padding: "5%",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px 20px",
    textAlign: "center",
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "5rem",
  fontWeight: 500,
  fontFamily: "Poppins",
  margin: 0,
  textAlign: "left",
  lineHeight: 1.05,
  position: "relative",
  zIndex: 30,
  display: "inline-block",
  textShadow: "0 4px 10px rgba(0,0,0,0.8)",
  "& span": {
    color: "black",
    textShadow: "0 4px 10px rgba(0,0,0,0.9)",
  },
  [theme.breakpoints.down("md")]: { fontSize: "3rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "2rem" },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "#f5f5f5",
  fontSize: "1.5rem",
  fontWeight: 300,
  fontFamily: 'Poppins',
  textShadow: "0 3px 8px rgba(0,0,0,0.75)",
}));

const AboutContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop:'100px',
  backgroundColor: "#f7f7f7",
  padding: "20px 0",
}));

const AboutContent = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up('lg')]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));
