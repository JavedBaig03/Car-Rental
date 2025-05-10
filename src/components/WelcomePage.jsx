import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || localStorage.getItem("role") || "User";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome {role}! 🎉</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default WelcomePage;
