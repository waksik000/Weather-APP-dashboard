import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [searchCityValue, setSearchCityValue] = useState("");

  const handleSearch = () => {
    onSearch(searchCityValue);
    setSearchCityValue('')
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__fieldWrap}>
        <Search className={styles.searchBar__icon} aria-hidden />
        <input
          className={styles.searchBar__input}
          type="text"
          value={searchCityValue}
          onChange={(e) => setSearchCityValue(e.target.value)}
          onKeyDown={handleOnKeyDown}
          placeholder="Введите город для поиска"
        />
      </div>
      <button className={styles.searchBar__btn} type="button" onClick={handleSearch}>
        Поиск
      </button>
    </div>
  );
}
