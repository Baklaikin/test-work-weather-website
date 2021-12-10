import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [loc, setLoc] = useState({
    loaded: false,
    coord: { lat: "", lon: "" },
    error: "",
  });

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLoc({
        loaded: true,
        err: "Not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  function onSuccess(location) {
    setLoc({
      loaded: true,
      coord: { lat: location.coords.latitude, lon: location.coords.longitude },
      error: "",
    });
  }
  function onError(error) {
    setLoc({
      loaded: true,
      error,
    });
    console.log(error.message);
  }
  return loc.coord;
};
