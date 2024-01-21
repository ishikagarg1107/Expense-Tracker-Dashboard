//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=0a08481a03da497161baa8363ea4b26d

import React, { useState, useEffect } from "react";
import "./Weather.css";
const Weather = (props) => {
  const [tempInfo, setTempInfo] = useState({});
  const [weatherState, setWeatherState] = useState("");
  console.log(props.location);
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props?.location}&units=metric&appid=0a08481a03da497161baa8363ea4b26d`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    getWeatherInfo();
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("cloudy");
          break;
        case "Mist":
          setWeatherState("mist");
          break;
        case "Haze":
          setWeatherState("mist");
          break;
        case "Clear":
          setWeatherState("clear_day");
          break;
        case "Rain":
          setWeatherState("rainy");
          break;
        default:
          setWeatherState("sunny");
      }
    }
  }, [weathermood,props.location]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="weather-card">
      <div className="temp-detail">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span class="material-symbols-rounded icn">{weatherState}</span>
        </div>
        <div className="weatherCondition">
          <div>{temp} °C</div>
          <div>{weathermood}</div>
        </div>
      </div>
      <div className="place">
        {name}, {country}
      </div>
      {/* <div className="date">{new Date().toLocaleString()}</div> */}
      <div>
        <div
          className="extra-temp"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr}PM
                <br />
                sunset
              </p>
            </div> */}
          <div className="two-sided-section" style={{ margin: "5px" }}>
            <i className={"wi wi-humidity"}></i> {humidity} <br />
            Humidity
          </div>

          <div className="two-sided-section" style={{ margin: "5px" }}>
            <i className={"wi wi-rain"}></i> {pressure} <br />
            Pressure
          </div>

          <div className="two-sided-section" style={{ margin: "5px" }}>
            <i className={"wi wi-strong-wind"}></i> {speed} <br />
            Speed
          </div>
        </div>
      </div>
      {/* </article> */}
    </div>
  );
};

export default Weather;
