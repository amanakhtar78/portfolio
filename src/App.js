import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Js/Home";
import Education from "./Components/Js/Education";
import Coursework from "./Components/Js/Coursework";
import Skills from "./Components/Js/Skills";
import Links from "./Components/Js/Links";
import Certifications from "./Components/Js/Certifications";
import Experience from "./Components/Js/Experience";
import Projects from "./Components/Js/Projects";
import Interests from "./Components/Js/Interests";
import Navbar from "./Components/Js/Navbar";
import Header from "./Components/Js/Header";
import Footer from "./Components/Js/Footer";
import Test from "./Components/Js/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" component={Header} />
          <Route path="/education" component={Education} />
          <Route path="/coursework" component={Coursework} />
          <Route path="/skills" component={Skills} />
          <Route path="/links" component={Links} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/interests" component={Interests} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/footer" component={Footer} />
          <Route path="/test" component={Test} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
