import React, { useState } from "react";
import "./navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>K</span>yc
            <span>H</span>ub
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/compare">Compare Products</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/kumari-pratibha/"
                target="_thapa">
                <FaLinkedin className="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;