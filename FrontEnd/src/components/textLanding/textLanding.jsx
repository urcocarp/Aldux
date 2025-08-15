import styles from './textLanding.module.css';


const TextLanding = () => {
  return (
    <div className={styles.landingTittle}>
      <h1>Diseño, confort y protección en cada detalle</h1>
      <ul>
        <li>
           En <strong>ALDUX</strong> creamos soluciones de diseño para tus ambientes.
           Fabricamos cortinas, toldos y cerramientos a medida, combinando materiales premium, terminaciones
         impecables y un estilo moderno que realza cada espacio.
        </li>
        <li>
          Con nosotros, tu casa o empresa tendrá ese toque sofisticado que estás buscando.
           Descubre cómo nuestros productos pueden transformar tu entorno y brindarte la privacidad y confort que mereces.
        </li>
      </ul>
      <button className={styles.button}>PEDI TU COTIZACION</button>
    </div>
  );
}
export default TextLanding;
