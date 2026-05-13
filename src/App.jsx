import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import WeatherCard from './components/WeatherCard/WeatherCard'
import SearchBar from './components/SearchBar/SearchBar'
function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [loading,setLoading] = useState('')
  const [error,setError] = useState('')

  return (
    <>
    <Header
    />

    <SearchBar
    onSearch = {setCity}
    />

    <WeatherCard
    />
    </>
  )
}

export default App
