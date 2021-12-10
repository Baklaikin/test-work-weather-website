import { useState } from "react/cjs/react.development";
import { Form, Input, Button } from "./CitySearch.styled";

export function CitySearch({ onCitySearch, onCoordSearch }) {
  const [result, setResult] = useState("");
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  const formHandler = (event) => {
    event.preventDefault();
    if (result === "" && location.lat === "" && location.lon === "") {
      alert("Enter the city or coordinates");
      return;
    }
    onCitySearch(result);
    onCoordSearch(location);

    event.target.reset();
  };

  const inputHandler = (event) => {
    const data = event.target.value;
    if (!Number(data)) {
      setResult(data);
    }
    const coords = data.split(" ");
    setLocation({ lat: Math.round(coords[0]), lon: Math.round(coords[1]) });
  };

  return (
    <Form onSubmit={formHandler}>
      <Input
        type="text"
        name="citySearch"
        placeholder="Enter the city or coordinates"
        onInput={inputHandler}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
