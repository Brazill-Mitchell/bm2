import React from "react";
import "./Head.css";
import { Fade } from "react-reveal";
import Orbs from "./components/Orbs"

function Head() {
  return (
    <div>
      <Fade down duration="3000">
        <div id="head-container">
          <div>
            <div id="head-image-container">
              <div className="head-image" alt=""></div>
              {/* <Orbs/> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Head;
