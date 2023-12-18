import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [Weather, setWeather] = useState(null);

  const apiKey = "1dfc299d4afa57fbc6ed423ea35bcc5c";

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="Input">
        <input
          className="Inp"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {Weather && (
        <div className="Weather">
          <h2>
            {Weather.name}, {Weather.sys.country}
          </h2>
          <p>Temperature: {Weather.main.temp} C</p>
          <p>Weather: {Weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
