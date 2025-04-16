import React, { useRef } from "react";
import "./Cars.css";

const Cars = () => {
  const sedanCars = [
    { id: 1, image: "sedan1.jpeg", name: "Sedan A", price: "$50/day", capacity: "4 persons", features: ["Automatic", "A/C"] },
    { id: 2, image: "sedan2.jpeg", name: "Sedan B", price: "$55/day", capacity: "4 persons", features: ["Automatic", "A/C"] },
    { id: 3, image: "sedan3.jpeg", name: "Sedan C", price: "$60/day", capacity: "5 persons", features: ["Automatic", "A/C"] },
    { id: 4, image: "sedan4.jpeg", name: "Sedan D", price: "$50/day", capacity: "4 persons", features: ["Automatic", "A/C"] },
    { id: 5, image: "sedan5.jpeg", name: "Sedan E", price: "$55/day", capacity: "4 persons", features: ["Automatic", "A/C"] },
    { id: 6, image: "sedan6.jpeg", name: "Sedan F", price: "$60/day", capacity: "5 persons", features: ["Automatic", "A/C"] },
  ];

  const suvCars = [
    { id: 1, image: "SUV1.jpg", name: "SUV A", price: "$80/day", capacity: "7 persons", features: ["Automatic", "4WD"] },
    { id: 2, image: "SUV2.jpg", name: "SUV B", price: "$90/day", capacity: "7 persons", features: ["Automatic", "4WD"] },
    { id: 3, image: "SUV3.jpg", name: "SUV C", price: "$100/day", capacity: "6 persons", features: ["Automatic", "4WD"] },
    { id: 4, image: "SUV4.jpg", name: "SUV D", price: "$80/day", capacity: "7 persons", features: ["Automatic", "4WD"] },
    { id: 5, image: "SUV5.jpg", name: "SUV E", price: "$90/day", capacity: "7 persons", features: ["Automatic", "4WD"] },
    { id: 6, image: "SUV6.jpg", name: "SUV F", price: "$100/day", capacity: "6 persons", features: ["Automatic", "4WD"] },
  ];

  const premiumCars = [
    { id: 1, image: "p1.jpg", name: "Range Rover", price: "$120/day", capacity: "5 persons", tag: "Premium", features: ["Automatic", "4WD", "Leather"] },
    { id: 2, image: "p2.jpg", name: "Toyota", price: "$150/day", capacity: "4 persons", tag: "Premium", features: ["Automatic", "4WD", "Leather"] },
    { id: 3, image: "p3.jpg", name: "BMW", price: "$200/day", capacity: "6 persons", tag: "Premium", features: ["Automatic", "Leather", "GPS"] },
    { id: 4, image: "p4.jpg", name: "Audi", price: "$250/day", capacity: "2 persons", tag: "Premium", features: ["Automatic", "Leather", "GPS"] },
    { id: 5, image: "p5.jpg", name: "Stretch Limousine", price: "$300/day", capacity: "10 persons", tag: "VIP", features: ["Chauffeur", "Luxury"] },
    { id: 6, image: "p6.jpg", name: "Rolls Royce", price: "$400/day", capacity: "4 persons", tag: "VIP", features: ["Automatic", "Leather", "Premium"] },
  ];

  const sportsCars = [
    { id: 1, image: "sports1.jpeg", name: "Porsche", price: "$200/day", capacity: "2 persons", tag: "Sports", features: ["Manual", "Turbo"] },
    { id: 2, image: "sports5.jpeg", name: "Ferrari", price: "$220/day", capacity: "2 persons", tag: "Sports", features: ["Manual", "Turbo"] },
    { id: 3, image: "sports3.jpeg", name: "Lamborghini", price: "$240/day", capacity: "2 persons", tag: "Sports", features: ["Automatic", "Turbo"] },
    { id: 4, image: "sports6.jpeg", name: "Mini Cooper", price: "$260/day", capacity: "2 persons", tag: "Sports", features: ["Manual", "Turbo"] },
    { id: 5, image: "sports4.jpeg", name: "Buggati", price: "$280/day", capacity: "2 persons", tag: "Sports", features: ["Automatic", "Turbo"] },
    { id: 6, image: "sports2.jpeg", name: "Aston Martin", price: "$300/day", capacity: "2 persons", tag: "Sports", features: ["Manual", "Turbo"] },
  ];

  const formulaOneCars = [
    { id: 1, image: "f1-1.jpg", name: "F1 Car A", price: "$500/day", capacity: "1 person", tag: "F1", features: ["Manual", "Racing"] },
    { id: 2, image: "f1-2.jpg", name: "F1 Car B", price: "$550/day", capacity: "1 person", tag: "F1", features: ["Manual", "Racing"] },
    { id: 3, image: "f1-3.jpg", name: "F1 Car C", price: "$600/day", capacity: "1 person", tag: "F1", features: ["Manual", "Racing"] },
    { id: 4, image: "f1-4.jpg", name: "F1 Car D", price: "$650/day", capacity: "1 person", tag: "F1", features: ["Manual", "Racing"] },
    { id: 5, image: "f1-5.jpg", name: "F1 Car E", price: "$700/day", capacity: "1 person", tag: "F1", features: ["Manual", "Racing"] },
    { id: 6, image: "f1-6.jpg", name: "F1 Car F", price: "$750/day", capacity: "1 person", tag: "F1", features: ["Manual", "Racing"] },
  ];

  const electricCars = [
    { id: 1, image: "electric1.jpg", name: "Electric A", price: "$100/day", capacity: "5 persons", tag: "Eco", features: ["Electric", "Automatic"] },
    { id: 2, image: "electric2.jpg", name: "Electric B", price: "$110/day", capacity: "5 persons", tag: "Eco", features: ["Electric", "Automatic"] },
    { id: 3, image: "electric3.jpg", name: "Electric C", price: "$120/day", capacity: "5 persons", tag: "Eco", features: ["Electric", "Automatic"] },
    { id: 4, image: "electric4.jpg", name: "Electric D", price: "$130/day", capacity: "5 persons", tag: "Eco", features: ["Electric", "Automatic"] },
    { id: 5, image: "electric5.jpg", name: "Electric E", price: "$140/day", capacity: "5 persons", tag: "Eco", features: ["Electric", "Automatic"] },
    { id: 6, image: "electric6.jpg", name: "Electric F", price: "$150/day", capacity: "5 persons", tag: "Eco", features: ["Electric", "Automatic"] },
  ];

  const scrollContainerRefs = {
    premium: useRef(null),
    sports: useRef(null),
    formula: useRef(null),
    electric: useRef(null),
    sedan: useRef(null),
    suv: useRef(null)
  };

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { current } = ref;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderCarSection = (title, cars, refKey) => (
    <div className="car-category">
      <div className="cars-controls">
        <div className="category-title-wrapper">
          <h3 className="category-title">{title}</h3>
        </div>
        <div className="arrows">
          <div className="arrow-btn" onClick={() => scroll(scrollContainerRefs[refKey], 'left')}>
            ←
          </div>
          <div className="arrow-btn" onClick={() => scroll(scrollContainerRefs[refKey], 'right')}>
            →
          </div>
        </div>
      </div>
      <div className="cars-container" ref={scrollContainerRefs[refKey]}>
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <div className="car-image-wrapper">
              <img className="car-image" src={car.image} alt={car.name} />
              {car.tag && <div className="car-tag">{car.tag}</div>}
            </div>
            <div className="car-details">
              <h4 className="car-name">{car.name}</h4>
              <div className="car-info">
                <p className="car-price">💰 {car.price}</p>
                <p className="car-capacity">👥 {car.capacity}</p>
              </div>
              {car.features && (
                <div className="car-features">
                  {car.features.map((feature, index) => (
                    <span key={index} className="feature">{feature}</span>
                  ))}
                </div>
              )}
              <button className="rent-button">Rent Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="cars" className="cars-section">
      <h2 className="cars-title">Explore Our Fleet</h2>
      <p className="cars-subtitle">
        Discover our wide selection of vehicles for any occasion, from luxury sedans to high-performance sports cars
      </p>
      {renderCarSection("Premium Cars", premiumCars, "premium")}
      {renderCarSection("Sports Cars", sportsCars, "sports")}
      {renderCarSection("Formula One Cars", formulaOneCars, "formula")}
      {renderCarSection("Electric Cars", electricCars, "electric")}
      {renderCarSection("Sedans", sedanCars, "sedan")}
      {renderCarSection("SUVs", suvCars, "suv")}
      <button className="show-all-btn">View All Cars</button>
    </section>
  );
};

export default Cars;