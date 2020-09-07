import React from "react";
import RellaxWrapper from "react-rellax-wrapper";
import asteroid from "../assets/asteroid.png";

const left = [8, 19, 29, 40, 49, 59, 79, 87, 69, 20];
const top = [200, 480, 400, 450, 480, 150, 200, 350, 680];
const speed = [-3, -4, -5, -1, -2, -3, -4, -5, -2, -2];

function Asteroid() {
  return (
    <>
      {[...Array(10).keys()].map((asteroidIndex) => (
        <RellaxWrapper
          speed={speed[asteroidIndex]}
          percentage={0.5}
          key={asteroidIndex}
        >
          <div
            className="asteroid"
            style={{
              left: `${left[asteroidIndex]}%`,
              top: `${top[asteroidIndex]}px`,
            }}
          >
            <img src={asteroid} alt="logo" />
          </div>
        </RellaxWrapper>
      ))}
    </>
  );
}

export default Asteroid;
