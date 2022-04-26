import React from "react";
import "./style.scss";
const Button = ({ children, submitButton }) => {
  return (
    <input className="button" value={children} onClick={() => submitButton()} />
  );
};

export default Button;
