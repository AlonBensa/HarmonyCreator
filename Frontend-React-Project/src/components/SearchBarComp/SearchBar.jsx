import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setFilter }) {
  const [searchFilter, setSearchFilter] = useState("");

  const handleSearch = () => {
    setFilter(searchFilter);
  };

  return (
    <div className="search-container">
      <input
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => {
          setSearchFilter(e.target.value);
        }}
        value={searchFilter}
      />
      <button onClick={handleSearch} className="search">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
