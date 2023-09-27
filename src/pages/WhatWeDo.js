import React from "react";
import Layout from "../components/Layout";
import Rectangle from "../assets/images/Rectangle.png";
import { ReactComponent as Arrow } from "../svg/solar_arrow-up-linear.svg";

export default function WhatWeDo() {
  return (
    <div className="whatWeDo-container">
      <Layout />
      <div className="whatWeDo-details">
        <div className="whatWeDo-title">
          <h4>Lorem ipsum</h4>
          <img src={Rectangle} alt="rectangle" />
        </div>
        <div className="whatWeDo-summary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="summary-go-to">
            <p>Lorem ipsum</p>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}
