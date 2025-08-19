import styles from './bulletPoint.module.css';

import diseño from '../../assets/diseño.png'
import mat from '../../assets/material.png'
import inst from '../../assets/instalacion.png'
import financiacion from '../../assets/financiacion.png'


const BulletPoint = () => {
  return (
    <div className={styles.cortinasContainer}>
      <div className={styles.imgCortinas}>
        
      </div>
      <div className={styles.textCortinas}>
      <h2>VENTAJAS DESTACADAS</h2>
        <ul>
            <li><img src={diseño}></img> A MEDIDA SEGÚN TU ESPACIO Y ESTILO</li>
            <li><img src={mat}></img> MATERIALES PREMIUM PARA MAXIMA DURABILIDAD</li>
            <li><img src={inst}></img>INSTALACION PROFESIONAL Y RAPIDA</li>
            <li><img src={financiacion}></img>FINANCIACION EN 3, 6, 9 Y 12 CUOTAS</li>
        </ul>


      </div>
    </div>
  );
}
export default BulletPoint; 