// src/Pages/WhatsNew/WhatsNew.jsx
import { Link } from "react-router-dom";

const Trending = () => {
  // Sample data for news/updates
  const updates = [
    {
      id: 1,
      title: "New Web Design Service Launched!",
      description:
        "We’re excited to announce our new web design service, tailored to help businesses create stunning websites.",
      date: "October 10, 2023",
      link: "/solutions/web-design",
    },
    {
      id: 2,
      title: "Introducing GSK Threads: Our Clothing Line",
      description:
        "Discover our latest clothing collection, GSK Threads, now available at retail prices.",
      date: "October 5, 2023",
      link: "/solutions/clothing",
    },
    {
      id: 3,
      title: "Enhanced Moving & Packing Services",
      description:
        "We’ve upgraded our moving and packing services to make your relocation even smoother.",
      date: "September 28, 2023",
      link: "/solutions/home-movers",
    },
  ];

  return (
    <div className="whats-new">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-light">
        <h1>What&apos;s New at GSK</h1>
        <p className="lead">
          Stay updated with the latest news, features, and announcements from
          GSK.
        </p>
      </section>

      {/* News/Updates Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Latest Updates</h2>
        <div className="row">
          {updates.map((update) => (
            <div key={update.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">{update.title}</h3>
                  <p className="card-text">{update.description}</p>
                  <p className="text-muted">{update.date}</p>
                  <Link to={update.link} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-light py-5 text-center">
        <h2>Have Questions?</h2>
        <p className="lead">
          Reach out to us for more information about our services.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Trending;
