import React from "react";
import "./style.scss";
import Moment from "react-moment";

const Footer = () => {
  const date = new Date();
  const format = "DD/MM/YYYY";
  return (
    <div className="footer">
      <div className="footer__section">
        <p className="footer__text">
          <Moment format={format}>{date}</Moment>
        </p>
      </div>
      <div className="footer__section">
        <a
          target="_blank"
          href="https://github.com/Javi1499/test-javier-ruiz"
          className="footer__text"
          rel="noreferrer"
        >
          App Repository
        </a>
      </div>
      <div className="footer__section">
        <p className="footer__text">Created by Javier Ruiz</p>
      </div>
    </div>
  );
};

export default Footer;
