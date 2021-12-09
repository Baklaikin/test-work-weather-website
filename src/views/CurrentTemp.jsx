import { FetchWeaterByLocation } from "api/apiService";
import { FetchWeather } from "api/apiService";
import { useState, useEffect } from "react";

export function CurrentTemp({ data, location }) {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState({});
  console.log("location in currentTemp", location);
  console.log("data in currentTemp", data);
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
    if (temp < 10) return "cold";
    if (temp > 10 && temp < 30) return "warm";
    if (temp > 30) return "hot";
  };

  if (typeof weather.main !== "undefined") {
    return (
      <>
        <h3>Temperature in {weather.name} is:</h3>
        <p>
          Its {isItWarm(temp)} and the temperature is {temp} degrees
        </p>
        <p>
          {" "}
          Humidity is {weather.main.humidity} and it feels like{" "}
          {Math.floor(weather.main.feels_like)} degrees
        </p>
        <p>Wind {Math.floor(weather.wind.speed)} m/s</p>
      </>
    );
  }
  return <p>No data yet</p>;
}
