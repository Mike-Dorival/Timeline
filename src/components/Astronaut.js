import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import logo from "../assets/astronaute.png";

function Astronaut() {
  return (
    <div>
      <RellaxWrapper speed={-9} percentage={0.3}>
        <div className="rocket">
          <img src={logo} alt="logo" />
        </div>
      </RellaxWrapper>
    </div>
  );
}

export default Astronaut;
