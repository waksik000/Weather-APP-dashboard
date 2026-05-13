import styles from "./Header.module.css";
import { Grid2x2, Bell, MapPin, Moon } from "lucide-react";

export default function Header({ city, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <button type="button" className={styles.header__iconBtn} aria-label="Меню">
            <Grid2x2 />
          </button>

          <button type="button" className={styles.header__iconBtn} aria-label="Уведомления">
            <Bell />
          </button>

          <div className={styles.header__location}>
            <MapPin aria-hidden />
            <h4 className={styles.header__locationText}>{city || "—"}</h4>
          </div>
        </div>

        {children ? <div className={styles.header__center}>{children}</div> : null}

        <div className={styles.header__right}>
          <button type="button" className={styles.header__theme} aria-label="Тема: тёмная">
            <Moon />
          </button>

          <div className={styles.header__avatarPlaceholder} aria-hidden />
        </div>
      </div>
    </header>
  );
}
