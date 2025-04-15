import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cars from "./components/Cars";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Cars />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
