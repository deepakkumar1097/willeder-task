import React from "react";
import Logo from "../components/Logo";
import HeroBg from "../assets/images/james-harrison-vpOeXr5wmR4-unsplash.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={HeroBg} alt="hero-bg" />
      <Logo
        color={"white"}
        fontSize={"78px"}
        letterSpacing={"34.44px"}
        lineHeight={"133.38px"}
      />
      <div className="hero-title">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button className="scroll-next-page">Scroll</button>
      </div>
    </div>
  );
}
