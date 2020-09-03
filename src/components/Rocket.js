import React from "react";
import logo from "../assets/astronaute.png";

const Rocket = () => {
  return (
    <div className="container">
      <div className="move-rocket">
        <img className="img" src={logo} alt="image_astronaute" />
      </div>
    </div>
  );
};

export default Rocket;
