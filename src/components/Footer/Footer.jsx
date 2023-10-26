import React from "react";
import "./Footer.css";
import GitHub from "../../assets/github.png";
import Intergram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <din className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GitHub} alt="" />
          <img src={Intergram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-2"></div>
    </din>
  );
}
