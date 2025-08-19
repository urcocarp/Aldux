import styles from './QuieneSomos.module.css'

const QuieneSomos = () => {
  return (
    <div className={styles.quienesSomos}>
      <div className={styles.texto}>
        <h1>Sobre Nosotros</h1>
        <h3>Somos fabricantes. Somos ALDUX.</h3>
        <p>
          <strong>ALDUX</strong> es una empresa cordobesa con más de 18 años de experiencia en la
          fabricación de cortinas, toldos y cerramientos a medida. Nos apasiona el diseño y la
          arquitectura de interiores, por eso trabajamos con materiales de primera calidad y un
          equipo especializado que cuida cada detalle.
        </p>
        <p>
          Nuestra misión es transformar tus espacios en lugares funcionales, confortables y con un
          estilo que hable de vos.
        </p>
      </div>

      
    </div>
  )
}

export default QuieneSomos;
