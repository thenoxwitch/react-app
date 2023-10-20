import React from "react";
import ForecastIcon from "./ForecastIcon";
export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let Temperature = Math.round(props.data.temp.max);
        return `${Temperature}°`;
    }

      function minTemperature() {
        let Temperature = Math.round(props.data.temp.min);
        return `${Temperature}°`;
      }

      function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

        return days[day];
      }

    return (
        <div>
<div className="forecast-day">{day()}</div>
             <ForecastIcon code={props.data.weather[0].icon} />
             <div className="forecast-temperatures">
               <span className="forecast-temperature-min">{maxTemperature()}</span>
               <span className="forecast-temperature-max">{minTemperature()}</span>
             </div>
             </div>
    );
}