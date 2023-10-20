import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("{}");
  let [loading, setLoading] = useState(false);

  function displayWeather(response) {
    console.log(response.data);

    setLoading(true);

    setWeather({
      temperature: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      info: response.data.weather[0].description,
      city: response.data.name,
     
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=701f06352d61835bc4fc894e7b084629&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city prrrr..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
  
    </form>
  );
        

  if (loading) {
    return (
      <div>
        {form}
        <div>
          {" "}
         <WeatherInfo data={weather}/>
          <br />
        </div>

        <img class="main-icon" src={weather.icon} alt="clear" id="icon" />
<div>
      
       </div>
      </div>
    );
  } else {
    return form;
  }
}
