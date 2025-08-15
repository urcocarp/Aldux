import style from './landing.module.css';
import imglogo from '../../assets/logofondo.png'; // Adjust the path as necessary


const Landing = () => {
  return (
    <div className={style.landingContainer}>
      
    <div className={style.imageLanding}>
    <img src={imglogo} ></img>

    </div>
    </div>
   
  );
}
export default Landing;