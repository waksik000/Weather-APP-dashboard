import { useEffect, useState } from "react"
import { API_KEY } from "../components/consts/consts"

export default function useWeather(city) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        if (!city) {
            setError('')
            setLoading(false)
            return
        }
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
      return {
        loading,
        error,
        weatherData
      }
}