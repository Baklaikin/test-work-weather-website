import "./App.css";
import { CurrentTemp } from "./views/CurrentTemp";
import { CitySearch } from "./components/CitySearch";
import { useState, useEffect } from "react";
import { useGeolocation } from "./hooks/useGeolocation";
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
      <Wrapper id="tempCard">
        <CitySearch
          onCitySearch={inputHandler}
          onCoordSearch={coordInputHandler}
        />
        <CurrentTemp data={city} location={location} />
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 320px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 8px;
  margin: 0 auto;
  background-color: transparent;
`;

const Wrapper = styled.div`
  border-radius: 12px;
  box-shadow: -1px 0px 8px -3px rgba(34, 60, 80, 0.15);
`;
