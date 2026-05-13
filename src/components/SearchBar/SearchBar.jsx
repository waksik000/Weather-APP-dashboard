import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchCityValue, setSearchCityValue] = useState("");

  const handleSearch = () => {
    onSearch(searchCityValue);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchCityValue}
        onChange={(e) => setSearchCityValue(e.target.value)}
        onKeyDown={handleOnKeyDown}
        placeholder="Введите город для поиска"
      />
      <button onClick={handleSearch}>Search</button>
      <p>{searchCityValue}</p>
    </div>
  );
}
