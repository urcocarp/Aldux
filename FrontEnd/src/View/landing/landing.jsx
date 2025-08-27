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


  return (
    <LandingContainer>
      <NavBar onInicioClick={() => scrollToSection(heroRef)}
        onSobreClick={() => scrollToSection(sobreRef)}
        onProductosClick={() => scrollToSection(productosRef)}
        onCotizacionClick={() => scrollToSection(formRef)}/>
      <WhatsAppButton />
      <HeroContainer>
        <Box ref={heroRef}>
          <HeroTitle>
            Diseño, confort y protección en cada detalle.
          </HeroTitle>
          <SubTitle>
            En <strong>ALDUX</strong> creamos soluciones de diseño para tus ambientes
          </SubTitle>
        </Box>
        <StyledButton onClick={handleScrollToForm}>PEDI TU COTIZACION</StyledButton>
      </HeroContainer>

      <Box sx={{
        width: { xs: '90%', md: '80%' },
        height: { xs: 'auto', md: '30vh' },
        overflowY: { md: 'auto' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins',
        justifyContent: 'center',
        marginTop: {xs: '40px', md: '60px'},
        marginBottom: {xs: '40px', md: '60px'},
        fontSize: { xs: '18px', md: '32px' },
        textAlign:{xs:'center', md:'justify'}
      }}>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '16px', md: '20px' } }}>
          En <strong>ALDUX</strong> fabricamos cortinas, toldos y cerramientos a medida,
          combinando materiales premium, terminaciones impecables y un estilo moderno que realza cada espacio.
          Con nosotros, tu casa o empresa tendrá ese toque sofisticado que estás buscando.
          Descubre cómo nuestros productos pueden transformar tu entorno y brindarte la privacidad y confort que mereces.
        </Typography>
      </Box>
      <Box ref={sobreRef} >
      <AboutContainer>
        <AboutContent>
          <Typography sx={{
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
          <Typography sx={{ fontFamily: 'Poppins', fontSize: { xs: '16px', md: '20px' }, textAlign: 'left' }}>
            <strong>ALDUX</strong> es una empresa cordobesa con más de 18 años de experiencia en la
            fabricación de cortinas, toldos y cerramientos a medida. Nos apasiona el diseño y la
            arquitectura de interiores, por eso trabajamos con materiales de primera calidad y un
            equipo especializado que cuida cada detalle.
          </Typography>
        </AboutContent>
      </AboutContainer>
      </Box>

      <BulletPoint />

      <Grey>
        <GreyCard>
          <img src={callIcon} alt="Home Icon" width={80} height={80} />
          <Box>
            <Typography sx={{ fontFamily: 'Poppins', color: 'white', fontSize: '16px', marginBottom: '10px', fontWeight: 600 }}>
              Asesoramiento personalizado
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', color: 'white', fontSize: '14px' }}>
              Te ayudamos a elegir la mejor solución para tu espacio.
              Te asesoramos de principio a fin para encontrar la solución
              perfecta que se adapte a tu hogar y tu estilo de vida.
            </Typography>
          </Box>
        </GreyCard>

        <GreyCard>
          <img src={toolIcon} alt="Home Icon" width={80} height={80} />
          <Box>
            <Typography sx={{ fontFamily: 'Poppins', color: 'white', fontSize: '16px', marginBottom: '10px', fontWeight: 600 }}>
              Somos fabricantes personalizados
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', color: 'white', fontSize: '14px' }}>
              Controlamos cada etapa del proceso para garantizar calidad, diseño y precios competitivos, sin intermediarios.
            </Typography>
          </Box>
        </GreyCard>

        <GreyCard>
          <img src={currencyIcon} alt="Home Icon" width={80} height={80} />
          <Box>
            <Typography sx={{ fontFamily: 'Poppins', color: 'white', fontSize: '16px', marginBottom: '10px', fontWeight: 600 }}>
              Cotización sin cargo
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', color: 'white', fontSize: '14px' }}>
              Nos envías las medidas, te respondemos con presupuesto detallado.
            </Typography>
          </Box>
        </GreyCard>
      </Grey>
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
    overflowX: "hidden",
   [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "100%",
    
  },
}));

const HeroContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${heroImg})`,
  backgroundSize: "cover",       // que se ajuste sin deformarse
  backgroundPosition: "center",  // centrada siempre
  backgroundRepeat: "no-repeat", // que no se repita
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "3rem",
  fontWeight: 600,
  fontFamily: 'Poppins',
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "1.5rem",
  fontWeight: 300,
  fontFamily: 'Poppins',
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  height: "50px",
  marginTop: "150px",
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
    backgroundColor: "#eb5904",
  },

  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "45px",
    fontSize: "16px",
    marginTop: "100px",
  },
}));

const AboutContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "70vh",
  backgroundImage: `url(${aboutImg})`,
  backgroundSize: "cover",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
    padding: "20px",
  },
}));

const AboutContent = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: '100px',
  [theme.breakpoints.down("md")]: {
    width: "80%",
    marginLeft: "0",
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
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
