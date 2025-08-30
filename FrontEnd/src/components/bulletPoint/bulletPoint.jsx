import { Box, Typography, Button,styled, Grid } from "@mui/material";
import styles from './bulletPoint.module.css';
import cinta from '../../assets/images/beneficios-cinta.jpg';
import service from '../../assets/images/beneficios-instalacion.png';
import telas from '../../assets/images/beneficios-telas.jpg';
import financiacion from '../../assets/images/beneficios-pagos.jpg';

const BulletPoint = () => {
  return (
    <BulletContainer >
      <BulletTitle >Beneficios Destacados</BulletTitle>

      <Styledgrid >
        
        <div className={styles.card}>
          <img src={cinta} alt="Diseño a medida" />
          <p>Diseño a medida según tu espacio y estilo</p>
        </div>

        
        <div className={styles.card}>
          <img src={service} alt="Instalación" />
          <p>Instalación profesional y rápida</p>
        </div>

        
        <div className={styles.card1}>
          <p>Materiales premium para máxima durabilidad</p>
          <img src={telas} alt="Materiales premium" />
        </div>

       
        <div className={styles.card1}>
          <p>Financiación en 3, 6, 9 y 12 cuotas</p>
          <img src={financiacion} alt="Financiación" />
        </div>
      </Styledgrid>
    </BulletContainer>
  );
}

export default BulletPoint;

const BulletContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height:'80vh',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
 // padding: '60px 40px 100px',
  backgroundColor: '#f9f9f9',
  boder: '1px solid red',
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    pading: '20px ',
    margin:'50px 0',
  },
}));

const BulletTitle = styled(Typography)(({ theme }) => ({
  
  textAlign: 'center',
  fontSize:'2.5rem',
  fontWeight:400,
  marginBottom:'40px',
  [theme.breakpoints.down("sm")]: {
    fontSize:'1.8rem',
    marginBottom:'10px',
    marginTop:'30px',
    
  },
}));

const Styledgrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '60px',
  maxWidth: '1000px',
  height: 'auto',
  margin: '0 auto',
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '40px',
    padding: '0 20px',
    boxsizing: 'border-box',
    margin: '30px 70px',
    
  },
}));