//**DOC: https://www.weatherapi.com/docs/#
//* API KEY  HERE https://openweathermap.org/
import React, { useState, createContext } from "react";

export const WeatherContext = createContext("default");

export function WeatherProvider({ children }) {
  const [weather, setweather] = useState("");

  const getWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const api = "35a980a59d206bdd871f3d0e948d1a9e";
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        const data = fetch(
          // default is kelvin unit but i add <&units=metric> so its became fahrenheit
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${api}`
        )
          .then((response) => response.json())
          .then((data) => setweather(data));
      });
    } else {
      console.log("accept for check weather");
    }
  };
  window.addEventListener("load", () => getWeather());
  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
}
