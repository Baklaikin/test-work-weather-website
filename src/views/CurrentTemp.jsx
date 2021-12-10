import { FetchWeaterByLocation } from "../api/apiService";
import { FetchWeather } from "../api/apiService";
import { useState, useEffect } from "react";
import {
  Container,
  InfoWrapper,
  WeatherPicture,
  Temp,
} from "./CurrentTemp.styled";

export function CurrentTemp({ data, location }) {
  const [temp, setTemp] = useState("");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    if (data !== "") {
      FetchWeather(data).then((response) => {
        setWeatherData(response);
        setTemp(Math.floor(response.main.temp));
      });
    }
  }, [data]);

  useEffect(() => {
    if (!isNaN(location.lat) && !isNaN(location.lon)) {
      FetchWeaterByLocation(location).then((response) => {
        setWeatherData(response);
        setTemp(Math.floor(response.main.temp));
      });
    }
  }, [location]);

  const isItWarm = (temp) => {
    if (temp < 10) {
      document.body.style.backgroundColor = "#00ffff";
      return "cold";
    }
    if (temp > 10 && temp < 30) {
      document.body.style.backgroundColor = "#fff700";
      return "warm";
    }
    if (temp > 30) {
      document.body.style.backgroundColor = "#ff8c00";
      return "hot";
    }
  };

  if (typeof weatherData.main !== "undefined") {
    return (
      <Container>
        <WeatherPicture picture={weatherData.weather[0].icon} />
        <InfoWrapper>
          <h3>
            {weatherData.name},{weatherData.sys.country}
          </h3>
          <p>
            Its <Temp>{temp}</Temp> degrees and {isItWarm(temp)}, humidity is{" "}
            {weatherData.main.humidity}% and it feels like{" "}
            {Math.floor(weatherData.main.feels_like)} degrees
          </p>
          <p>Wind is {Math.floor(weatherData.wind.speed)} m/s</p>
        </InfoWrapper>
      </Container>
    );
  }
  return <p>No data yet</p>;
}
