import React from "react";
import "../Css/Footer.css"; // Import the CSS file for styling
import img1 from "../Image/img3.png";
import img2 from "../Image/img7.png";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  SiCodechef,
} from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer__link">
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/mobile-login-concept-illustration_5202813.htm#query=login%20green&position=6&from_view=search&track=ais">
                  Image by storyset on Freepik
                </a>{" "}
              </li>
            </ul>
            <div className="social-media-links">
              <aside className="aside__font">
                <a href="https://github.com/amanakhtar78">
                  {" "}
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/aman-akhtar-b1728b205/">
                  {" "}
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaInstagramSquare />
                </a>
                <a href="https://www.codechef.com/users/amanakhtar991">
                  {" "}
                  <img src={img1} alt="" width="27" height="30" />
                </a>
                <a href="https://leetcode.com/amanakhtar991/">
                  <img src={img2} alt="" width="30" height="30" />
                </a>
                {/* <SiCodechef /> */}
              </aside>
            </div>
            <h4 style={{ marginLeft: "10px" }}>
              Email: amanakhtar881@gmail.com
            </h4>
          </div>
        </div>
        <p className="para__footer">
          The content, graphics, design elements, and other materials on this
          website are protected by copyright laws and international treaties.
          Unauthorized use, reproduction, distribution, or modification of any
          part of this website, without the prior written consent of the author,
          is strictly prohibited.
        </p>
      </footer>
      <Link to="/education">education</Link>
      <p className="last__fotter__line">
        &copy; {currentYear} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
