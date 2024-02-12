import React from "react";
import Menubar from "./components/Menubar";
import Content from "./components/Content";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";
import Aboutme from "./components/pages/Aboutme";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Content />
        <Sections />
        <Footer />
        <Routes>
          <Route path="/aboutme" Component={Aboutme} />
          <Route path="/education" Component={Education} />
          <Route path="/projects" Component={Projects} />
          <Route path="/skills" Component={Skills} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
