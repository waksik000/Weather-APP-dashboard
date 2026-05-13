import styles from "./WeatherCard.module.css"

export default function WeatherCard() {


    return (
        <div className={styles.weatherCard}>
            <div className={styles.weatherCard__top}>
                <h3 className={styles.weatherCard__day}>Friday</h3>
                <p className={styles.weatherCard__time}>11:00</p>
            </div>

            <div className={styles.weatherCard__content}>
            <div className={styles.weatherCard__temperature}>
                <h3 className={styles.temperature__number}>16</h3>
                <img src="" alt="Иконка погоды(меняется взависимости от погоды)" />
            </div>

            </div>
        </div>
    )
}