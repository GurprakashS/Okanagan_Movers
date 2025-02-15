// src/pages/Services.js
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Residential Moving",
      description: "We handle your home move with care.",
    },
    {
      title: "Commercial Moving",
      description: "Efficient office relocation services.",
    },
    {
      title: "Packing Services",
      description: "Professional packing for all your items.",
    },
    {
      title: "Storage Solutions",
      description: "Secure storage options available.",
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
