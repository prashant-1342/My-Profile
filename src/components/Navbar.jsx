import React, { useEffect, useRef } from 'react';
import Page1 from './Page1'; // Verify these paths match your project structure
import Page2 from './Page2';
import Page3 from './Page3';
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = ({ showcontact, setshowcontact }) => {
  const navbarRef = useRef(null);
  const collapseRef = useRef(null);

  // Function to collapse
  const closeNavbar = () => {
    if (collapseRef.current) {
      collapseRef.current.classList.remove("show");
    }
  };

  // Handle clicks outside navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-lg navbar-dark  fixed-top"
    >
      <div className="container-fluid">
        {/* Brand / Profile */}
        <Link
          to="page1"
          smooth={true}
          offset={-70}
          duration={500}
          spy={true}
          className="navbar-brand"
          onClick={closeNavbar}
        >
          Profile
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarScroll"
          ref={collapseRef}
        >
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link
                to="page2"
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                className="nav-link"
                onClick={closeNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="page3"
                smooth={true}
                offset={-70}
                duration={500}
                spy={true}
                className="nav-link"
                onClick={closeNavbar}
              >
                About Me
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <button
            className="btn btn-outline-light"
            onClick={() => {
              setshowcontact(!showcontact);
              closeNavbar();
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
