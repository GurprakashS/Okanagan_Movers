// src/Components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1> Packing & Moving Co. </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Service</Link>
        <Link to="/booking">Bookings</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
