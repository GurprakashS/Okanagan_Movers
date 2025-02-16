// src/pages/Home.js
import React from "react";
import { motion } from "framer-motion";

import TestimonialsComponent from "./testimonials";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero"
      >
        <h1>Your Move, Made Simple</h1>
        <p>Reliable and Affordable Packing & Moving Services</p>
        <button className="cta-button">Get a Free Quote</button>
      </motion.div>

      <TestimonialsComponent />
    </div>
  );
};

export default Home;
