import styles from './cardsilder.module.css'
import { data }from '../../assets/data.js'; 


const CardSlider = () => {
    return (
        <div className={styles.cardSlider}>
            {data.map(item=>(
                <div key={item.id} className={styles.card}>
                    <img src={item.img} alt={item.title} className={styles.image} />
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.descripcion}</p>
                </div>
            ))}
        </div>
    );
}
export default CardSlider;