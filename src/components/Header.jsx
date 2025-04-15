import React, { useState } from "react";
import Login from "./Login.jsx";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header>
        <h1>
          <img className="logo" src="redbullonlybull.png" alt="Red Bull" />
          RedBull Rentals
        </h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#cars">Find Your Car</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setShowLogin(true)}>Login</button>
        </nav>
      </header>
      {showLogin && <Login />}
    </>
  );
};

export default Header;
