import React, { useState, useContext } from "react";
import Container from "./components/container";
import { WeatherProvider } from "./components/weatherApiContext";
import "./App.scss";

function App() {
  return (
    <div className="App night">
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </div>
  );
}

export default App;
