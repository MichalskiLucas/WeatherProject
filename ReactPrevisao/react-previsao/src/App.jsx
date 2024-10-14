import { useState, useRef } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef();

  async function searchCity(){
    console.log(inputRef.current.value);
    const city = inputRef.current.value;
    const key = "2872f81b12922889331aeb627d0dc9bc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    const data = await axios.get(url);

    console.log(data);
  }

  return (
    <div>
      <h1>DevClub Precisão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
