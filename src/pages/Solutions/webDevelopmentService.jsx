// src/Pages/Solutions/WebDevelopmentService.js
import { Link } from "react-router-dom";
import FreeConsultationForm from "../../Components/FreeConsultation/freeConsultationForm";

const WebDevelopmentService = () => {
  return (
    <div className="web-development-service">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-light">
        <h1>Build Powerful, Scalable Web Applications</h1>
        <p className="lead">
          From custom web apps to e-commerce platforms, we deliver solutions
          that drive results.
        </p>
        <div className="mt-4">
          <Link to="/free-quote" className="btn btn-primary btn-lg mx-2">
            Get a Free Quote
          </Link>
          <Link to="/portfolio" className="btn btn-outline-primary btn-lg mx-2">
            View Our Projects
          </Link>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h2>Custom Web Development</h2>
            <p>
              We build tailored web applications to meet your unique business
              needs.
            </p>
            <Link to="/custom-development" className="btn btn-secondary">
              Start Your Project
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h2>E-Commerce Development</h2>
            <p>
              Create seamless online stores with secure payment gateways and
              product management.
            </p>
            <Link to="/ecommerce-development" className="btn btn-secondary">
              Build My Store
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h2>API & Backend Development</h2>
            <p>
              Develop robust APIs and backend systems for seamless integrations.
            </p>
            <Link to="/api-development" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Projects</h2>
          <div className="row">
            {/* Add portfolio items here */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="project1.jpg"
                  alt="Project 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">E-Commerce Platform</h5>
                  <p className="card-text">
                    A custom-built online store for a fashion brand.
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat for other projects */}
          </div>
        </div>
      </section>

      {/* Free Consultation Form */}
      <FreeConsultationForm />
    </div>
  );
};

export default WebDevelopmentService;
