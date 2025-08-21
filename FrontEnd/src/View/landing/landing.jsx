import style from './landing.module.css';
 // Adjust the path as necessary


const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div className={style.landingText}>
      <h1>
        Diseño, confort y protección en cada detalle.
      </h1>
        <h2>
          En <strong>ALDUX</strong> creamos soluciones de diseño para tus ambientes
        </h2>
      </div>
    
    <button className={style.landingButton}>PEDI TU COTIZACION</button>

    
    </div>
   
  );
}
export default Landing;