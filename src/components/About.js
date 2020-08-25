import React from "react";
import { screenSizes } from "../data/constants";
import Slide from "react-reveal/Fade";

function About(props) {
  return (
      <div ref={props.refList.refAbout} className="container mt-5">
          <Slide right>
              <span className="section-title">About</span>
          </Slide>
      </div>
  );
}

export default About;
