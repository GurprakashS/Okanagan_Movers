// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import Home from "./Pages/home.jsx";
import Services from "./Pages/services.jsx";
import Contact from "./Pages/contact.jsx";
import Booking from "./Pages/booking.jsx";
import Login from "./Auth/login.jsx";
import SignUp from "./Auth/sign-up.jsx";
import WebDesignService from "./Pages/Solutions/webDesignService.jsx";
import WebDevelopmentService from "./Pages/Solutions/webDevelopmentService.jsx";
import HomeMovers from "./Pages/Solutions/homeMovers.jsx";
import GSKThreads from "./Pages/Solutions/clothing.jsx";
import Trending from "./Pages/trending.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />

        <Route path="/services" element={<Services />} />
        <Route path="/solutions/web-design" element={<WebDesignService />} />
        <Route
          path="/solutions/web-development"
          element={<WebDevelopmentService />}
        />
        <Route path="/solutions/Home-Movers" element={<HomeMovers />} />
        <Route path="/solutions/clothing" element={<GSKThreads />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
