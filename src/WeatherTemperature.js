import React, { useState } from "react";


export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}


function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}


if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
          <h3 id="temperature">{Math.round(props.celsius)}</h3>
        <p class="units">
          °C /{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
          </a>
          </p>
        </div>

    );
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
      <div className="WeatherTemperature">
        <h3 id="temperature">{Math.round(fahrenheit)}</h3>
        <p class="units">
           <a href="/" onClick={showCelsius}>
            °C
           </a>{" "}
            / °F
          
        </p>
      </div>
    );

}
}