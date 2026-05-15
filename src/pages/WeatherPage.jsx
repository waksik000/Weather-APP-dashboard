import WeatherCard from "../components/weather/WeatherCard";

export default function WeatherPage({ weatherData, loading, error }) {
  return (
    <WeatherCard
      weatherData={weatherData}
      weatherLoading={loading}
      weatherError={error}
    />
  );
}
