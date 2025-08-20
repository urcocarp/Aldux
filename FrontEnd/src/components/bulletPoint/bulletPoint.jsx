import styles from './bulletPoint.module.css';
import cinta from '../../assets/images/beneficios-cinta.jpg';
import service from '../../assets/images/beneficios-instalacion.png';
import telas from '../../assets/images/beneficios-telas.jpg';
import financiacion from '../../assets/images/beneficios-pagos.jpg';

const BulletPoint = () => {
  return (
    <div className={styles.cortinasContainer}>
      <h2 className={styles.titulo}>Beneficios Destacados</h2>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <img src={cinta} alt="Diseño a medida" />
          <p>Diseño a medida según tu espacio y estilo</p>
        </div>

        
        <div className={styles.card}>
          <img src={service} alt="Instalación" />
          <p>Instalación profesional y rápida</p>
        </div>

        
        <div className={styles.card}>
          <img src={telas} alt="Materiales premium" />
          <p>Materiales premium para máxima durabilidad</p>
        </div>

       
        <div className={styles.card}>
          <img src={financiacion} alt="Financiación" />
          <p>Financiación en 3, 6, 9 y 12 cuotas</p>
        </div>
      </div>
    </div>
  );
}

export default BulletPoint;
