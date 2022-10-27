import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ph.D. Student @ PoliTO",
          "AI Division @ RoboTO",
          "Space Enthusiast",
          "IT and Web Support @ IEDC",
          "Scout Leader @ AN2",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
