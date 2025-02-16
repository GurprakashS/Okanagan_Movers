// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
// import ServiceDetail from "./pages/serviceDetail.jsx";
import Contact from "./pages/contact.jsx";
import Booking from "./pages/booking.jsx";
import Login from "./Auth/login.jsx";
import SignUp from "./Auth/sign-up.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
