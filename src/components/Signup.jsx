import React, { useState } from "react";
import "./Signup.css";

const Signup = ({ onClose, onLoginClick }) => {
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ fullName, email, password }));
    alert("Signup successful!");
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <div className="signup-header">
          <h2 className="signup-title">Signup to Your Account</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Set Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">SIGNUP</button>
          <div className="signup-footer">
            <a href="#" className="forgot-password">Forgot Password?</a>
            <p className="signup-link">
              Already have an account?{" "}
              <span
                onClick={onLoginClick}
                style={{ color: "#0056d2", cursor: "pointer", fontWeight: "bold" }}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
