import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <p className="footer__text">Date</p>
      </div>
      <div className="footer__section">
        <p className="footer__text">Repository</p>
      </div>
      <div className="footer__section">
        <p className="footer__text">My name</p>
      </div>
    </div>
  );
};

export default Footer;
