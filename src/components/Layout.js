import React from "react";

function Layout({ h3, p }) {
  const boxStyle = {
    width: "40px",
    height: "100%",
    backgroundColor: "rgba(106, 69, 255,0.3)",
    margin: "auto",
  };

  return (
    <div className="inner-layout" style={boxStyle}>
      <div className="layout-title">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Layout;
