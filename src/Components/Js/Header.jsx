import React from "react";
import "../Css/Header.css";
import ProfileImg from "../Image/pro2.png";
const Header = () => {
  return (
    <div>
      <header className="header__detail">
        <section className="sec1__detail">
          <div>
            <h1>
              Hi, I'm <span className="span__name"> Aman V </span>
            </h1>
            <h4>Web Designer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus exercitationem asperiores aliquam quaerat quia
              atque et eveniet autem omnis, quas laborum quod sed accusantium
              enim, facilis tempora delectus voluptatum libero.
            </p>
            <button className="button__hire">Hire Me!</button>
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
