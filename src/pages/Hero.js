import React from "react";
import Logo from "../components/Logo";
import HeroBg from "../assets/images/james-harrison-vpOeXr5wmR4-unsplash.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={HeroBg} alt="hero-bg" />
      <Logo
        width={"550px"}
        color={"white"}
        fontSize={"78px"}
        letterSpacing={"34.44px"}
        lineHeight={"133.38px"}
      />
    </div>
  );
}
