import React from "react";
import { ReactComponent as Facebook } from "../svg/Vector.svg";
import { ReactComponent as Twitter } from "../svg/Vector (1).svg";
import { ReactComponent as Tiktok } from "../svg/Subtract.svg";
import { ReactComponent as Instagram } from "../svg/Subtract (1).svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <ul className="footer-links">
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
      <hr />
      <div className="social-media">
        <Facebook />
        <Twitter />
        <Tiktok />
        <Instagram />
      </div>
      <h6>© Logo, Inc.</h6>
    </div>
  );
}
