import React from "react";
import "./style.scss";
const Button = ({ children, submitButton }) => {
  return (
    <button className="button" onClick={() => submitButton()}>
      {children}
    </button>
  );
};

export default Button;
