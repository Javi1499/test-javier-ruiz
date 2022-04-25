import React from "react";
import "./style.scss";
const Image = ({ url, description }) => {
  return <img className="image" src={url} alt={description} />;
};

export default Image;
