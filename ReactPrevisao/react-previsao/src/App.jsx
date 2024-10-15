import { useState, useRef } from 'react';
import './App.css';
import axios from 'axios';
import WeatherInformations from './components/WeatherInformations/WeatherInformations';
import WeatherInformationsFiveDays from './components/WeatherInformationsFiveDays/WeatherInformationsFiveDays';

function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;

    if (!city) {
      return;
    }

    const key = "2872f81b12922889331aeb627d0dc9bc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const apiDataWeather = await axios.get(url);
    const apiInfoFiveDays = await axios.get(urlFiveDays);

    setWeatherFiveDays(apiInfoFiveDays.data);
    setWeather(apiDataWeather.data);
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformations weather={weather} />}
      {weatherFiveDays && <WeatherInformationsFiveDays weatherFiveDays={weatherFiveDays} />}
    </div>
  )
}

export default App
