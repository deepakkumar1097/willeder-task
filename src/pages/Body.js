import React from "react";
import ImageWrap1 from "../assets/images/dillon-shook-mY3_bvR74fI-unsplash.jpg";
import ImageWrap2 from "../assets/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.png";
import ImageWrap3 from "../assets/images/emile-perron-xrVDYZRGdw4-unsplash.png";

import Layout from "../components/Layout";

export default function Body() {
  return (
    <div className="body-container">
      <Layout h3="Lorem" p="subtitle" />

      <div className="body-images-wrap">
        <div className="body-image">
          <img src={ImageWrap1} alt="body-image" />
          <div className="gradient-overlay"></div>
          <div className="upper-title">
            <span>01</span>
            <h4>Lorem ipsum dolor sit</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="body-image">
          <img src={ImageWrap2} alt="body-image" />
          <div className="gradient-overlay"></div>
          <div className="upper-title">
            <span>02</span>
            <h4>Lorem ipsum dolor sit</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="body-image">
          <img src={ImageWrap3} alt="body-image" />
          <div className="gradient-overlay"></div>
          <div className="upper-title">
            <span>03</span>
            <h4>Lorem ipsum dolor sit</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  );
}
