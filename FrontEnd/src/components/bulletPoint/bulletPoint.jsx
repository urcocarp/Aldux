import styles from './bulletPoint.module.css';
import imgcortina from '../../assets/rollersunscreen.jpg'


const BulletPoint = () => {
  return (
    <div className={styles.cortinasContainer}>
      <div className={styles.imgCortinas}>
        <img src={imgcortina} alt="Cortinas" />
      </div>
      <div className={styles.textCortinas}>
      <h2>VENTAJAS DESTACADAS</h2>
        <ul>
            <li>DISEÑO A MEDIDA SEGÚN TU ESPACIO Y ESTILO</li>
            <li>MATERIALES PREMIUM PARA MAXIMA DURABILIDAD</li>
            <li>INSTALACION PROFESIONAL Y RAPIDA</li>
            <li>FINANCIACION EN 3, 6, 9 Y 12 CUOTAS</li>
        </ul>


      </div>
    </div>
  );
}
export default BulletPoint; 