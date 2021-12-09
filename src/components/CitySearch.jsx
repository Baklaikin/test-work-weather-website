import { useState } from "react/cjs/react.development";

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
  console.log("result in city", result);

  return (
    <form onSubmit={formHandler}>
      <input
        type="text"
        name="citySearch"
        placeholder="Enter the city or coordinates"
        onInput={inputHandler}
      />
      <button>Search</button>
    </form>
  );
}
