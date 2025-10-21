import style from './landing.module.css';
import NavBar from '../../components/navBar/navbar';
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../../assets/images/hero.jpg";
import aboutImg from '../../assets/QuienesSomos.png';
import BulletPoint from '../../components/bulletPoint/bulletPoint';
import Form from '../../components/Form/form';
import callIcon from '../../assets/iconos/Untitled/tabler-icon-headset.svg'
import toolIcon from '../../assets/iconos/Untitled/tabler-icon-tool.svg'
import currencyIcon from '../../assets/iconos/Untitled/tabler-icon-currency-dollar.svg'
import Footer from '../../components/Footer/footer.jsx'
import WhatsAppButton from '../../components/WhatsAppButton.jsx';
import Slider from '../../components/Slider/slider.jsx'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";
import hero from '../../assets/images/hero.jpg';
import portada from '../../assets/Portada5.webp';
import AboutCard from '../../components/AboutCard.jsx';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";




const Landing = () => {
const formRef = useRef(null); 

const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" }); // ⬅️ scroll suave
  };
  const heroRef = useRef(null);
  const sobreRef = useRef(null);
  const productosRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onTiendaClick = () => {
    console.log("Redirigiendo a la tienda...");
    
     window.location.href = "https://www.aldux.com.ar/tienda/shop";
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  return (
    <LandingContainer component="main">
       <NavBar onInicioClick={() => scrollToSection(heroRef)}
        onSobreClick={() => scrollToSection(sobreRef)}
        onProductosClick={() => scrollToSection(productosRef)}
        onCotizacionClick={() => scrollToSection(formRef)}
        onTiendaClick={onTiendaClick}/> 
      <WhatsAppButton />
      <HeroContainer
  ref={heroRef}

>
  {/* Contenedor de texto arriba */}
  <Box
     sx={{
    width: { xs: "100%", md: "50%" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-start" },
    textAlign: { xs: "center", md: "center" },
    color: "#000",
    paddingRight: { md: "20px" },
    gap: "20px",
    marginTop:'50px'
  }}
  >
    <HeroTitle component="h1">
      Diseño y confort que elevan tus espacios.
    </HeroTitle>
    <SubTitle component="h2">
      En <strong>ALDUX</strong> creamos soluciones para tus ambientes
    </SubTitle>
    <StyledButton onClick={handleScrollToForm}>
      PEDÍ TU COTIZACIÓN
    </StyledButton>
  </Box>

  {/* Contenedor de Swiper abajo */}
  <Box  sx={{
    width: { xs: "100%", md: "50%" },
    height: { xs: "300px", md: "50%" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: { xs: "40px", md: 0 },
  }}>
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      speed={1000}
      effect="slide"
      style={{ width: '100%', height: '100%' , borderRadius:'3px'}}
    >
      {[hero1, hero2, hero3, hero4].map((img, i) => (
        <SwiperSlide key={i}>
          <Slide image={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
</HeroContainer>


           
      <AboutContainer ref={sobreRef}>
        <AboutContent>
        <Box ref={aboutRef} 
          sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width: { xs: '100%', sm: '90%', md: '50%' },
    gap: '20px',  // espaciado entre tarjetas
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
          //  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',width:'50%', height:'100%',padding:'50px',boxSizing:'border-box'}}
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
            fontSize: { xs: '14px', md: '16px' }
          }}>
            Somos fabricantes, somos <strong>ALDUX</strong>
          </SubTitle>
          <Typography component="p" sx={{ fontFamily: 'Poppins', fontSize: { xs: '16px', md: '20px' }, textAlign: 'left' }}>
            Somos una empresa cordobesa con más de 18 años de experiencia en la
            fabricación de cortinas, toldos y cerramientos a medida. Nos apasiona el diseño y la
            arquitectura de interiores, por eso trabajamos con materiales de primera calidad y un
            equipo especializado que cuida cada detalle.
          </Typography>
            <Typography component="p" sx={{ fontFamily: 'Poppins',marginTop:'20px', fontSize: { xs: '16px', md: '20px' } }}>
          En <span style={{fontWeight:500}}>ALDUX</span> fabricamos cortinas, toldos y cerramientos a medida,
          combinando materiales premium, terminaciones impecables y un estilo moderno que realza cada espacio.
          Con nosotros, tu casa o empresa tendrá ese toque sofisticado que estás buscando.
          Descubre cómo nuestros productos pueden transformar tu entorno y brindarte la privacidad y confort que mereces.
        </Typography>
          </Box>
         
        </AboutContent>
      </AboutContainer>
      

      <BulletPoint />


       <Box ref={productosRef}>
        <Slider />
       </Box>
       <Box ref={formRef}>
          <Form />
        </Box>
      <Footer />
    </LandingContainer>
  );
};

export default Landing;


// Styled Components con breakpoints
const LandingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f7f7f7",
    overflowX: "hidden",
   [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "100%",
    
  },
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
  backgroundImage: `url(${portada})`,
  backgroundSize: "cover",
  backgroundPosition: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    //height: "auto",
    padding: "60px 20px",
    textAlign: "center",
  },
}));


const Slide = ({ image }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',   // llena todo el contenedor
      backgroundRepeat: 'no-repeat',
      borderRadius: '5px',
    }}
  />
);

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "left",
  zIndex: 2,
  color: "black",
  padding: "0 20px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  boxSizing: "border-box",
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "3rem",
  fontWeight: 500,
  fontFamily: 'Poppins',
  textAlign: "left",
  margin:'0',
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    textAlign: "center",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "#4F4F4F",
  fontSize: "1.5rem",
  fontWeight: 300,
  fontFamily: 'Poppins',
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginTop: "20px",
    textAlign: "center",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  height: "50px",
  marginTop: "50px",
  padding: "10px 30px",
  backgroundColor: "#eb5904",
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontWeight: 400,
  textAlign: "center",
  cursor: "pointer",
  transition: "background 0.3s ease",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.425)",

  "&:hover": {
    backgroundColor: "black",
  },

  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "45px",
    fontSize: "16px",
    marginTop: "50px",
  },
}));

const AboutContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop:'100px',
  backgroundColor: "#f7f7f7",
  padding: "20px 0",
  [theme.breakpoints.down("md")]: {
    padding: "20px 0",
  },
}));

// const AboutContent = styled(Box)(({ theme }) => ({
//   width: "100%",
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   boxSizing: 'border-box',
//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   [theme.breakpoints.down("sm")]: {
//     width: "95%",
//     margin: "0 auto",
//   }
// }));

const AboutContent = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column", // default: móviles y tablets
  justifyContent: "space-between",
  boxSizing: 'border-box',
  
  // Entre 800px y 1199px → column
  [theme.breakpoints.between('md', 'lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  // 1200px en adelante → row
  [theme.breakpoints.up('lg')]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Grey = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "60vh",
  backgroundColor: "#636A70",
  display: "flex",
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "space-around",
  boxSizing: 'border-box',
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
    padding: "40px 0",
  },
}));

const GreyCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#636A70',
  width: '500px',
  height: '200px',
  display: "flex",
  alignItems: 'center',
  justifyContent: "center",
  borderRadius: '10px',
  padding: '10px',
  [theme.breakpoints.down("md")]: {
    width: "80%",
    marginBottom: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    width: "90%",
    height: "auto",
    padding: "20px",
  },
}));
