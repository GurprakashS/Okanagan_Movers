// src/Pages/WebDesignService.js
import { Link } from "react-router-dom";
import FreeConsultationForm from "../../Components/FreeConsultation/freeConsultationForm";

const WebDesignService = () => {
  return (
    <div className="web-design-service">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-light">
        <h1>Transform Your Online Presence with Stunning Web Design</h1>
        <p className="lead">
          From custom websites to redesigns and ongoing support, we&apos;ve got
          you covered.
        </p>
        <div className="mt-4">
          <Link to="/free-consultation" className="btn btn-primary btn-lg mx-2">
            Get a Free Consultation
          </Link>
          <Link to="/portfolio" className="btn btn-outline-primary btn-lg mx-2">
            View Our Portfolio
          </Link>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h2>New Website Design</h2>
            <p>
              We create beautiful, functional websites tailored to your brand.
            </p>
            <Link to="/new-website" className="btn btn-secondary">
              Start Your Project
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h2>Website Redesign</h2>
            <p>
              Revamp your existing site with modern design and improved
              performance.
            </p>
            <Link to="/redesign" className="btn btn-secondary">
              Redesign My Site
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h2>Ongoing Design Support</h2>
            <p>
              Get monthly updates, maintenance, and expert support for your
              website.
            </p>
            <Link to="/support" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Portfolio</h2>
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
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">
                    A modern website for a local bakery.
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat for other projects */}
          </div>
        </div>
      </section>

      {/* Free Consultation Form */}
      <div className="container my-5">
        <FreeConsultationForm />
      </div>
    </div>
  );
};

export default WebDesignService;
