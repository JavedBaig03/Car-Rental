import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Premium Car Selection",
      description: "Choose from our extensive fleet of luxury, sports, and electric vehicles. All cars are maintained to the highest standards for your comfort and safety.",
      icon: "🚗"
    },
    {
      id: 2,
      title: "24/7 Customer Support",
      description: "Our dedicated team is available around the clock to assist with any inquiries or issues, ensuring a seamless rental experience.",
      icon: "🛎️"
    },
    {
      id: 3,
      title: "Comprehensive Insurance",
      description: "Drive with peace of mind knowing you're fully covered with our all-inclusive insurance packages tailored to your specific needs.",
      icon: "🛡️"
    },
    {
      id: 4,
      title: "Doorstep Delivery",
      description: "Skip the queues with our convenient delivery service. We'll bring your chosen vehicle directly to your location at no extra cost.",
      icon: "🚚"
    }
  ];

  return (
    <section id="services" className="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Experience the ultimate in car rental convenience with our premium services designed to make your journey exceptional
      </p>
      <div className="services-container">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
