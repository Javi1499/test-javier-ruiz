import React from "react";
import "./style.scss";
const Button = ({ children, submitButton, isActive }) => {
  return (
    <button
      className={`button${isActive ? "--active" : ""}`}
      onClick={() => submitButton()}
    >
      {children}
    </button>
  );
};

export default Button;
