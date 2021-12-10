import { FetchWeaterByLocation } from "api/apiService";
import { FetchWeather } from "api/apiService";
import { useState, useEffect } from "react";
import { Container, InfoWrapper } from "./CurrentTemp.styled";

export function CurrentTemp({ data, location }) {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState({});
  // console.log("location in currentTemp", location);
  // console.log("data in currentTemp", data);

  useEffect(() => {
    if (data !== "") {
      FetchWeather(data).then((response) => {
        setWeather(response);
        setTemp(Math.floor(response.main.temp));
      });
    }
  }, [data]);
  useEffect(() => {
    if (!isNaN(location.lat) && !isNaN(location.lon)) {
      FetchWeaterByLocation(location).then((response) => {
        setWeather(response);
        console.log(response);
        setTemp(Math.floor(response.main.temp));
      });
    }
  }, [location]);

  console.log(weather);

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

  if (typeof weather.main !== "undefined") {
    return (
      <Container>
        <div></div>
        <InfoWrapper>
          <h3>
            {weather.name}: {temp} degrees
          </h3>
          <p>Its {isItWarm(temp)}</p>
          <p>
            Humidity is {weather.main.humidity}% and it feels like{" "}
            {Math.floor(weather.main.feels_like)} degrees
          </p>
          <p>Wind: {Math.floor(weather.wind.speed)} m/s</p>
        </InfoWrapper>
      </Container>
    );
  }
  return <p>No data yet</p>;
}
