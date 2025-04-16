import React, { useState } from "react";
import CarDetailModal from "./CarDetailModal";

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      name: "Range Rover",
      image: "sedan1.jpeg",
      price: "$120/day",
      seats: 5,
      features: ["Automatic", "4WD", "Leather"]
    },
    // Add others similarly
  ];

  return (
    <>
      <div className="car-grid">
        {cars.map((car, idx) => (
          <div className="car-card" key={idx}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <button onClick={() => setSelectedCar(car)}>Rent Now</button>
          </div>
        ))}
      </div>

      {selectedCar && (
        <CarDetailModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </>
  );
};

export default CarList;