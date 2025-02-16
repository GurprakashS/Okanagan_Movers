import React, { useState } from "react";

const Services = () => {
  // Step 1: Define initial services (hardcoded for now)
  const initialServices = [
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
  ];
  // State to manage the list of Services
  const [services, setServices] = useState(initialServices);

  //State for the form inputs
  const [newService, setNewService] = useState({ name: "", description: "" });

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const service = {
      id: services.length + 1,
      name: newService.name,
      description: newService.description,
    };

    setServices([...services, service]);

    setNewService({
      name: "",
      description: "",
    });
  };
  return (
    <div>
      <h1>All Services</h1>

      {/* Form to add a new service */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Name:</label>
          <input
            type="text"
            name="name"
            value={newService.name}
            onChange={handleInputChanges}
            required
          />
        </div>
        <div>
          <label>Service Description:</label>
          <textarea
            name="description"
            value={newService.description}
            onChange={handleInputChanges}
            required
          />
        </div>
        <button type="submit">Add Service</button>
      </form>

      {/* List of services */}
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
