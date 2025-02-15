import { div } from "framer-motion/client";
import React from "react";

const services = [
  {
    id: 1,
    name: "Movers and Packers",
    description: "We move your stuff safely.",
  },
  {
    id: 2,
    name: "Handyman Services",
    description: "Fix anything in your home.",
  },
  {
    id: 3,
    name: "Software Development",
    description: "We build custom software.",
  },
];

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <div key={services.id} className="service-list">
            <h3>{service.name}</h3>
            <p> {service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
