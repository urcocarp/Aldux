import style from './landing.module.css';
 // Adjust the path as necessary


const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div className={style.landingText}>
      <h1>
        Diseño, confort y pretección en cada detalle
      </h1>
        <h2>
          En <strong>ALDUX</strong> creamos soluciones de diseño para tus ambientes
        </h2>
      </div>
    
    <button className={style.landingButton}>Pedí tu cotización</button>

    
    </div>
   
  );
}
export default Landing;