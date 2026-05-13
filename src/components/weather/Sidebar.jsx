import styles from './WeatherCard.module.css'

export default function Sidebar () {
  return (
    <aside className={styles["weather-dashboard__sidebar"]}>
          <div className={styles["sidebar-card"]}>
            <h3 className={styles["sidebar-card__title"]}>Вероятность осадков</h3>
            <div className={styles["rain-chart"]} aria-hidden>
              <div className={styles["rain-chart__y"]}>
                <span>сильно</span>
                <span>ясно</span>
                <span>дождь</span>
              </div>
              <div className={styles["rain-chart__plot"]}>
                <svg className={styles["rain-chart__svg"]} viewBox="0 0 200 80" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    points="0,50 40,35 80,55 120,25 160,40 200,30"
                  />
                </svg>
                <div className={styles["rain-chart__dots"]}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles["rain-chart__x"]}>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span>15</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["sidebar-card"]}>
            <div className={styles["sidebar-card__head"]}>
              <h3 className={styles["sidebar-card__title"]}>Другие города</h3>
              <span className={styles["sidebar-card__link"]}>Все</span>
            </div>
            <ul className={styles["city-list"]}>
              <li className={styles["city-list__item"]}>
                <div className={styles["city-list__meta"]}>
                  <span className={styles["city-list__country"]}>Китай</span>
                  <span className={styles["city-list__name"]}>Пекин</span>
                </div>
                <span className={styles["city-list__cond"]}>Облачно</span>
              </li>
              <li className={styles["city-list__item"]}>
                <div className={styles["city-list__meta"]}>
                  <span className={styles["city-list__country"]}>США</span>
                  <span className={styles["city-list__name"]}>Калифорния</span>
                </div>
                <span className={styles["city-list__cond"]}>Ветрено</span>
              </li>
              <li className={styles["city-list__item"]}>
                <div className={styles["city-list__meta"]}>
                  <span className={styles["city-list__country"]}>ОАЭ</span>
                  <span className={styles["city-list__name"]}>Дубай</span>
                </div>
                <span className={styles["city-list__cond"]}>Ясно</span>
              </li>
            </ul>
          </div>
        </aside>
  );
}