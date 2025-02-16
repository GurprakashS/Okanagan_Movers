// src/Pages/Services/MoveMate/move-mate.jsx
import { Link } from "react-router-dom";
import FreeConsultationForm from "../../Components/FreeConsultation/freeConsultationForm";

const HomeMovers = () => {
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

      {/* Free Consultation Form */}
      <FreeConsultationForm />
    </div>
  );
};

export default HomeMovers;
