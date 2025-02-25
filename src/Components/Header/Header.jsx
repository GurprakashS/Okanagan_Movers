import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../Components/Header/Header.css";

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const navItems = [
    { title: "Home", path: "/home" },
    {
      title: "Solutions",
      path: "/services",
      subItems: [
        { title: "Web Design", path: "/solutions/web-design" },
        { title: "Web Development", path: "/solutions/web-development" },
        { title: "Home Movers", path: "/solutions/home-movers" },
        { title: "GSK Threads", path: "/solutions/threads" },
      ],
    },
    {
      title: "Contact",
      path: "/contact",
      subItems: [{ title: "Get in touch", path: "/contact" }],
    },
    { title: "What's new", path: "/trending" },
  ];

  return (
    <header className="container-fluid p-3 bg-white shadow-sm sticky-top">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0.3, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-0"
        >
          GSK Design
        </motion.h1>

        {/* Navigation Links */}
        <nav className="d-flex align-items-center bg-white gap-5">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="position-relative mx-2"
              onMouseEnter={() => setHoveredLink(item.title)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link className="nav-link fw-medium" to={item.path}>
                {item.title}
              </Link>
              <AnimatePresence>
                {hoveredLink === item.title && item.subItems && (
                  <motion.ul
                    className="dropdown-menu p-2 shadow"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          className="dropdown-item text-dark"
                          to={subItem.path}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Login Link */}
        <Link className="btn btn-outline-primary ms-3" to="/auth/login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
