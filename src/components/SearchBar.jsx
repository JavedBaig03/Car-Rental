import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="field">
        <label>TRIP TYPE</label>
        <select>
          <option>Rentals</option>
        </select>
      </div>

      <div className="field">
        <label>PICK UP LOCATION</label>
        <input type="text" placeholder="Enter Pickup location" />
      </div>

      <div className="field">
        <label>PICK - UP DATE</label>
        <input type="date" />
      </div>

      <div className="field">
        <label>PICK-UP TIME</label>
        <input type="time" />
      </div>

      <div className="field">
        <label>DURATION</label>
        <input type="text" placeholder="1 hr 10 kms" />
      </div>

      <button className="search-btn">SEARCH</button>
    </div>
  );
};

export default SearchBar;