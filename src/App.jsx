import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import useWeather from "./hooks/useWeather";
import useTheme from "./hooks/useTheme";
import WeatherPage from "./pages/WeatherPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";
function App() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "";
  });
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  //api запрос
  const { weatherData, loading, error } = useWeather(city);

  useTheme(currentTheme);

  // theme local storage
  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  // city local storage
  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  return (
    <div className="dashboard">
      <Header city={city} toggleTheme={toggleTheme}>
        <SearchBar onSearch={setCity} />
      </Header>

      <main className="dashboard__main">
        <Routes>
          <Route
            path="/"
            element={
              <WeatherPage
                weatherData={weatherData}
                loading={loading}
                error={error}
              />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
