import style from './footer.module.css'
import whats from '../../assets/whatsapp.png'
import maps from '../../assets/MAPS.png'
import mail from '../../assets/MAIL.png'

const Footer = () => {
  return (
    <div className={style.containerfooter}>
      <div className={style.contactoFooter}>
        <div className={style.item}>
          <img src={whats} alt="whatsapp" />
          <span>3518509477</span>
        </div>
        <div className={style.item}>
          <img src={maps} alt="maps" />
          <span>Córdoba, Argentina</span>
        </div>
        <div className={style.item}>
          <img src={mail} alt="mail" />
          <span>info@tuempresa.com</span>
        </div>
      </div>

      <div className={style.linksFooter}>
        <a>INICIO</a>
        <a>QUIENES SOMOS</a>
        <a>PRODUCTOS</a>
        <a>CONTACTO</a>
      </div>
      <div className={style.redesFooter}>
      <div></div>
      
      </div>
    </div>
  )
}

export default Footer;
