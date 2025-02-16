// src/Components/Header.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../Components/Header/Header.css";

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 2 },
    exit: { opacity: 0, y: -10 },
  };

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Solutions",
      path: "/services",
      subItems: [
        { title: "Web Design", path: "/solutions/web-design" },
        { title: "Web Development", path: "/solutions/web-development" },
        { title: "Home Movers", path: "/solutions/home-movers" },
        { title: "GSK Threads", path: "/solutions/clothing" },
      ],
    },
    {
      title: "Contact",
      path: "/contact",
      subItems: [{ title: "Get in touch", path: "/contact" }],
    },
    {
      title: "What's new",
      path: "/trending",
    },
  ];

  return (
    <header className="container-fluid p-3 pt-0">
      <div className="d-flex justify-content-between align-items-center">
        <h1>GSK Design</h1>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/auth/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <nav className="mt-3 d-flex justify-content-center">
        {navItems.map((item) => (
          <div
            key={item.title}
            className="position-relative mx-3"
            onMouseEnter={() => setHoveredLink(item.title)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link className="nav-link" to={item.path}>
              {item.title}
            </Link>
            <AnimatePresence>
              {hoveredLink === item.title && item.subItems && (
                <motion.ul
                  className="dropdown-menu show"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.title}>
                      <Link className="dropdown-item" to={subItem.path}>
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
    </header>
  );
};

export default Header;
