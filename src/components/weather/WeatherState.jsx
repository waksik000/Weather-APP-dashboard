import styles from "./WeatherCard.module.css";

export default function WeatherState({ type }) {
  if (type === "loading") {
    return (
      <div className={styles["weather-dashboard__state"]}>
        <div className={styles["weather-dashboard__stateInner"]}>
          <div className={styles["weather-dashboard__spinner"]} />
          <p className={styles["weather-dashboard__stateText"]}>
            Загрузка... Пожалуйста подождите
          </p>
        </div>
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className={styles["weather-dashboard__state"]}>
        <div
          className={`${styles["weather-dashboard__stateInner"]} ${styles["weather-dashboard__stateInner--error"]}`}
        >
          <p className={styles["weather-dashboard__stateText"]}>
            Пожалуйста введите корректное название города
          </p>
        </div>
      </div>
    );
  }

  return null;
}