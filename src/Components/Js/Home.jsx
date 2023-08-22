import React from "react";
import "../Css/Home.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Education from "./Education";
import Coursework from "./Coursework";
import Skills from "./Skills";
import Links from "./Links";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Projects from "./Projects";
import Interests from "./Interests";
import Footer from "./Footer";
import Test from "./Test";

const Home = () => {
  return (
    <div>
      <nav className="nav__for__home">
        <div>
          <Navbar />
        </div>
      </nav>
      <Header />

      <Skills />

      <Interests />
      <Projects />
      <Links />
      {/* <Test /> */}
      {/* <Education />
      <Coursework />

      <Certifications /> */}
      <Footer />
    </div>
  );
};
//  <Route exact path="/" component={Home} />
//         <Route path="/education" component={Education} />
//         <Route path="/coursework" component={Coursework} />
//         <Route path="/skills" component={Skills} />
//         <Route path="/links" component={Links} />
//         <Route path="/certifications" component={Certifications} />
//         <Route path="/experience" component={Experience} />
//         <Route path="/projects" component={Projects} />
//         <Route path="/interests" component={Interests} />

export default Home;
