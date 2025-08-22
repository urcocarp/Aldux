import style from './footer.module.css'
import whats from '../../assets/whatsapp.png'
import maps from '../../assets/MAPS.png'
import mail from '../../assets/MAIL.png'
import facebook from '../../assets/face.png'
import insta from '../../assets/insta.png'

const Footer = () => {
  return (
    <div className={style.containerfooter}>
      
      <div className={style.contactoFooter}>
        <h3>Contacto</h3>
        <div className={style.item}>
          <img src={whats} alt="whatsapp" />
          <span>351 8509477</span>
        </div>
        <div className={style.item}>
          <img src={maps} alt="maps" />
          <span>Rafael de Igarzabal 945, Córdoba</span>
        </div>
        <div className={style.item}>
          <img src={mail} alt="mail" />
          <span>alduxtoldoscortinas@gmail.com.ar</span>
        </div>
      </div>

      
      <div className={style.linksFooter}>
        <a href="#">Inicio</a>
        <a href="#">Quienes Somos</a>
        <a href="#">Productos</a>
        <a href="#">Cotización</a>
        <a href="#">Contacto</a>
      </div>
      
      
      <div className={style.redesFooter}>
      <h3>Seguinos en nuestras redes</h3>
        <a href="#"><img src={insta} alt="instagram" /></a>
        <a href="#"><img src={facebook} alt="facebook" /></a>
      </div>
    </div>
  )
}

export default Footer

