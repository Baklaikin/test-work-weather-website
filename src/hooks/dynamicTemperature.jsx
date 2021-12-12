export const dynamicTemp = (temp) => {
  let r;
  if (temp > 10) {
    r = 255;
  } else if (temp < 10 && temp > -1) {
    r = Math.round(255 - 255 / temp);
    if (r < 0) {
      r = 0;
    }
  } else {
    r = 0;
  }
  let g;
  if (temp < 15 && temp > -10) {
    g = 255;
  } else if (temp > 15) {
    g = Math.round(255 - temp * 5);
    if (g < 0) {
      g = 0;
    } else if (g > 255) {
      g = 255;
    }
  } else if (temp < 0) {
    g = Math.round(255 + temp * 5);
    if (g < 0) {
      g = 0;
    } else if (g > 255) {
      g = 255;
    }
  }
  let b;
  if (temp > 0) {
    b = 0;
  } else {
    b = 255 - temp * 12.5;
    if (b < 0) {
      b = 0;
    } else {
      b = 255;
    }
  }
  return `rgb(${r},${g},${b})`;
};
