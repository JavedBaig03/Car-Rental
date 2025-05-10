import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const { car, selectedPlan, price, tripDetails } = state || {};
  const [paymentMode, setPaymentMode] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!car) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>No car selected. Please go back and try again.</p>;
  }

  const handlePayment = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Summary</h2>

      <div className="payment-content">
        {/* Left Section */}
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

        {/* Right Section */}
        <div className="trip-summary">
          <h3>Your Trip Details</h3>
          <p><strong>Pickup Location:</strong> {tripDetails?.pickupLocation || "Not Provided"}</p>
          <p><strong>Pickup Date:</strong> {tripDetails?.pickupDate || "Not Provided"}</p>
          <p><strong>Pickup Time:</strong> {tripDetails?.pickupTime || "Not Provided"}</p>
          <p><strong>Duration:</strong> {tripDetails?.duration || "Not Provided"}</p>

          <h3>Choose Payment Method</h3>
          <div className="payment-options">
            <button
              className={`payment-btn ${paymentMode === "card" ? "active" : ""}`}
              onClick={() => setPaymentMode("card")}
            >
              💳 Pay by Card
            </button>
            <button
              className={`payment-btn ${paymentMode === "upi" ? "active" : ""}`}
              onClick={() => setPaymentMode("upi")}
            >
              🏦 Pay by UPI
            </button>
          </div>

          {/* Animated form switch */}
          <div className="payment-method-fields fade-in">
            {paymentMode === "card" && (
              <form className="payment-form" onSubmit={handlePayment}>
                <input type="text" placeholder="Name on Card" required maxLength="30" />
                <input type="text" placeholder="Card Number" required pattern="\d{16}" inputMode="numeric" maxLength="16" title="Enter 16-digit card number" />
                <input type="text" placeholder="Expiry (MM/YY)" required pattern="(0[1-9]|1[0-2])/\d{2}" title="Format: MM/YY" />
                <input type="text" placeholder="CVV" required pattern="\d{3}" inputMode="numeric" maxLength="3" title="3-digit CVV code" />
                
                {/* Aadhar number input */}
                <input
                  type="text"
                  placeholder="Aadhar Number"
                  required
                  pattern="\d{12}"
                  inputMode="numeric"
                  maxLength="12"
                  title="Enter 12-digit Aadhar number"
                />

                <button type="submit" className="confirm-btn">Confirm Card Payment</button>
              </form>
            )}

            {paymentMode === "upi" && (
              <form className="payment-form" onSubmit={handlePayment}>
                <input type="text" placeholder="Enter UPI ID" required pattern="^[\w.-]+@[\w]+$" title="Format: example@bank" />

                {/* Aadhar number input */}
                <input
                  type="text"
                  placeholder="Aadhar Number"
                  required
                  pattern="\d{12}"
                  inputMode="numeric"
                  maxLength="12"
                  title="Enter 12-digit Aadhar number"
                />

                <button type="submit" className="confirm-btn">Confirm UPI Payment</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Modal on success */}
      {showSuccess && (
        <div className="success-modal">
          <div className="success-content">
            <h3>✅ Payment Successful!</h3>
            <p>Your car has been booked successfully.</p>
            <button onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
