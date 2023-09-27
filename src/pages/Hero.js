import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import HeroBg1 from "../assets/images/james-harrison-vpOeXr5wmR4-unsplash.png";
import HeroBg2 from "../assets/images/emile-perron-xrVDYZRGdw4-unsplash.png";
import HerBg3 from "../assets/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.png";

export default function Hero() {
  const images = [HeroBg1, HeroBg2, HerBg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);
  return (
    <div className="hero-container">
      <img src={images[currentIndex]} alt="hero-bg" />
      <div className="gradient-overlay"></div>
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
