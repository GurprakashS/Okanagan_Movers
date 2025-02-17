// src/Pages/Services/GSKThreads/gsk-threads.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "../../Models/productsModel";

const GSKThreads = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result,
          imageName: file.name,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.image) {
      addProducts({
        ...newProduct,
        id: products.length + 1,
        price: parseFloat(newProduct.price), // Ensure price is a number
      });
      setShowForm(false);
      setNewProduct({ id: "", name: "", price: "", image: "" });
    } else {
      console.error("Invalid product data:", newProduct);
    }
  };

  const addProducts = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

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
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center mt-4">
              <button
                onClick={() => setShowForm(true)}
                className="btn btn-secondary"
              >
                Add New Product
              </button>
            </div>
          </div>

          {/* Use the ProductModal component */}
          <ProductModal
            show={showForm}
            onClose={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
            product={newProduct}
            onInputChange={handleInputChange}
            onFileChange={handleFileChange}
          />
        </div>
      </section>
    </div>
  );
};

export default GSKThreads;
