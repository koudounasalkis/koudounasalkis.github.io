import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ph.D. Student @ PoliTO",
          "Teaching Assistant @ PoliTO",
          "Italian Language Ambassador @ AYA C4AI Community Project",
          "Supervisor @ MALTO (MAchine Learning at PoliTO)",
          "Space Enthusiast",
          "IT and Web Support @ IEDC"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
