import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onClose, onSignupClick, onLoginSuccess }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulated backend check
    setTimeout(() => {
      setLoading(false);

      // Hardcoded admin check
      if (role === "admin" && email === "admin@admin.com" && password === "admin123") {
        localStorage.setItem("role", "admin");
        setShowSuccess(true);
        onLoginSuccess("admin");
        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 1000);
      }
      // Generic user login (only checks if email & password exist)
      else if (role === "user" && email && password) {
        localStorage.setItem("role", "user");
        setShowSuccess(true);
        onLoginSuccess("user");
        setTimeout(() => {
          navigate("/welcome", { state: { role: "user" } });
        }, 1000);
      }
      else {
        setError("Invalid login credentials.");
      }

      // Optional: reset fields after login attempt
      setEmail("");
      setPassword("");
    }, 800);
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="login-header">
          <h2 className="login-title">Login to Your Account</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="login-body">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-control"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {showSuccess && <p className="success-msg">Login Successful ✅ Redirecting...</p>}
            {error && <p className="error-msg">{error}</p>}
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