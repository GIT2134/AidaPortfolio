import React from "react";
import Menubar from "./components/Menubar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Education from "./components/pages/Education";
import Aboutme from "./components/pages/Aboutme";
import Content from "./components/Content";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Menubar />
        <Routes>
          <Route path="/" exact Component={Content} />
          <Route path="/" exact Component={Sections} />
          <Route path="/" exact Component={Footer} />

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
