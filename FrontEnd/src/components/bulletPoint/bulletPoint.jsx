import { Box, Typography, styled, Grid } from "@mui/material";
import styles from './bulletPoint.module.css';
import medida from '../../assets/imagenmedida.png';
import service from '../../assets/images/beneficios-instalacion.png';
import telas from '../../assets/images/beneficios-telas.jpg';
import financiacion from '../../assets/images/beneficios-pagos.jpg';

const BulletPoint = () => {
  return (
    <BulletContainer>
      <BulletTitle component="h2">Beneficios Destacados</BulletTitle>

      <StyledGrid>
        <div className={styles.card}>
          <img src={medida} alt="Diseño a medida" />
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
      </StyledGrid>
    </BulletContainer>
  );
}

export default BulletPoint;

const BulletContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '60px 40px 100px',
  backgroundColor: '#f9f9f9',
//  border: '1px solid red', // corregido typo
  [theme.breakpoints.down("lg")]: { // notebooks grandes
    padding: '50px 30px 80px',
  },
  [theme.breakpoints.down("md")]: { // tablets
    padding: '40px 20px 60px',
  },
  [theme.breakpoints.down("sm")]: { // móviles
    padding: '30px 10px 40px',
  },
}));

const BulletTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: 400,
  marginBottom: '40px',
  [theme.breakpoints.down("lg")]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.down("md")]: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    marginTop: '20px',
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // 2 columnas por default
  gap: '60px',
  maxWidth: '1000px',
  margin: '0 auto',
  height: 'auto',
  [theme.breakpoints.down("lg")]: { // notebooks medianos
    gridTemplateColumns: '1fr', // 1 columna
    gap: '50px',
  },
  [theme.breakpoints.down("md")]: { // tablets
    gridTemplateColumns: '1fr', // 1 columna
    gap: '40px',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  [theme.breakpoints.down("sm")]: { // móviles
    gridTemplateColumns: '1fr',
    gap: '30px',
    padding: '0 15px',
    margin: '20px auto',
  },
}));
