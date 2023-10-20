import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>
        <h1>{props.data.city}</h1>
        <div class="row">
          <div class="col">
            <div class="conditions">
              <strong> Humidity </strong>
              <br />
              <em> {props.data.humidity}</em>
              <br />
              <strong> Wind</strong>
              <br />
              <em> {Math.round(props.data.wind)}km/h</em>
            </div>
          </div>
          <div class="col">
            <div class="description">
              <strong>{props.data.info}</strong>
            </div>
          </div>
          <h3><WeatherTemperature celsius={props.data.temperature} /></h3>
        </div>
      </div>
    );
}

