import React, { useState, useEffect } from "react";
import "../Css/Header.css";
import ProfileImg from "../Image/pro2.png";
import img1 from "../Image/img3.png";
import img2 from "../Image/img7.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  SiCodechef,
} from "react-icons/fa";
// import { SiCodechef } from "react-icons/si";
const Header = () => {
  return (
    <div>
      <header className="header__detail">
        <section className="sec1__detail">
          <div>
            <h1>
              Hi, I'm <span className="span__name"> Aman V </span>
            </h1>
            <h4>Full Stack Developer</h4>
            <p>
              Empowering Experiences through Exceptional Design, Dynamic
              Development, and Thriving Competition: Unleashing Innovation and
              Driving Technological Advancement with Passion and Precision.
            </p>
            <button className="button__hire">Hire Me!</button>
            <a href="https://drive.google.com/file/d/13yXkxnAbI0QXWaahJERmdgYCXhcLr3Hf/view?usp=sharing">
              {" "}
              <button className="button__hire"> Download Resume</button>
            </a>
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
        </section>
        <section className="section2__img">
          <div className="imgdata">
            <div className="imgbox">
              <img src={ProfileImg} alt="" width="350" height="560" />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
