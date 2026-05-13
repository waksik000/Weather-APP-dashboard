import styles from "./WeatherCard.module.css";

export default function WeatherOverview({ wind, uv, humidity, dew, vis }) {
  return (
    <section className={styles["weather-dashboard__overview"]}>
      <h2 className={styles["weather-dashboard__overviewTitle"]}>Обзор на сегодня</h2>

      <div className={styles["overview-grid"]}>
        <div className={styles["overview-tile"]}>
          <h3 className={styles["overview-tile__title"]}>Ветер</h3>
          <p className={styles["overview-tile__value"]}>{wind} км/ч</p>
        </div>

        <div className={styles["overview-tile"]}>
          <h3 className={styles["overview-tile__title"]}>УФ-индекс</h3>
          <p className={styles["overview-tile__value"]}>{uv ?? "—"}</p>
        </div>

        <div className={styles["overview-tile"]}>
          <h3 className={styles["overview-tile__title"]}>Влажность</h3>
          <p className={styles["overview-tile__value"]}>{humidity}%</p>
          {dew != null ? (
            <p className={styles["overview-tile__hint"]}>{`Точка росы ${dew}`}</p>
          ) : null}
        </div>

        <div className={styles["overview-tile"]}>
          <h3 className={styles["overview-tile__title"]}>Видимость</h3>
          <p className={styles["overview-tile__value"]}>{vis} км</p>
        </div>
      </div>
    </section>
  );
}