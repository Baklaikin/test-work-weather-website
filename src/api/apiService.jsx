import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const KEY = "99865ebe8f851231124cb09f7d46c675";

export async function FetchWeather(data) {
  const response = await axios
    .get(`${BASE_URL}?q=${data}&units=metric&appid=${KEY}`)
    .then((value) => {
      if (value.status !== 200) {
        throw new Error(value.status);
      }
      return value.data;
    });
  return response;
}

export async function FetchWeaterByLocation(data) {
  const response = await axios
    .get(
      `${BASE_URL}?lat=${data.lat}&lon=${data.lon}&units=metric&appid=${KEY}`
    )
    .then((value) => {
      if (value.status !== 200) {
        throw new Error(value.status);
      }
      return value.data;
    });
  return response;
}
