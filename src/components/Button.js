import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["button--main", "button--visible"];

const SIZES = ["button--med", "button--big"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const handleButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const handleButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/aboutme" className="buttonmobile">
      <button
        className={`buttons ${handleButtonStyle} ${handleButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
