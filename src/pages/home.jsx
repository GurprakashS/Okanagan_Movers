// src/Pages/home.jsx
import ScrollingRow from "../Components/ScrollingEffect/scrolling";

const Home = () => {
  return (
    <>
      <div className="home"></div>
      <section className="hero">
        <h1>Transforming Ideas into Reality with Expert Services</h1>
        <p>
          We provide cutting-edge solutions in [Your Service Areas] to help
          businesses grow.
        </p>
        <button>Get Started</button>
        <button>Contact Us</button>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <img src="web-dev-icon.png" alt="Web Development" />
            <h3>Web Development</h3>
            <p>
              We build responsive and user-friendly websites tailored to your
              needs.
            </p>
            <button>Learn More</button>
          </div>
          {/* Repeat for other services */}
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="advantages">
          <div>
            <img src="experienced-team-icon.png" alt="Experienced Team" />
            <p>Experienced Team</p>
          </div>
          {/* Repeat for other advantages */}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>&quot;Amazing service! Highly recommended.&quot;</p>
            <p>- John Doe</p>
          </div>
          {/* Repeat for other testimonials */}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Let’s build something amazing together.</p>
        <button>Contact Us</button>
        <button>View All Services</button>
      </section>

      <div>
        <ScrollingRow />
      </div>
    </>
  );
};

export default Home;
