import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Search() {
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
          <h2><FormattedDate date={weather.date} /></h2>
          <h1>{weather.city}</h1>
          <div class="row">
            <div class="col">
              <div class="conditions">
                <strong> Humidity </strong>
                <br />
                <em> {weather.humidity}</em>
                <br />
                <strong> Wind</strong>
                <br />
                <em> {Math.round(weather.wind)}km/h</em>
              </div>
            </div>
            <div class="col">
              <div class="description">
                <strong>{weather.info}</strong>
              </div>
            </div>
          </div>
          <br />
        </div>

        <img class="main-icon" src={weather.icon} alt="clear" id="icon" />
        <h3 id="temperature">{Math.round(weather.temperature)}</h3>
        <p class="units">C</p>
      </div>
    );
  } else {
    return form;
  }
}
