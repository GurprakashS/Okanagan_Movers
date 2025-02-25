import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/home.jsx";
import Services from "../pages/services.jsx";
import Contact from "../pages/contact.jsx";
import Booking from "../pages/booking.jsx";
import Login from "../Auth/login.jsx";
import SignUp from "../Auth/sign-up.jsx";
import WebDesignService from "../pages/Solutions/webDesignService.jsx";
import WebDevelopmentService from "../pages/Solutions/webDevelopmentService.jsx";
import HomeMovers from "../pages/Solutions/HomeMovers/homeMovers.jsx";
import NotFound from "../pages/notFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions/web-design" element={<WebDesignService />} />
      <Route
        path="/solutions/web-development"
        element={<WebDevelopmentService />}
      />
      <Route path="/solutions/Home-Movers" element={<HomeMovers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
