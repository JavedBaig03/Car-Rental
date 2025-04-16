import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import "./Header.css";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <img className="logo" src="redbullonlybull.png" alt="Red Bull" />
          <h1 className="brand-name">RedBull Rentals</h1>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a className="nav-link" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a className="nav-link" href="#cars" onClick={() => setIsMenuOpen(false)}>Find Your Car</a>
          <a className="nav-link" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a className="nav-link" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <button 
            className="login-button" 
            onClick={() => {
              setShowLogin(true);
              setIsMenuOpen(false);
            }}
          >
            Login
          </button>
        </nav>
      </header>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
