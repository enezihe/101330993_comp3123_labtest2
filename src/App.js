import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // For now, just log the query to the console
    console.log("Searching for city:", query);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherSearch
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;
