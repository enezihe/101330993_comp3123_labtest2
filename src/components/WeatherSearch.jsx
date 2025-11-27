import React from "react";

const WeatherSearch = ({ query, onQueryChange, onSearch }) => {
  const handleKeyDown = (event) => {
    // Allow pressing Enter to trigger the search
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search city, e.g. Toronto"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default WeatherSearch;
