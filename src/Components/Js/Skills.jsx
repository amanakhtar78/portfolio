import React from "react";
import "../Css/Skill.css";
import { DiHtml5 } from "react-icons/di";
import { FaCss3, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiCplusplus,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
const Skills = () => {
  return (
    <div className="skill__top">
      {" "}
      <section className="for_skill">
        <article className="article1__skills">
          <h4 className="hover-underline-animation3">
            Crafting Excellence: Showcasing My Expertise
          </h4>
        </article>
        <article className="font__article ">
          <div>
            <DiHtml5 />

            <p>html</p>
          </div>
          <div>
            <FaCss3 />

            <p>css</p>
          </div>
          <div>
            <SiJavascript />

            <p>JavaScript</p>
          </div>
          <div>
            <FaReact />

            <p>React</p>
          </div>
          <div>
            <FaNodeJs />

            <p>NodeJs</p>
          </div>
          <div>
            <FaBootstrap />

            <p>Bootstrap</p>
          </div>
          <div>
            <SiExpress />

            <p>Express</p>
          </div>
          <div>
            <SiMongodb />

            <p>Mongodb</p>
          </div>
          <div>
            <SiMysql />

            <p>Mysql</p>
          </div>
          <div>
            <SiCplusplus />

            <p>SiCplusplus</p>
          </div>
        </article>
        {/* <h2>Skills</h2>
        <h3>Languages:</h3>
        <p>
          C++, Python, SQL, HTML, CSS, JavaScript
          <br />
          Intermediate: C, Java
        </p>

        <h3>Frameworks:</h3>
        <p>Bootstrap, React (learning)</p>

        <h3>Tools:</h3>
        <p>Git, VScode, PyCharm, Jupyter NoteBook, Figma (UI/UX), Kaggle</p> */}
      </section>
    </div>
  );
};

export default Skills;
