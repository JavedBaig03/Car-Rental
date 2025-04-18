import React, { useState } from "react";
import "./Login.css";

const Login = ({ onClose, onSignupClick, onLoginSuccess }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onLoginSuccess();   // ✅ notify parent (Header)
      onClose();          // ✅ close modal
    }, 1500);
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="login-header">
          <h2 className="login-title">Login to Your Account</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        <div className="login-body">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="••••••••" required />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="login-button">Login</button>
            {showSuccess && <p className="success-msg">Login Successful ✅</p>}
          </form>

          <div className="login-footer">
            <a href="#" className="forgot-password">Forgot Password?</a>
            <p className="signup-link">
              Don’t have an account?{" "}
              <span
                onClick={onSignupClick}
                style={{ color: "#0056d2", cursor: "pointer", fontWeight: "bold" }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;