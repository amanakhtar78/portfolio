import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { RxLetterSpacing } from "react-icons/rx";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav__align">
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <header className="logo__button">
          <div className="navbar-brand">
            <Link to="/">
              {" "}
              <RxLetterSpacing />
            </Link>
          </div>
          <div
            className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </header>
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-links ">
            <li className=" hover-underline-animation">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="hover-underline-animation">
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className=" hover-underline-animation">
              <Link to="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                <p className="span__contact "> Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
