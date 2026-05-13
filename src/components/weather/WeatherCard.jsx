import WeatherState from "./WeatherState";
import FeaturedWeather from "./FeaturedWeather";
import WeekStrip from "./WeekStrip";
import WeatherOverview from "./WeatherOverview";
import PromoCard from "./PromoCard";
import Sidebar from "./Sidebar";
import styles from './WeatherCard.module.css'

export default function WeatherCard(props) {
  const { weatherData, weatherLoading, weatherError } = props;

  if (weatherLoading) return <WeatherState type="loading" />;
  if (weatherError) return <WeatherState type="error" />;
  if (!weatherData) return null;

  const current = weatherData.current;
  const location = weatherData.location;

  const locationLine = [location.name, location.region || location.country]
    .filter(Boolean)
    .join(", ");

  return (
    <div className={styles["weather-dashboard"]}>
      <div className={styles["weather-dashboard__grid"]}>
        <div className={styles["weather-dashboard__primary"]}>
          <div className={styles["weather-dashboard__forecastRow"]}>
            <FeaturedWeather
              temp={current.temp_c}
              icon={current.condition.icon}
              feels={current.feelslike_c}
              wind={current.wind_mph}
              windDir={current.wind_dir}
              pressure={current.pressure_mb}
              humidity={current.humidity}
              locationLine={locationLine}
            />
            <WeekStrip />
          </div>

          <WeatherOverview
            wind={current.wind_mph}
            uv={current.uv}
            humidity={current.humidity}
            dew={current.dewpoint_c}
            vis={current.vis_km}
          />
        </div>

        <div className={styles["weather-dashboard__promo"]}>
          <PromoCard />
        </div>

        <Sidebar />
      </div>
    </div>
  );
}