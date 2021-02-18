import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import "./Md.css";

function Zoom() {
  return (
    <Fade down>
      <div className="md-container">
        <span className="md-title">node-zoom-jwt</span>
        <span className="md-text">
          `This package makes it simple to use
          <span className="md-emphasis"> Zoom's JSON Web Token</span> functions
          with
          <span className="md-emphasis"> Node JS</span>.
        </span>
        {/* Links */}
        {/* Github */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a
            className="project-link-style ml-1 button-elevation"
            href={"https://github.com/Brazill-Mitchell/node-zoom-jwt.git"}
            target="blank"
          >
            <div className="project-github-link d-flex flex-row ml-2">
              <span className="github-title text-elevation">Github</span>
              <div className="github-image image-elevation my-auto ml-1 rounded-circle"></div>
            </div>
          </a>

          {/* Npm */}
          <a
            className="project-link-style ml-1 button-elevation"
            href={"https://www.npmjs.com/package/node-zoom-jwt"}
            target="blank"
          >
            <div className="project-github-link d-flex flex-row ml-2">
              <span className="github-title text-elevation">Npm</span>
              <div className="npm-image image-elevation my-auto ml-1 rounded-circle"></div>
            </div>
          </a>
        </div>
        <span className="md-heading">Usage</span>
        Install the node-zoom-jwt package:
        <span className="md-cmd">npm` i node-zoom-jwt</span>
        Add node-zoom-jwt to your file:
        <span className="md-code">const Zoom = require("node-zoom-jwt")</span>
        Use your APIKey & APISecret to connect to your app:
        <span className="md-code">
          Zoom.connect( APIKey, APISecret, new Date().getTime() + 5000 )
        </span>
        Now you can access the functions provided by Zoom's API through the Zoom
        object:
        <span className="md-code" style={{ marginBottom: "20px" }}>
          const meeting = await Zoom.meeting(meetingId)
        </span>
      </div>
    </Fade>
  );
}

export default Zoom;
