import React, { useState, useContext } from "react";
import { WeatherContext } from "./weatherApiContext";
import { fahrenheitToCelsius } from "./FahrenheitToCelsius";
import normalCloud from "../Image/cloud-solid.svg";
// // for future me , sry for write unreadable code */

export default function container() {
  const Weathervalue = useContext(WeatherContext);
  console.log(Weathervalue);
  const dataGet = Weathervalue;
  //  data need sometime to get
  const ifGetData = () => (typeof dataGet !== "string" ? true : false);
  const FTC = fahrenheitToCelsius;
  return (
    <div className={`container `}>
      <div className="weather-icon-container">
        <img
          src={`${
            ifGetData()
              ? `http://openweathermap.org/img/wn/${dataGet.weather[0].icon}@2x.png`
              : { normalCloud }
          }`}
          alt=""
        />
        <h1>
          Weather Status:{" "}
          {ifGetData() ? dataGet.weather[0].description : "waiting..."}
        </h1>
      </div>
      <h2 className="location-name">
        <i className="fas fa-map-marker-alt"></i>
        {` `} Location: {` `}
        {ifGetData() ? dataGet.name : "waiting..."}
      </h2>

      <h2>
        <i className="fas fa-database"></i>
        {` `} Base: {` `}
        {ifGetData() ? dataGet.base : "waiting..."}
      </h2>
      <h1 className="current-temp">
        <i className="fas fa-thermometer-empty"></i>
        {` `}Current Temperature:{` `}
        {ifGetData() ? FTC(dataGet.main.temp).toFixed() : "waiting..."}
        °C
      </h1>
      <h3 className="max-temp">
        <i id="temp-icon" className="fas fa-temperature-high "></i>
        {` `}Highest temperature{` `}
        {ifGetData() ? FTC(dataGet.main.temp_max).toFixed() : "waiting..."}
        °C
      </h3>

      <h3 className="min-temp">
        <i id="temp-icon" className="fas fa-temperature-low "></i>
        {` `}Lowest temperature{` `}
        {ifGetData() ? FTC(dataGet.main.temp_min).toFixed() : "waiting..."}
        °C
      </h3>
    </div>
  );
}
