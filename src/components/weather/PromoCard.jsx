import styles from './WeatherCard.module.css'
export default function PromoCard() {
  return (
    <div className={styles["promo-card"]}>
      <p className={styles["promo-card__text"]}>
        Карта ветра, погоды и океана
      </p>
      <span className={styles["promo-card__btn"]}>Начать</span>
    </div>
  );
}