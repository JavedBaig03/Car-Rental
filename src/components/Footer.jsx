import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img className="footer-logo-img" src="redbullonlybull.png" alt="RedBull Rentals" />
          <span className="footer-logo-text">RedBull Rentals</span>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <a href="#services" className="footer-link">Services</a>
          <a href="#cars" className="footer-link">Find Your Car</a>
          <a href="#testimonials" className="footer-link">Testimonials</a>
          <a href="#contact" className="footer-link">Contact Us</a>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Car Categories</h3>
          <a href="#cars" className="footer-link">Premium Cars</a>
          <a href="#cars" className="footer-link">Sports Cars</a>
          <a href="#cars" className="footer-link">Formula One Cars</a>
          <a href="#cars" className="footer-link">Electric Cars</a>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="footer-contact-info">
            <span className="footer-contact-icon">📍</span>
            <p>123 Rental Street, Car City, CC 10001</p>
          </div>
          <div className="footer-contact-info">
            <span className="footer-contact-icon">📞</span>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="footer-contact-info">
            <span className="footer-contact-icon">✉️</span>
            <p>info@redbullrentals.com</p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">FB</a>
            <a href="#" className="social-link">TW</a>
            <a href="#" className="social-link">IG</a>
            <a href="#" className="social-link">YT</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RedBull Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;