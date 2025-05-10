import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBooking.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate(); // ✅ For navigation

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div className="mybookings-container">
      <h2>📚 My Bookings</h2>

      {/* ✅ Home button */}
      <button
        className="home-btn"
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#ff6600",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        Go to Home Page
      </button>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="bookings-list">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <h3>{booking.car.name}</h3>
              <p><strong>Plan:</strong> {booking.selectedPlan}</p>
              <p><strong>Price:</strong> {booking.price}</p>
              <p>
                <strong>Pickup:</strong> {booking.tripDetails?.pickupLocation} -{" "}
                {booking.tripDetails?.pickupDate} at {booking.tripDetails?.pickupTime}
              </p>
              <p><strong>Duration:</strong> {booking.tripDetails?.duration}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;