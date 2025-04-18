import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarDetailModal.css";

const CarDetailModal = ({ car, onClose, tripData }) => {
  const [selectedPlan, setSelectedPlan] = useState("hourly");
  const navigate = useNavigate();

  if (!car) return null;

  const price = selectedPlan === "hourly" ? car.hourlyRate : car.dailyRate;

  const handlePickUp = () => {
    if (
      !tripData?.pickupLocation ||
      !tripData?.pickupDate ||
      !tripData?.pickupTime ||
      !tripData?.duration
    ) {
      alert("⚠️ Please fill all the trip details in the search bar before proceeding to payment.");
      return;
    }

    navigate("/payment", {
      state: {
        car,
        selectedPlan,
        price,
        tripDetails: tripData,
      },
    });
  };

  return (
    <div className="car-modal-overlay">
      <div className="car-modal-horizontal">

        {/* Left Section: Image */}
        <div className="left-section">
          <img className="modal-car-image" src={car.image} alt={car.name} />
        </div>

        {/* Right Section: Info */}
        <div className="right-section">
          <div className="modal-header">
            <button className="modal-back" onClick={onClose}>←</button>
            <button className="modal-fav">♡</button>
          </div>

          <h2 className="car-title">{car.name}</h2>
          <p className="rating">⭐ 4.9 <span className="muted">(230 Reviews)</span></p>

          <div className="specs-row">
            <div className="spec">
              <p className="label">Power</p>
              <p className="value">{car.power}</p>
            </div>
            <div className="spec">
              <p className="label">Max Speed</p>
              <p className="value">{car.speed}</p>
            </div>
            <div className="spec">
              <p className="label">Acceleration</p>
              <p className="value">{car.acceleration}</p>
            </div>
          </div>

          <div className="plan">
            <p className="label">Plan</p>
            <div className="plan-options">
              <button
                className={selectedPlan === "hourly" ? "active" : ""}
                onClick={() => setSelectedPlan("hourly")}
              >
                Hourly Rent<br /><span>{car.hourlyRate}</span>
              </button>
              <button
                className={selectedPlan === "daily" ? "active" : ""}
                onClick={() => setSelectedPlan("daily")}
              >
                Daily Rent<br /><span>{car.dailyRate}</span>
              </button>
            </div>
          </div>

          <div className="location">
            <p className="label">Location</p>
            <p className="value">📍 {car.location}</p>
          </div>

          <div className="modal-footer">
            <h3 className="price">{price} <span>/ {selectedPlan}</span></h3>
            <button className="pickup-btn" onClick={handlePickUp}>Pick Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;