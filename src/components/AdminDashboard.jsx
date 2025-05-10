import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! You can manage users, cars, and view reports here.</p>

      <div className="admin-buttons">
        <button onClick={() => navigate("/admin-cars")}>🚗 Car Section</button>
        <button onClick={() => navigate("/admin-bookings")}>📖 Bookings Section</button>
        <button onClick={onLogout} style={{ backgroundColor: "crimson" }}>🚪 Logout</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
