import React from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="login-header">
          <h2 className="login-title">Login to Your Account</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        <div className="login-body">
          <form className="login-form">
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
          </form>
          <div className="login-footer">
            <a href="#" className="forgot-password">Forgot Password?</a>
            <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;