import React from "react";

const Cars = () => {
  const sedanCars = [
    { id: 1, image: "sedan1.jpeg", name: "Sedan A", price: "$50/day", capacity: "4 persons" },
    { id: 2, image: "sedan2.jpeg", name: "Sedan B", price: "$55/day", capacity: "4 persons" },
    { id: 3, image: "sedan3.jpeg", name: "Sedan C", price: "$60/day", capacity: "5 persons" },
    { id: 4, image: "sedan4.jpeg", name: "Sedan D", price: "$50/day", capacity: "4 persons" },
    { id: 5, image: "sedan5.jpeg", name: "Sedan E", price: "$55/day", capacity: "4 persons" },
    { id: 6, image: "sedan6.jpeg", name: "Sedan F", price: "$60/day", capacity: "5 persons" },
  ];

  const suvCars = [
    { id: 1, image: "SUV1.jpg", name: "SUV A", price: "$80/day", capacity: "7 persons" },
    { id: 2, image: "SUV2.jpg", name: "SUV B", price: "$90/day", capacity: "7 persons" },
    { id: 3, image: "SUV3.jpg", name: "SUV C", price: "$100/day", capacity: "6 persons" },
    { id: 4, image: "SUV4.jpg", name: "SUV D", price: "$80/day", capacity: "7 persons" },
    { id: 5, image: "SUV5.jpg", name: "SUV E", price: "$90/day", capacity: "7 persons" },
    { id: 6, image: "SUV6.jpg", name: "SUV F", price: "$100/day", capacity: "6 persons" },
  ];

  const premiumCars = [
    { id: 1, image: "p1.jpg", name: "Range Rover", price: "$120/day", capacity: "2 persons" },
    { id: 2, image: "p2.jpg", name: "Toyota", price: "$150/day", capacity: "4 persons" },
    { id: 3, image: "p3.jpg", name: "BMW", price: "$200/day", capacity: "6 persons" },
    { id: 4, image: "p4.jpg", name: "Audi", price: "$250/day", capacity: "2 persons" },
    { id: 5, image: "p5.jpg", name: "Stretch Limousine", price: "$300/day", capacity: "10 persons" },
    { id: 6, image: "p6.jpg", name: "Rolls Royce", price: "$400/day", capacity: "4 persons" },
  ];

  const sportsCars = [
    { id: 1, image: "sports1.jpeg", name: "Porsche", price: "$200/day", capacity: "2 persons" },
    { id: 2, image: "sports5.jpeg", name: "Ferrari", price: "$220/day", capacity: "2 persons" },
    { id: 3, image: "sports3.jpeg", name: "Lamborghini", price: "$240/day", capacity: "2 persons" },
    { id: 4, image: "sports6.jpeg", name: "Mini Cooper", price: "$260/day", capacity: "2 persons" },
    { id: 5, image: "sports4.jpeg", name: "Buggati", price: "$280/day", capacity: "2 persons" },
    { id: 6, image: "sports2.jpeg", name: "Aston Martin", price: "$300/day", capacity: "2 persons" },
  ];

  const formulaOneCars = [
    { id: 1, image: "f1-1.jpg", name: "F1 Car A", price: "$500/day", capacity: "1 person" },
    { id: 2, image: "f1-2.jpg", name: "F1 Car B", price: "$550/day", capacity: "1 person" },
    { id: 3, image: "f1-3.jpg", name: "F1 Car C", price: "$600/day", capacity: "1 person" },
    { id: 4, image: "f1-4.jpg", name: "F1 Car D", price: "$650/day", capacity: "1 person" },
    { id: 5, image: "f1-5.jpg", name: "F1 Car E", price: "$700/day", capacity: "1 person" },
    { id: 6, image: "f1-6.jpg", name: "F1 Car F", price: "$750/day", capacity: "1 person" },
  ];

  const electricCars = [
    { id: 1, image: "electric1.jpg", name: "Electric A", price: "$100/day", capacity: "5 persons" },
    { id: 2, image: "electric2.jpg", name: "Electric B", price: "$110/day", capacity: "5 persons" },
    { id: 3, image: "electric3.jpg", name: "Electric C", price: "$120/day", capacity: "5 persons" },
    { id: 4, image: "electric4.jpg", name: "Electric D", price: "$130/day", capacity: "5 persons" },
    { id: 5, image: "electric5.jpg", name: "Electric E", price: "$140/day", capacity: "5 persons" },
    { id: 6, image: "electric6.jpg", name: "Electric F", price: "$150/day", capacity: "5 persons" },
  ];

  const renderCarSection = (title, cars) => (
    <div className="car-section">
      <h3>{title}</h3>
      <div className="cars scrollable">
        {cars.map((car) => (
          <div className="car" key={car.id}>
            <img src={car.image} alt={car.name} />
            <h4>{car.name}</h4>
            <p>Price: {car.price}</p>
            <p>Capacity: {car.capacity}</p>
            <button>Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="cars">
      <h2>Find Your Car</h2>
      {renderCarSection("Premium Cars", premiumCars)}
      {renderCarSection("Sports Cars", sportsCars)}
      {renderCarSection("Formula One Cars", formulaOneCars)}
      {renderCarSection("Electric Cars", electricCars)}
      {renderCarSection("Sedans", sedanCars)}
      {renderCarSection("SUVs", suvCars)}
    </section>
  );
};

export default Cars;