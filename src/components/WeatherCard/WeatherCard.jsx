import styles from "./WeatherCard.module.css"

export default function WeatherCard({weatherData, weatherLoading, weatherError}) {

    
    if (!weatherData) {
        return (
            <><div>Loading...</div></>
        )
    }

    const cityTemp = weatherData.current.temp_c
    const cityIcon = weatherData.current.condition.icon
    const cityWind = weatherData.current.wind_mph
    return (
        <div className={styles.weatherCard}>
            <div className={styles.weatherCard__top}>
                <h3 className={styles.weatherCard__day}>Friday</h3>
                <p className={styles.weatherCard__time}>11:00</p>
            </div>

            <div className={styles.weatherCard__content}>
            <div className={styles.weatherCard__temperature}>
                <h3 className={styles.temperature__number}>{cityTemp}</h3>
                <img src={cityIcon} alt="Иконка погоды" />

                <p>Ветер {cityWind}</p>
            </div>

            </div>
        </div>
    )
}