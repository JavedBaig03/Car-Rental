import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PaymentPage from "./components/PaymentPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import AdminDashboard from "./components/AdminDashboard";
import AdminCars from "./components/AdminCars";
import AdminBookings from "./components/AdminBookings";
import "./App.css";

const App = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const handleLoginSuccess = (role) => {
    setUserRole(role);
    localStorage.setItem("role", role);
  };

  const handleLogout = () => {
    setUserRole("");
    localStorage.removeItem("role");
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/payment" element={<PaymentPage />} />

          {/* Admin Protected Routes */}
          <Route path="/admin-dashboard" element={userRole === "admin" ? <AdminDashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/admin-cars" element={userRole === "admin" ? <AdminCars /> : <Navigate to="/" />} />
          <Route path="/admin-bookings" element={userRole === "admin" ? <AdminBookings /> : <Navigate to="/" />} />

          {/* Default route */}
          <Route path="/" element={userRole === "admin" ? <Navigate to="/admin-dashboard" /> : <HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
