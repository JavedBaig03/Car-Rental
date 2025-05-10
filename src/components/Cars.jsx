import React, { useRef, useState } from "react";
import "./Cars.css";
import CarDetailModal from "./CarDetailModal";

const Cars = ({ searchData }) => {
  
  const [selectedCar, setSelectedCar] = useState(null);

  

  const premiumCars = [
    {
      id: 1,
      image: "p1.jpg",
      name: "Range Rover",
      price: "$1000/day",
      hourlyRate: "$100",
      dailyRate: "$340",
      capacity: "5 persons",
      location: "200-298 Clipper St, San Francisco, CA",
      power: "395 hp @ 5,500 rpm",
      speed: "225 km/h",
      acceleration: "6.5 sec 0–60",
      tag: "Premium",
      features: ["Automatic", "4WD", "Leather"]
    },
    {
      id: 2,
      image: "p2.jpg",
      name: "Toyota Fortuner",
      price: "$150/day",
      hourlyRate: "$90",
      dailyRate: "$360",
      capacity: "4 persons",
      location: "945 Bryant St, San Francisco, CA",
      power: "204 hp @ 3,400 rpm",
      speed: "180 km/h",
      acceleration: "9.8 sec 0–60",
      tag: "Premium",
      features: ["Automatic", "4WD", "Leather"]
    },
    {
      id: 3,
      image: "p3.jpg",
      name: "BMW 5 Series",
      price: "$200/day",
      hourlyRate: "$100",
      dailyRate: "$420",
      capacity: "5 persons",
      location: "Mission St, San Francisco, CA",
      power: "335 hp @ 5,500 rpm",
      speed: "250 km/h",
      acceleration: "5.2 sec 0–60",
      tag: "Premium",
      features: ["Automatic", "Leather", "GPS"]
    },
    {
      id: 4,
      image: "p4.jpg",
      name: "Audi A6",
      price: "$250/day",
      hourlyRate: "$110",
      dailyRate: "$450",
      capacity: "2 persons",
      location: "Folsom St, San Francisco, CA",
      power: "261 hp @ 6,000 rpm",
      speed: "240 km/h",
      acceleration: "6.1 sec 0–60",
      tag: "Premium",
      features: ["Automatic", "Leather", "GPS"]
    },
    {
      id: 5,
      image: "p5.jpg",
      name: "Stretch Limousine",
      price: "$300/day",
      hourlyRate: "$150",
      dailyRate: "$500",
      capacity: "10 persons",
      location: "Downtown, San Francisco, CA",
      power: "375 hp @ 5,200 rpm",
      speed: "180 km/h",
      acceleration: "10.2 sec 0–60",
      tag: "VIP",
      features: ["Chauffeur", "Mini Bar", "Luxury"]
    },
    {
      id: 6,
      image: "p6.jpg",
      name: "Rolls Royce Ghost",
      price: "$400/day",
      hourlyRate: "$200",
      dailyRate: "$650",
      capacity: "4 persons",
      location: "Pacific Heights, San Francisco, CA",
      power: "563 hp @ 5,250 rpm",
      speed: "250 km/h",
      acceleration: "4.8 sec 0–60",
      tag: "VIP",
      features: ["Automatic", "Leather", "Premium Sound"]
    }
  ];

  const sportsCars = [
    {
      id: 1,
      image: "sports1.jpeg",
      name: "Porsche 911",
      price: "$200/day",
      hourlyRate: "$120",
      dailyRate: "$400",
      capacity: "2 persons",
      location: "415 Market St, San Francisco, CA",
      power: "379 hp @ 6,500 rpm",
      speed: "293 km/h",
      acceleration: "4.0 sec 0–60",
      tag: "Sports",
      features: ["Manual", "Turbo"]
    },
    {
      id: 2,
      image: "sports5.jpeg",
      name: "Ferrari F8",
      price: "$220/day",
      hourlyRate: "$130",
      dailyRate: "$450",
      capacity: "2 persons",
      location: "Pier 39, San Francisco, CA",
      power: "710 hp @ 8,000 rpm",
      speed: "340 km/h",
      acceleration: "2.9 sec 0–60",
      tag: "Sports",
      features: ["Manual", "Turbo"]
    },
    {
      id: 3,
      image: "sports3.jpeg",
      name: "Lamborghini Huracán",
      price: "$240/day",
      hourlyRate: "$140",
      dailyRate: "$480",
      capacity: "2 persons",
      location: "Union Square, San Francisco, CA",
      power: "631 hp @ 8,000 rpm",
      speed: "325 km/h",
      acceleration: "2.8 sec 0–60",
      tag: "Sports",
      features: ["Automatic", "Turbo"]
    },
    {
      id: 4,
      image: "sports6.jpeg",
      name: "Mini Cooper S",
      price: "$260/day",
      hourlyRate: "$100",
      dailyRate: "$390",
      capacity: "2 persons",
      location: "Castro St, San Francisco, CA",
      power: "189 hp @ 5,000 rpm",
      speed: "225 km/h",
      acceleration: "6.4 sec 0–60",
      tag: "Sports",
      features: ["Manual", "Turbo"]
    },
    {
      id: 5,
      image: "sports4.jpeg",
      name: "Bugatti Veyron",
      price: "$280/day",
      hourlyRate: "$180",
      dailyRate: "$700",
      capacity: "2 persons",
      location: "Presidio Blvd, San Francisco, CA",
      power: "1,001 hp @ 6,000 rpm",
      speed: "407 km/h",
      acceleration: "2.5 sec 0–60",
      tag: "Sports",
      features: ["Automatic", "Turbo"]
    },
    {
      id: 6,
      image: "sports2.jpeg",
      name: "Aston Martin Vantage",
      price: "$300/day",
      hourlyRate: "$160",
      dailyRate: "$520",
      capacity: "2 persons",
      location: "Embarcadero, San Francisco, CA",
      power: "503 hp @ 6,000 rpm",
      speed: "314 km/h",
      acceleration: "3.5 sec 0–60",
      tag: "Sports",
      features: ["Manual", "Turbo"]
    }
  ];

  const electricCars = [
    {
      id: 1,
      image: "electric1.jpg",
      name: "Tesla Model 3",
      price: "$100/day",
      hourlyRate: "$65",
      dailyRate: "$300",
      capacity: "5 persons",
      location: "1 Tesla Rd, Fremont, CA",
      power: "283 hp",
      speed: "225 km/h",
      acceleration: "5.3 sec 0–60",
      tag: "Eco",
      features: ["Electric", "Automatic"]
    },
    {
      id: 2,
      image: "electric2.jpg",
      name: "Nissan Leaf",
      price: "$110/day",
      hourlyRate: "$60",
      dailyRate: "$280",
      capacity: "5 persons",
      location: "399 Fremont St, San Francisco, CA",
      power: "147 hp",
      speed: "144 km/h",
      acceleration: "7.9 sec 0–60",
      tag: "Eco",
      features: ["Electric", "Automatic"]
    },
    {
      id: 3,
      image: "electric3.jpg",
      name: "Chevy Bolt EV",
      price: "$120/day",
      hourlyRate: "$70",
      dailyRate: "$320",
      capacity: "5 persons",
      location: "Van Ness Ave, San Francisco, CA",
      power: "200 hp",
      speed: "150 km/h",
      acceleration: "6.5 sec 0–60",
      tag: "Eco",
      features: ["Electric", "Automatic"]
    },
    {
      id: 4,
      image: "electric4.jpg",
      name: "Hyundai Ioniq 5",
      price: "$130/day",
      hourlyRate: "$75",
      dailyRate: "$340",
      capacity: "5 persons",
      location: "16th St, San Francisco, CA",
      power: "320 hp",
      speed: "185 km/h",
      acceleration: "5.1 sec 0–60",
      tag: "Eco",
      features: ["Electric", "Automatic"]
    },
    {
      id: 5,
      image: "electric5.jpg",
      name: "Kia EV6",
      price: "$140/day",
      hourlyRate: "$80",
      dailyRate: "$360",
      capacity: "5 persons",
      location: "Battery St, San Francisco, CA",
      power: "225 hp",
      speed: "190 km/h",
      acceleration: "6.2 sec 0–60",
      tag: "Eco",
      features: ["Electric", "Automatic"]
    },
    {
      id: 6,
      image: "electric6.jpg",
      name: "BMW i4",
      price: "$150/day",
      hourlyRate: "$85",
      dailyRate: "$390",
      capacity: "5 persons",
      location: "Bush St, San Francisco, CA",
      power: "335 hp",
      speed: "225 km/h",
      acceleration: "5.5 sec 0–60",
      tag: "Eco",
      features: ["Electric", "Automatic"]
    }
  ];
  const sedanCars = [
    {
      id: 1,
      image: "sedan1.jpeg",
      name: "Toyota Camry",
      price: "$50/day",
      hourlyRate: "$30",
      dailyRate: "$140",
      capacity: "4 persons",
      location: "Howard St, San Francisco, CA",
      power: "203 hp",
      speed: "210 km/h",
      acceleration: "7.6 sec 0–60",
      tag: "Sedan",
      features: ["Automatic", "A/C"]
    },
    {
      id: 2,
      image: "sedan2.jpeg",
      name: "Honda Accord",
      price: "$55/day",
      hourlyRate: "$35",
      dailyRate: "$160",
      capacity: "4 persons",
      location: "Pine St, San Francisco, CA",
      power: "192 hp",
      speed: "195 km/h",
      acceleration: "7.2 sec 0–60",
      tag: "Sedan",
      features: ["Automatic", "A/C"]
    },
    {
      id: 3,
      image: "sedan3.jpeg",
      name: "Hyundai Elantra",
      price: "$60/day",
      hourlyRate: "$38",
      dailyRate: "$170",
      capacity: "5 persons",
      location: "Polk St, San Francisco, CA",
      power: "147 hp",
      speed: "195 km/h",
      acceleration: "8.1 sec 0–60",
      tag: "Sedan",
      features: ["Automatic", "A/C"]
    },
    {
      id: 4,
      image: "sedan4.jpeg",
      name: "Nissan Altima",
      price: "$50/day",
      hourlyRate: "$32",
      dailyRate: "$150",
      capacity: "4 persons",
      location: "Marina Blvd, San Francisco, CA",
      power: "188 hp",
      speed: "200 km/h",
      acceleration: "7.5 sec 0–60",
      tag: "Sedan",
      features: ["Automatic", "A/C"]
    },
    {
      id: 5,
      image: "sedan5.jpeg",
      name: "Mazda 6",
      price: "$55/day",
      hourlyRate: "$34",
      dailyRate: "$155",
      capacity: "4 persons",
      location: "Geary Blvd, San Francisco, CA",
      power: "187 hp",
      speed: "205 km/h",
      acceleration: "7.4 sec 0–60",
      tag: "Sedan",
      features: ["Automatic", "A/C"]
    },
    {
      id: 6,
      image: "sedan6.jpeg",
      name: "Kia K5",
      price: "$60/day",
      hourlyRate: "$40",
      dailyRate: "$180",
      capacity: "5 persons",
      location: "Haight St, San Francisco, CA",
      power: "180 hp",
      speed: "210 km/h",
      acceleration: "7.0 sec 0–60",
      tag: "Sedan",
      features: ["Automatic", "A/C"]
    }
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
    <div className="car-category" key={title}>
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
              <button className="rent-button" onClick={() => setSelectedCar(car)}>Rent Now</button>
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
      {renderCarSection("Electric Cars", electricCars, "electric")}
      {renderCarSection("Sedans", sedanCars, "sedan")}
      

      {selectedCar && (
  <CarDetailModal
    car={selectedCar}
    onClose={() => setSelectedCar(null)}
    tripData={searchData} 
  />
  
)}

    </section>
  );
};

export default Cars;