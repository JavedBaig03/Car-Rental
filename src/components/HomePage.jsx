import React, { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Cars from "./Cars";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const HomePage = () => {
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <>
      <Header />
      <SearchBar setSearchData={setSearchData} />
      <Hero />
      <main>
        <Services />
        <Cars searchData={searchData} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
