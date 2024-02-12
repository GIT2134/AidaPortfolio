import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Content.css";

function Content() {
  return (
    <div className="content-container">
      <h1>Hi, I'm Aida Kordi</h1>
      <p>
        {" "}
        A recent computer engineering graduate with a passion for web and
        software development
      </p>
      <div className="content-buttons">
        <Button
          className="buttonss"
          buttonStyle="button--visible"
          buttonSize="button--big"
        >
          ABOUT ME
        </Button>
      </div>
    </div>
  );
}

export default Content;
