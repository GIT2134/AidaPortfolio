import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiFolder } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GoCodescan } from "react-icons/go";
import Aboutme from "./components/pages/Aboutme";
import Education from "./components/pages/Education";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

function Footer() {
  return (
    <div className="footercontainer">
      <section className="footersubs">
        <p className="footersubshead">
          Let's collaborate on Exciting Projects!
        </p>
        <p className="footersubstext"></p>
        <div className="inputplaces"></div>
      </section>
      <div className="footerlinks">
        <div className="footerlinkwrapper">
          <div className="footerlinkitems">
            <h2>About Me</h2>
            <Link to="/aboutme" target="_blank">
              Discover Who I Am
            </Link>
            <Link to="/education" target="_blank">
              Explore My Educational Journey
            </Link>
            <Link to="/projects" target="_blank">
              View My Projects
            </Link>
            <Link to="/skills" target="_blank">
              Explore My Technical Skill Set
            </Link>
          </div>
        </div>
        <div className="footerlinkwrapper">
          <div className="footerlinkitems">
            <h2>Location</h2>
            <Link>Canada</Link>
          </div>
        </div>
        <div className="footerlinkwrapper">
          <div className="footerlinkitems">
            <h2>Follow me</h2>
            <Link
              className="sociconlink github"
              to="https://github.com/GIT2134/Aida-Portfolio"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="logoone logotwogithub">
                <ImGithub />
              </i>
            </Link>
          </div>
        </div>
      </div>
      <section className="mediaicons">
        <div className="mediaiconwrap">
          <div className="soicons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
