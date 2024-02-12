import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Menubar.css";

import { FiFolder } from "react-icons/fi";
import { FiAlignRight } from "react-icons/fi";
import { GoCodescan } from "react-icons/go";

function Menubar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const clickHandler = () => setClick(!click);
  const closeMobMenu = () => setClick(false);

  const handleButtons = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    handleButtons();
  }, []);

  window.addEventListener("resize", handleButtons);

  return (
    <>
      <nav className="menubar">
        <div className="menubar-container">
          <Link to="/" className="menubar-logo" onClick={closeMobMenu}>
            AidaPortfolio{" "}
            <i className="logoone logotwo">
              <GoCodescan />
            </i>
          </Link>
          <div className="menuicon" onClick={clickHandler}>
            <i className={click ? "clk cl-one" : "clk cl-two"}>
              {click ? "x" : <FiAlignRight />}
            </i>
          </div>
          <ul className={click ? "menunavigation active" : "menunavigation"}>
            <li className="menuitem">
              <Link to="/aboutme" className="menulinks" onClick={closeMobMenu}>
                About Me
              </Link>
            </li>
            <li className="menuitem">
              <Link
                to="/education"
                className="menulinks"
                onClick={closeMobMenu}
              >
                Education
              </Link>
            </li>

            <li className="menuitem">
              <Link to="/projects" className="menulinks" onClick={closeMobMenu}>
                Projects
              </Link>
            </li>

            <li className="menuitem">
              <Link to="/skills" className="menulinks" onClick={closeMobMenu}>
                Technical Skills
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menubar;
