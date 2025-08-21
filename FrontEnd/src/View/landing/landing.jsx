import style from './landing.module.css';
import NavBar from '../../components/navBar/navbar';
import { Box, Typography,Button ,Card} from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../../assets/images/hero.jpg";
import aboutImg from '../../assets/QuienesSomos.png';
import BulletPoint from '../../components/bulletPoint/bulletPoint';
import Form from '../../components/Form/form';
import callIcon from '../../assets/iconos/Untitled/tabler-icon-headset.svg'
import toolIcon from '../../assets/iconos/Untitled/tabler-icon-tool.svg'
import currencyIcon from '../../assets/iconos/Untitled/tabler-icon-currency-dollar.svg'
 // Adjust the path as necessary


const Landing = () => {
  return (
  <LandingContainer>
    <NavBar />
    <HeroContainer>
      <Box>
        <HeroTitle >
        Diseño, confort y protección en cada detalle.
        <br />
       
      </HeroTitle >
      <SubTitle>
        En <strong>ALDUX</strong> creamos soluciones de diseño para tus ambientes
      </SubTitle>
      </Box>
      <StyledButton>PEDI TU COTIZACION</StyledButton>
    </HeroContainer>
    <Box sx={{width:'80%',height:'30vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center',fontFamily:'Poppins', justifyContent: 'center', marginTop: '20px',fontSize:'32px'}}>
      <Typography sx={{fontFamily:'Poppins', fontSize:'20px'}}>
         En <strong>ALDUX</strong> fabricamos cortinas, toldos y cerramientos a medida, combinando materiales premium, terminaciones
         impecables y un estilo moderno que realza cada espacio.
         Con nosotros, tu casa o empresa tendrá ese toque sofisticado que estás buscando.
           Descubre cómo nuestros productos pueden transformar tu entorno y brindarte la privacidad y confort que mereces.
      </Typography>
    </Box>
    <AboutContainer>
      <AboutContent>
        <Typography sx={{fontFamily:'Poppins', fontSize:'32px', textAlign:'left', marginBottom:'5px'}}>
        Sobre Nosotros
      </Typography>
      <SubTitle sx={{textAlign:'left', marginBottom:'40px',fontSize:'16px'}}>
        Somos fabricantes, somos <strong>ALDUX</strong>
      </SubTitle>
      <Typography sx={{fontFamily:'Poppins', fontSize:'20px', textAlign:'left'}}>
        <strong>ALDUX</strong> es una empresa cordobesa con más de 18 años de experiencia en la
          fabricación de cortinas, toldos y cerramientos a medida. Nos apasiona el diseño y la
          arquitectura de interiores, por eso trabajamos con materiales de primera calidad y un
          equipo especializado que cuida cada detalle.
      </Typography>
      </AboutContent>
      
      
    </AboutContainer>  
    <BulletPoint /> 
    <Grey>
      <GreyCard>
        <img src={callIcon} alt="Home Icon" width={100} height={100} />
        <Box>
          <Typography sx={{fontFamily:'Poppins',color:'white',fontSize:'16px',marginBottom:'10px',fontWeight:600}}>Asesoramiento personalizado</Typography>
          <Typography sx={{fontFamily:'Poppins',color:'white',fontSize:'14px'}}>Te ayudamos a elegir la mejor solución para tu espacio.
Te asesoramos de principio a fin para encontrar la solución 
perfecta que se adapte a tu hogar y tu estilo de vida.</Typography>
        </Box>
      </GreyCard>
      <GreyCard>
        <img src={toolIcon} alt="Home Icon" width={100} height={100} />
        <Box>
          <Typography sx={{fontFamily:'Poppins',color:'white',fontSize:'16px',marginBottom:'10px',fontWeight:600}}>Somos fabricantes personalizado</Typography>
          <Typography sx={{fontFamily:'Poppins',color:'white',fontSize:'14px'}}>Controlamos cada etapa del proceso para garantizar calidad, diseño y precios competitivos, sin intermediarios.</Typography>
        </Box>
      </GreyCard>
      <GreyCard>
        <img src={currencyIcon} alt="Home Icon" width={100} height={100} />
        <Box>
          <Typography sx={{fontFamily:'Poppins',color:'white',fontSize:'16px',marginBottom:'10px',fontWeight:600}}>Cotización sin cargo</Typography>
          <Typography sx={{fontFamily:'Poppins',color:'white',fontSize:'14px'}}>Nos envías las medidas, te respondemos con presupuesto detallado.</Typography>
        </Box>
      </GreyCard>
    </Grey>
    <Form />
   
  </LandingContainer>
   
  );
}
export default Landing;

const LandingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  
  // paddingLeft: '100px',
  // paddingRight: '100px',
  
}));

const HeroContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  //marginTop:'80px',
  backgroundImage: `url(${heroImg})`, 
    display: "flex", 
    flexDirection:'column',                // habilita flexbox
  alignItems: "center",            // centra vertical
  justifyContent: "center", 
  
}));

const HeroTitle  = styled(Typography)(({ theme }) => ({
   color: "black",           // color del texto
  fontSize: "3rem",          // tamaño grande para título
  fontWeight: 600,
  fontFamily:'Poppins',        // negrita
  textAlign: "center",       // centrado
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",        // más chico en pantallas pequeñas
  },
  
}))

const SubTitle  = styled(Typography)(({ theme }) => ({
  color: "black",           // color del texto
  fontSize: "1.5rem",          // tamaño grande para título
  fontWeight: 300,
  fontFamily:'Poppins',        // negrita
  textAlign: "center",       // centrado
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",        // más chico en pantallas pequeñas
  },
  
}))

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
    backgroundColor: "#eb5904", // mantiene el mismo color
  },

  [theme.breakpoints.down("sm")]: {
    width: "220px",
    height: "45px",
    fontSize: "20px",
  },
}));

const AboutContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "70vh",
  backgroundImage: `url(${aboutImg})`,
  backgroundSize: "cover",
  // display: "flex",
  // flexDirection: "column", 
  // alignContent:'center',
  // justifyContent: "center", 

  
}));

const AboutContent = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "100%",
  display: "flex",
  flexDirection: "column", 
  alignContent:'center',
  justifyContent: "center", 
  marginLeft:'100px',
  

  
}));

const Grey = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "60vh",
  //marginTop:'80px',
  backgroundColor: "#636A70",
  display: "flex",
  flexDirection:'row',                
  alignItems: "center",
  justifyContent: "space-around",
  //paddingLeft:'50px',
  boxSizing: 'border-box',
}));

const GreyCard = styled(Box)(({ theme }) => ({
  backgroundColor:'#636A70',
  width:'500px',
  height:'200px',
  display: "flex",
   alignItems:'center',  
  justifyContent: "center",
  //border: '1px solid white',
  borderRadius: '10px',
  padding:'10px'
}));






  // <div className={style.landingContainer}>
  //     <div className={style.landingText}>
  //     <h1>
  //       Diseño, confort y protección en cada detalle.
  //     </h1>
  //       <h2>
  //         En <strong>ALDUX</strong> creamos soluciones de diseño para tus ambientes
  //       </h2>
  //     </div>
    
  //   <button className={style.landingButton}>PEDI TU COTIZACION</button>

    
  //   </div>