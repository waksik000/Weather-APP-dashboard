import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { API_KEY } from "./components/consts/consts";
function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //api запрос
  useEffect(() => {
    if (!city) return;
    setError("");
    setLoading(true);
    async function loadWeather() {
      try {
        const URL = `/api/v1/current.json?key=${API_KEY}&q=${city}`
        const res = await fetch(URL);

        if (!res.ok) {
          throw new Error("Город не найден или ошибка API");
        }

        const data = await res.json();
        setWeatherData(data);
        console.log(data.current.temp_c);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    }
    loadWeather();
  }, [city]);

  return (
    <>
      <Header />

      <SearchBar onSearch={setCity} />

      <WeatherCard 
      weatherData = {weatherData}
      weatherLoading = {loading}
      weatherError = {error}
      />
    </>
  );
}

export default App;
