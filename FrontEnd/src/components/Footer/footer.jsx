import React from "react";
import { Box, Typography, Link, styled } from "@mui/material";
import whats from '../../assets/whatsapp.png';
import maps from '../../assets/MAPS.png';
import mail from '../../assets/MAIL.png';
import facebook from '../../assets/face.png';
import insta from '../../assets/insta.png';

// Styled Components con MUI
const ContainerFooter = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '200px',
  backgroundColor: '#fff',
  borderTop: '1px solid #e5e5e5',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '20px 0px',
  fontFamily: 'Poppins, sans-serif',
  boxShadow: '0px -2px 5px rgba(0,0,0,0.05)', // Sombra ligera en escritorio
  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    textAlign: 'center',
    gap: '20px',
    padding: '40px 20px',
    boxShadow: '0px -5px 15px rgba(0,0,0,0.15)', // Sombra más visible arriba en móvil
  },
}));


const ContactoFooter = styled(Box)(({ theme }) => ({
  
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  color: '#000',
  textAlign: 'left',
  padding: '0 20px', // Padding horizontal
  boxSizing: 'border-box', // ¡Esto es importante!
  [theme.breakpoints.down("sm")]: {
    
    textAlign: 'left',
    padding: '0 20px', // Padding horizontal en móvil
    '& span': {
      fontSize: '16px',
    },
    '& h6': {
      display: 'none',
    },
  },
  marginBottom:'30px'
}));

const Item = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: '#333',
  '& img': {
    width: '18px',
    height: '18px',
    [theme.breakpoints.down("sm")]: {
      width: '28px', // Más grande en móvil
      height: '28px',
    },
  },
}));

const LinksFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  fontSize: '14px',
  [theme.breakpoints.down("sm")]: {
    display: 'none', // Ocultar links en móvil
  },
  '& a': {
    textDecoration: 'none',
    color: '#000',
    transition: 'color 0.2s ease-in-out',
  },
  '& a:hover': {
    color: '#777',
  },
}));

const RedesFooter = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '15px',
  '& .icons': {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'flex-start'},

  //border:'1px solid red',
  [theme.breakpoints.down("sm")]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    '& h6': {
      display: 'none', // Ocultar título en móvil
    },
    '& .icons': {
      display: 'flex',
      flexDirection: 'row',
      gap: '150px', // Separación más grande
      '& img': {
        width: '50px', // Iconos grandes
        height: '50px',
        filter: 'brightness(0.8)', // Se ven un poco más finos / menos saturados
      },
    },
  },
  '& img': {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
  },
  '& img:hover': {
    transform: 'scale(1.1)',
    filter: 'brightness(1)', // Hover vuelve a normal
  },
}));


const Footer = () => {
  return (
    <ContainerFooter>
      <ContactoFooter>
        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>
          Contacto
        </Typography>
        <Item>
          <img src={whats} alt="whatsapp" />
          <span>351 8509477</span>
        </Item>
        <Item>
          <img src={maps} alt="maps" />
          <Link
            href="https://www.google.com/maps/place//@-31.2602904,-64.0995768,18.51z/data=!4m6!1m5!3m4!2zMzHCsDE1JzM1LjYiUyA2NMKwMDUnNTYuNiJX!8m2!3d-31.259901!4d-64.0990524?hl=es&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
             sx={{ color: '#333', textDecoration: 'none' }}
          >
          <span>Ruta provincial 174 esquina Roman Benitez</span>
          </Link>
        </Item>
        <Item>
          <img src={mail} alt="mail" />
          <span>alduxtoldoscortinas@gmail.com.ar</span>
        </Item>
      </ContactoFooter>

      <LinksFooter>
        <Link href="#">Inicio</Link>
        <Link href="#">Quienes Somos</Link>
        <Link href="#">Productos</Link>
        <Link href="#">Cotización</Link>
        <Link href="#">Contacto</Link>
      </LinksFooter>

      <RedesFooter>
        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px' }}>
          Seguinos en nuestras redes
        </Typography>
        <Box  className="icons">
          <Link href="https://www.instagram.com/alduxtoldocortinas/" target="_blank"  rel="noopener noreferrer"><img src={insta} alt="instagram" /></Link>
          <Link href="https://www.facebook.com/AlduxToldosCortinasCerramientos?locale=es_LA" target="_blank"  rel="noopener noreferrer"><img src={facebook} alt="facebook" /></Link>
        </Box>
      </RedesFooter>
    </ContainerFooter>
  );
}

export default Footer;
