import { dynamicTemp } from "./dynamicTemperature";

export const isItWarm = (temp) => {
  const card = document.querySelector("#tempCard");
  card.style.backgroundColor = dynamicTemp(temp);
  if (temp > 30) {
    return "very hot";
  } else if (temp > 15 && temp < 30) {
    return "comfortable";
  } else if (temp > 5 && temp < 16) {
    return "normal";
  } else if (temp > -5 && temp < 6) {
    return "chilly";
  } else if (temp < -4 && temp > -15) {
    return "cold";
  } else if (temp < -14) {
    return "very cold";
  }
};
