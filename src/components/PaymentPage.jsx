import React from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const { car, selectedPlan, price } = state || {};

  // Fallback to localStorage if tripData wasn't passed via route
  const tripData = state?.tripData || JSON.parse(localStorage.getItem("tripDetails"));

  if (!car) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        No car selected. Please go back and try again.
      </p>
    );
  }

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Summary</h2>

      <div className="payment-content">
        {/* Left Section: Car Info */}
        <div className="car-summary">
          <img src={car.image} alt={car.name} className="car-summary-image" />
          <h3>{car.name}</h3>
          <p><strong>Plan:</strong> {selectedPlan}</p>
          <p><strong>Price:</strong> {price}</p>
          <p><strong>Location:</strong> {car.location}</p>
          <p><strong>Power:</strong> {car.power}</p>
          <p><strong>Speed:</strong> {car.speed}</p>
          <p><strong>Acceleration:</strong> {car.acceleration}</p>
          <p><strong>Features:</strong> {car.features.join(", ")}</p>
        </div>

        {/* Right Section: Trip Info */}
        <div className="trip-summary">
          <h3>Your Trip Details</h3>
          <p><strong>Pickup Location:</strong> {tripData?.pickupLocation || "Not Provided"}</p>
          <p><strong>Pickup Date:</strong> {tripData?.pickupDate || "Not Provided"}</p>
          <p><strong>Pickup Time:</strong> {tripData?.pickupTime || "Not Provided"}</p>
          <p><strong>Duration:</strong> {tripData?.duration || "Not Provided"}</p>

          <h3>Payment Info</h3>
          <form className="payment-form">
            <input type="text" placeholder="Name on Card" required />
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Expiry (MM/YY)" required />
            <input type="text" placeholder="CVV" required />
            <button type="submit" className="confirm-btn">Confirm Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;