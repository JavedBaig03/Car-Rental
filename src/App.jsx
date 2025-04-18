import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cars from "./components/Cars";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import PaymentPage from "./components/PaymentPage";
import './App.css';

const App = () => {
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <SearchBar setSearchData={setSearchData} />
              <Hero />
              <main>
                <Services />
                <Cars searchData={searchData} /> {/* ✅ Pass search data */}
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;