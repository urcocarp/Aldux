import CardSlider from '../cardslider/cardslider.jsx';
import styles from './slider.module.css';

const Slider = () => {
    return (
        <div className={styles.carrusell}>
        <h2 className={styles.title}>Nuestros Productos</h2>
            <div className={styles.sliderTrack}>
                <CardSlider />
            </div>
        </div>
    );
};

export default Slider;
