import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Logo
        width={"185px"}
        color={"black"}
        fontSize={"32px"}
        letterSpacing={"9.60px"}
        lineHeight={"51.20px"}
      />
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Page 1</a>
        </li>
        <li>
          <a href="#">Page 2</a>
        </li>
      </ul>
    </div>
  );
}
