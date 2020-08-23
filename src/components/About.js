import React from "react";
import { screenSizes } from "../data/constants";
import Slide from "react-reveal/Fade";

function About(props) {
  return (
      <div ref={props.refList.refAbout} className="container mt-5">
          <Slide right>
              About
          </Slide>
      </div>
  );
}

export default About;
