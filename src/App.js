import React from "react";
import Menubar from "./components/Menubar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Aboutme from "./components/pages/Aboutme";
import Education from "./components/pages/Education";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" exact Component={Home} />
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
