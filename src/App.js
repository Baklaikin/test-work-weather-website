import "./App.css";
import { CurrentTemp } from "views/CurrentTemp";
import { CitySearch } from "components/CitySearch";
import { useState } from "react";
import { useGeolocation } from "hooks/useGeolocation";
import { useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({});

  const position = useGeolocation();
  useEffect(() => {
    setLocation({
      lat: Number(position.lat),
      lon: Number(position.lon),
    });
  }, [position.lat, position.lon]);

  const inputHandler = (result) => setCity(result);
  const coordInputHandler = (result) => setLocation(result);

  return (
    <div>
      <CitySearch
        onCitySearch={inputHandler}
        onCoordSearch={coordInputHandler}
      />
      <CurrentTemp data={city} location={location} />
    </div>
  );
}

export default App;
