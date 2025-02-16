// src/Pages/Services/GSKThreads/gsk-threads.jsx
import { Link } from "react-router-dom";

const GSKThreads = () => {
  return (
    <div className="gsk-threads">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-light">
        <h1>GSK Threads: Style Redefined</h1>
        <p className="lead">
          Discover premium clothing and accessories at retail prices. Shop the
          latest trends today!
        </p>
        <div className="mt-4">
          <Link to="/shop" className="btn btn-primary btn-lg mx-2">
            Shop Now
          </Link>
          <Link to="/contact" className="btn btn-outline-primary btn-lg mx-2">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <Link to="/shop/men" className="text-decoration-none">
              <img
                src="/images/men-category.jpg" // Replace with your image path
                alt="Men's Clothing"
                className="img-fluid rounded"
              />
              <h3 className="mt-3">Men</h3>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <Link to="/shop/women" className="text-decoration-none">
              <img
                src="/images/women-category.jpg" // Replace with your image path
                alt="Women's Clothing"
                className="img-fluid rounded"
              />
              <h3 className="mt-3">Women</h3>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <Link to="/shop/kids" className="text-decoration-none">
              <img
                src="/images/kids-category.jpg" // Replace with your image path
                alt="Kids' Clothing"
                className="img-fluid rounded"
              />
              <h3 className="mt-3">Kids</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {/* Add featured products here */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="/images/product1.jpg" // Replace with your image path
                  alt="Product 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Men&apos;s Casual Shirt</h5>
                  <p className="card-text">$49.99</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* Repeat for other products */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSKThreads;
