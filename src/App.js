import "./App.css";
import { CurrentTemp } from "views/CurrentTemp";
import { CitySearch } from "components/CitySearch";
import { useState } from "react";
import { useGeolocation } from "hooks/useGeolocation";
import { useEffect } from "react";
import styled from "@emotion/styled";

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
    <Container>
      <CitySearch
        onCitySearch={inputHandler}
        onCoordSearch={coordInputHandler}
      />
      <CurrentTemp data={city} location={location} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 320px;
  max-width: 1280px;
  padding: 8px;
  margin: 0 auto;
  background-color: transparent;
`;
