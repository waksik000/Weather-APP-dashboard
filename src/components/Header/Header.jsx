import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Grid2x2 } from 'lucide-react';
export default function Header() {
  return (
  <div className={styles.header}>
    <div className={styles.containerPrimary}>
      <div className={styles.header__menu}>
        <button className={styles.menu__apps}>
          <Grid2x2/>
        </button>

        <button className={styles.menu__notify}>
            <img src="" alt="колокольчик" />
        </button>
        <div className={styles.menu__location}>
            <img src="" alt="значок геопозиции" />
            <h4>Тут будет текст текущей позиции</h4>
        </div>
        
      </div>

      <SearchBar />

      <div className={styles.header__settings}>
        <button className={styles.setting__theme}>

        </button>

        <img src="" alt="тут будет аватарка пользователя" />
      </div>
    </div>
  </div>
)}
