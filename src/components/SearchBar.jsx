import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchData }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [duration, setDuration] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSearch = () => {
    const searchInfo = {
      pickupLocation,
      pickupDate,
      pickupTime,
      duration
    };

    // Save to local storage so PaymentPage can retrieve it later
    localStorage.setItem("tripDetails", JSON.stringify(searchInfo));

    setSearchData(searchInfo); // for modal usage
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

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
        <input
          type="text"
          placeholder="Enter Pickup location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </div>

      <div className="field">
        <label>PICK - UP DATE</label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
      </div>

      <div className="field">
        <label>PICK-UP TIME</label>
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
        />
      </div>

      <div className="field">
        <label>DURATION</label>
        <input
          type="text"
          placeholder="1 hr 10 kms"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <button className="search-btn" onClick={handleSearch}>ENTER</button>

      {showSuccess && (
        <p className="success-msg">
          Yes, our cars and services are available in that location ✅
        </p>
      )}
    </div>
  );
};

export default SearchBar;