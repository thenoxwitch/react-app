import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

useEffect(() => {setLoaded(false);}  , [props.coordinates]);


    function handeleResponse(response) {
     setForecast(response.data.daily);
     setLoaded(true);

}

if (loaded) {
     return (
       <div className="WeatherForecast d-inline-flex p-2">
         <div className="row">
           {forecast.map(function (dailyForecast, index) {
             if (index < 5) {
               return (
                 <div className="col" key={index}>
                   <WeatherForecastDay data={dailyForecast} />
                 </div>
               );
             } else {
              return null;
             }
           })}
         </div>
       </div>
     );

    } else {
let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handeleResponse);
return null;

   
}
}