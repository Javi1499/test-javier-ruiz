import React from "react";
import Footer from "./Footer";
import "./style.scss";
const Layout = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
