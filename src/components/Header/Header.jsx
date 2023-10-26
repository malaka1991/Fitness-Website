import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png"

export default function Heder() {
  return <div className="header">
    <img src={Logo} alt="" className="logo" />

    <ul className="header-menu">
      <li>Home</li>
      <li>Programs</li>
      <li>Why Us</li>
      <li>Plans</li>
      <li>Testimonials</li>
    </ul>
  </div>;
}
