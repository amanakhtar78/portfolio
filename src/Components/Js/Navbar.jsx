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
    <header className="nav__align" id="header">
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
              <a href="#header" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="hover-underline-animation">
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className=" hover-underline-animation">
              <a href="#project" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <Link to="/" onClick={toggleMenu}>
                <p
                  className="button__hire "
                  style={{ padding: "7px", margin: "0px" }}
                >
                  {" "}
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
