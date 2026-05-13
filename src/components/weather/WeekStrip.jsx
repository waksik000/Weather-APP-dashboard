import styles from "./WeatherCard.module.css";
import {WEEK_PLACEHOLDER} from '../consts/weekPlaceholder'
export default function WeekStrip() {
  return (
    <div className={styles["week-strip"]}>
      {WEEK_PLACEHOLDER.map((item) => (
        <div key={item.key} className={styles["week-strip__day"]}>
          <span className={styles["week-strip__label"]}>{item.day}</span>
          <span className={styles["week-strip__iconDot"]} aria-hidden />
          <span className={styles["week-strip__temp"]}>—°</span>
        </div>
      ))}
    </div>
  );
}