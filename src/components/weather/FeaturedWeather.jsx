import styles from "./WeatherCard.module.css";

export default function FeaturedWeather({
  temp,
  icon,
  feels,
  wind,
  windDir,
  pressure,
  humidity,
  locationLine,
}) {
  const iconSrc =
    typeof icon === "string" && icon.startsWith("//") ? `https:${icon}` : icon;

  return (
    <article className={styles["featured-card"]}>
      <div className={styles["featured-card__header"]}>
        <div>
          <h3 className={styles["featured-card__day"]}>
            {new Date().toLocaleString("ru-RU", { weekday: "long" })}
          </h3>
          <p className={styles["featured-card__time"]}>11:00</p>
          {locationLine && (
            <p className={styles["featured-card__location"]}>
              {locationLine}
            </p>
          )}
        </div>

        <img className={styles["featured-card__icon"]} src={iconSrc} alt="icon" />
      </div>

      <p className={styles["featured-card__temp"]}>
        <span className={styles["featured-card__tempValue"]}>{temp}</span>
        <span className={styles["featured-card__tempUnit"]}>°</span>
      </p>

      <dl className={styles["featured-card__stats"]}>
        <div className={styles["featured-card__stat"]}>
          <dt className={styles["featured-card__statLabel"]}>Ощущается</dt>
          <dd className={styles["featured-card__statValue"]}>{feels ?? "—"}°</dd>
        </div>

        <div className={styles["featured-card__stat"]}>
          <dt className={styles["featured-card__statLabel"]}>Ветер</dt>
          <dd className={styles["featured-card__statValue"]}>
            {windDir ? `${windDir}, ` : ""}
            {wind} км/ч
          </dd>
        </div>

        <div className={styles["featured-card__stat"]}>
          <dt className={styles["featured-card__statLabel"]}>Давление</dt>
          <dd className={styles["featured-card__statValue"]}>{pressure ?? "—"} mb</dd>
        </div>

        <div className={styles["featured-card__stat"]}>
          <dt className={styles["featured-card__statLabel"]}>Влажность</dt>
          <dd className={styles["featured-card__statValue"]}>{humidity ?? "—"}%</dd>
        </div>
      </dl>
    </article>
  );
}