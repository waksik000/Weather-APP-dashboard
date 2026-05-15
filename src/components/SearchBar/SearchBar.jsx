import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [searchCityValue, setSearchCityValue] = useState("");

  const handleSearch = () => {
    onSearch(searchCityValue);
    setSearchCityValue("");
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Debounce логика + previous input value
  const debounceRef = useRef(null);
  const previousCityRef = useRef(null);
  const handleChange = (e) => {
    const newValue = e.target.value;

    setSearchCityValue(newValue);

    if (newValue === previousCityRef.current) return;

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      onSearch(newValue);

      previousCityRef.current = newValue;
    }, 700);
  };

  // Input autofocus
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__fieldWrap}>
        <Search className={styles.searchBar__icon} aria-hidden />
        <input
          className={styles.searchBar__input}
          type="text"
          value={searchCityValue}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
          placeholder="Введите город для поиска"
          ref={inputRef}
        />
      </div>
      <button
        className={styles.searchBar__btn}
        type="button"
        onClick={handleSearch}
      >
        Поиск
      </button>
    </div>
  );
}
