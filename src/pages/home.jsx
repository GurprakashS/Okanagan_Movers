// src/Pages/home.jsx
import Testimonials from "../Components/Testimonials/testimonials";
import FAQs from "../Components/FAQs/faq";

import Img1 from "../assets/1.jpg";
import { useEffect, useRef } from "react";

const Home = () => {
  const services = [
    { title: "Web Development", icon: Img1 },
    { title: "Web Design", icon: Img1 },
    { title: "Software Development", icon: Img1 },
    { title: "Movers and Packers", icon: Img1 },
    { title: "Packing Services", icon: Img1 },
  ];

  // Ref to track the services section
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".service-item");
            items.forEach((item, index) => {
              item.classList.add("animate__animated", "animate__slideInLeft");
              item.style.animationDelay = `${index * 0.2}s`;
              item.style.transform = "translateX(0)";
              item.style.opacity = "1";
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    const currentRef = servicesRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div>
      <div className="home"></div>

      <section
        className="hero vh-100 d-flex align-items-center position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #6e8efb, #a777e3)",
        }}
      >
        {/* Overlay for Depth */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            background: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-7 col-lg-6 text-center text-md-start">
              <h1 className="display-3 fw-bold text-white mb-4 animate__animated animate__fadeInDown">
                Transforming Ideas into Reality with Expert Services
              </h1>
              <p className="lead text-light mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                We provide cutting-edge solutions in [Your Service Areas] to
                ignite business growth.
              </p>
              {/* Buttons with Hover Effect */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                <button className="btn btn-primary btn-lg shadow px-4 py-2 animate__animated animate__pulse animate__infinite">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg shadow px-4 py-2">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Unique Visual Element */}
            <div className="col-md-5 col-lg-6 d-none d-md-block text-center">
              <div
                className="rounded-circle bg-white bg-opacity-10 p-5 animate__animated animate__zoomIn"
                style={{ width: "300px", height: "300px", margin: "0 auto" }}
              >
                <span className="text-white fw-bold fs-2">
                  Innovate. Create. Succeed.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div style={{ position: "relative" }}>
        <section
          ref={servicesRef}
          className="services py-5 position-relative"
          style={{
            background: "#fcfaf9", // --background-color
            minHeight: "80vh",
            overflow: "hidden", // Prevent icon overflow
          }}
        >
          <div className="container">
            <h2
              className="fw-bold display-5 mb-5"
              style={{ color: "#000000" }} // --primary-color
            >
              Our Services
            </h2>
            <div className="row">
              {services.map((service, index) => {
                const side = index % 2 === 0 ? "left" : "right";
                const offsetY = Math.floor(index / 3) * 50;
                return (
                  <div
                    key={index}
                    className="service-item col-md-4 col-sm-6 mb-2"
                    style={{
                      transform:
                        side === "left"
                          ? "translateX(-100px)"
                          : "translateX(100px)",
                      opacity: 0,
                      transition:
                        "transform 0.6s ease-out, opacity 0.6s ease-out",
                      marginTop: `${offsetY}px`,
                    }}
                  >
                    <div
                      className="p-4 rounded-3 shadow-sm"
                      style={{
                        background: "transparent", // --background-color
                        border: "0.2px solid #2f2f2f", // --secondary-color
                        borderRadius: "8px", // --border-radius
                        transition: "transform 0.3s ease", // --transition-duration
                        transform:
                          "perspective(1000px) rotateY(0deg) rotateX(0deg)", // Initial state
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform =
                          "perspective(1000px) rotateY(10deg) rotateX(5deg)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform =
                          "perspective(1000px) rotateY(0deg) rotateX(0deg)")
                      }
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="img-fluid mb-3"
                        style={{ maxWidth: "60px" }}
                      />
                      <h3
                        className="fw-semibold fs-4"
                        style={{ color: "#000000" }} // --primary-color
                      >
                        {service.title}
                      </h3>
                      <button
                        className="btn btn-sm mt-3 px-3"
                        style={{
                          backgroundColor: "#48e5c2", // --accent-color
                          color: "#000000", // --primary-color
                          border: "none",
                          borderRadius: "8px", // --border-radius
                          transition:
                            "background-color 0.3s ease, color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#4a4a4a"; // Lighter gray
                          e.currentTarget.style.color = "#48e5c2";
                          e.currentTarget.style.transform =
                            "perspective(1000px) rotateY(-10deg) rotateX(10deg)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#48e5c2"; // --accent-color
                          e.currentTarget.style.color = "#000000"; // --primary-color
                          e.currentTarget.style.transform =
                            "perspective(1000px) rotateY(0deg) rotateX(0deg)";
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <section className="why-choose-us py-5" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <div className="row text-center">
            {[
              {
                imgSrc: "experienced-team-icon.png",
                title: "Experienced Team",
                description:
                  "Our team of experts brings years of experience to deliver quality services.",
              },
              {
                imgSrc: "quality-services-icon.png",
                title: "Quality Services",
                description:
                  "We prioritize quality in all our services, ensuring the best results.",
              },
              {
                imgSrc: "customer-support-icon.png",
                title: "24/7 Support",
                description:
                  "Our support team is available around the clock to assist you.",
              },
              {
                imgSrc: "cost-effective-icon.png",
                title: "Cost Effective",
                description:
                  "We offer competitive pricing without compromising on quality.",
              },
            ].map((advantage, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="p-4 shadow rounded bg-white d-flex flex-column align-items-center">
                  <img
                    src={advantage.imgSrc}
                    alt={advantage.title}
                    className="img-fluid mb-3"
                    style={{ width: "60px" }}
                  />
                  <h5 className="fw-bold">{advantage.title}</h5>
                  <p className="text-muted">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <Testimonials />
      </div>

      <div>
        <FAQs />
      </div>
    </div>
  );
};
export default Home;
