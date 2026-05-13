import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WeatherCard from "./components/weather/WeatherCard";
import SearchBar from "./components/SearchBar/SearchBar";
import useWeather from "./hooks/useWeather";
function App() {
  const [city, setCity] = useState("");
  

  //api запрос
  const { weatherData, loading, error, } = useWeather(city)
  
  return (
    <div className="dashboard">
      <Header city={city}>
        <SearchBar onSearch={setCity} />
      </Header>

      <main className="dashboard__main">
        <WeatherCard 
        weatherData = {weatherData}
        weatherLoading = {loading}
        weatherError = {error}
        />
      </main>
    </div>
  );
}

export default App;
