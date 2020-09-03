import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

function Asteroid() {
  const left = [8, 19, 29, 40, 49, 59, 79, 87, 69, 20];
  const top = [200, 480, 400, 450, 480, 150, 200, 350, 680];
  const speed = [-3, -4, -5, -1, -2, -3, -4, -5, -2, -2];
  const backgroundAsteroid = Array.apply(null, Array(10)).map(
    (_) => "./asteroid.png"
  );

  return (
    <div>
      {backgroundAsteroid.map((asteroid_url, idx) => {
        return (
          <RellaxWrapper speed={speed[idx]} percentage={0.5} key={idx}>
            <div
              className="asteroid"
              style={{ left: `${left[idx]}%`, top: `${top[idx]}px` }}
            >
              <img src={process.env.PUBLIC_URL + asteroid_url} alt="logo" />
            </div>
          </RellaxWrapper>
        );
      })}
    </div>
  );
}

export default Asteroid;
