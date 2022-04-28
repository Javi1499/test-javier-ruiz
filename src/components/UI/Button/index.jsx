import React from "react";
import "./style.scss";
const Button = ({ children, submitButton, isActive }) => {
  return (
    <div className="container__button">
      <button
        className={`button${isActive ? "--active" : ""}`}
        onClick={() => submitButton()}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
