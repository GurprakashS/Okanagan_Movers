// src/Pages/Services/MoveMate/move-mate.jsx
import { Link } from "react-router-dom";
import FreeConsultationForm from "../../Components/FreeConsultation/freeConsultationForm";
import Pricing from "../../Components/Pricing/pricing.jsx";

const HomeMovers = () => {
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
      {/* Hero Section */}
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

      {/* Service Offerings */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h2>Residential Moving</h2>
            <p>
              We handle all aspects of your home move, from packing to
              transportation.
            </p>
            <Link to="/residential-moving" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h2>Office Relocation</h2>
            <p>Efficient and minimal downtime for your business relocation.</p>
            <Link to="/office-moving" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h2>Packing Services</h2>
            <p>
              Professional packing using high-quality materials to protect your
              belongings.
            </p>
            <Link to="/packing-services" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">Our Pricing Plans</h2>
        <Pricing tiers={homeMoversTiers} page="moving" />
      </section>

      <FreeConsultationForm />
    </div>
  );
};

export default HomeMovers;
