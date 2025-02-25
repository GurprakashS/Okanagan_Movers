// src/Pages/Services/MoveMate/move-mate.js
// import React from "react";
import { Link } from "react-router-dom";
import FreeConsultationForm from "../../../Components/FreeConsultation/freeConsultationForm.jsx";
import Pricing from "../../../Components/Pricing/pricing.jsx";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import CommercialMovingInfo from "./MovingOptions/Commercial";
// import ResidentialMovingInfo from "./MovingOptions/Residential";
// import LongDistanceMovingInfo from "./MovingOptions/LongDistance.jsx";
// import SeniorMovingServicesInfo from "./MovingOptions/SeniorMoving.jsx";
// import PackingServicesInfo from "./MovingOptions/PackingService.jsx";

const HomeMovers = () => {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  const homeMoversTiers = [
    {
      title: "Residential",
      price: "89",
      description: [
        "Local moving services",
        "1 movers included",
        "Truck provided",
        "Basic insurance",
      ],
      buttonText: "Book Now",
      buttonVariant: "outlined",
      buttonColor: "primary",
    },
    {
      title: "Packing Service",
      subheader: "Most Popular",
      price: "59",
      description: [
        "Professional packing services",
        "High-quality packing materials",
        "Custom packing solutions",
        "Labeling for easy unpacking",
        "Special care for fragile items",
      ],
      buttonText: "Book Now",
      buttonVariant: "contained",
      buttonColor: "secondary",
    },
    {
      title: "Business",
      price: "119",
      description: [
        "Office relocation services",
        "Team of 3 movers included",
        "Large truck fleet",
        "Full insurance coverage",
        "Weekend scheduling available",
      ],
      buttonText: "Get a Quote",
      buttonVariant: "contained",
      buttonColor: "secondary",
    },
  ];

  return (
    <div className="move-mate">
      <section className="hero-section text-center py-5 bg-light">
        <h1>MoveMate: Your Reliable Moving Partner</h1>
        <p className="lead">
          We make moving simple, fast, and stress-free. Let us handle the heavy
          lifting!
        </p>
        <div className="mt-4">
          <Link to="/free-quote" className="btn btn-primary btn-lg mx-2">
            Get a Free Quote
          </Link>
          <Link to="/contact" className="btn btn-outline-primary btn-lg mx-2">
            Contact Us
          </Link>
        </div>
      </section>
      {/* <section>
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            flexWrap: "no-wrap",
            p: 5,
          }}
        > */}
      {/* <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--accent-color)",
              },
              "& .MuiTab-root": {
                color: "var(--primary-color)",
              },
              "& .Mui-selected": {
                color: "var(--primary-color)",
              },
              "& .MuiTab-root:hover": {
                color: "var(--accent-color)",
              },
            }}
          >
            <Tab label="Commercial Moving" sx={{ mx: 3 }} />
            <Tab label="Residential Moving" sx={{ mx: 3 }} />
            <Tab label="Long Distance Moving" sx={{ mx: 3 }} />
            <Tab label="Senior Moving Services" sx={{ mx: 3 }} />
            <Tab label="Packing Services" sx={{ mx: 3 }} />
          </Tabs>
        </Box>
      </section> */}
      {/* 
      <div className={`fade-in ${value !== null ? "show" : ""}`}>
        {value === 0 && <CommercialMovingInfo />}
        {value === 1 && <ResidentialMovingInfo />}
        {value === 2 && <LongDistanceMovingInfo />}
        {value === 3 && <SeniorMovingServicesInfo />}
        {value === 4 && <PackingServicesInfo />}
      </div> */}

      <section className="container my-5">
        <Pricing tiers={homeMoversTiers} page="moving" />
      </section>
      <FreeConsultationForm />
    </div>
  );
};

export default HomeMovers;
