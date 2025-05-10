import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import PaymentPage from "./components/PaymentPage";
import AdminDashboard from "./components/AdminDashboard";
import AdminCars from "./components/AdminCars";
import AdminBookings from "./components/AdminBookings";
import MyBookings from "./components/MyBookings";
import Maintenance from "./components/Maintenance";
import "./App.css";

const App = () => {
  const [userRole, setUserRole] = useState("");

  // Load saved role on initial mount
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage userRole={userRole} />} />
          <Route path="/login" element={<Login onLoginSuccess={setUserRole} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/maintenance" element={<Maintenance />} />

          {/* Admin-Only Routes */}
          <Route
            path="/admin-dashboard"
            element={userRole === "admin" ? <AdminDashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/admin-cars"
            element={userRole === "admin" ? <AdminCars /> : <Navigate to="/" />}
          />
          <Route
            path="/admin-bookings"
            element={userRole === "admin" ? <AdminBookings /> : <Navigate to="/" />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;