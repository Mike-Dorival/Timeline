import React, { useEffect } from "react";
import Asteroid from "./components/Asteroid";
import Timeline from "./components/Timeline";
import Astronaut from "./components/Astronaut";

import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="container">
      <Asteroid />
      <Timeline />
      <Astronaut />
    </div>
  );
}

export default App;
