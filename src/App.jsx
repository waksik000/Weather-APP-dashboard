import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WeatherCard from "./components/weather/WeatherCard";
import SearchBar from "./components/SearchBar/SearchBar";
import useWeather from "./hooks/useWeather";
import useTheme from "./hooks/useTheme";
function App() {
  const [city, setCity] = useState("");
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  //api запрос
  const { weatherData, loading, error } = useWeather(city);


  useTheme(currentTheme)
  return (
    <div className="dashboard">
      <Header
        city={city}
        toggleTheme={toggleTheme}
      >
        <SearchBar onSearch={setCity} />
      </Header>

      <main className="dashboard__main">
        <WeatherCard
          weatherData={weatherData}
          weatherLoading={loading}
          weatherError={error}
        />
      </main>
    </div>
  );
}

export default App;
