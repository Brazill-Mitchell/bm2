import React from "react";
import { Fade } from "react-reveal";
import "./Md.css";
import { connect } from "react-redux";
import { screenSizes } from "../data/constants";
import { setScreenSize } from "../redux/actions";

function Zoom(props) {
  return (
    <div ref={props.refCode}>
      <Fade top>
        <div className="section-title">{"{ Code }"}</div>
      </Fade>
      <Fade down distance="10%">
        <div className="md-container">
          <Fade bottom distance="25%">
            <div className="md-title">node-zoom-jwt</div>
          </Fade>
          {props.screenSize === screenSizes.MOBILE ||
          props.screenSize === screenSizes.TABLET
            ? links()
            : []}
          <Fade bottom>
            <div className="md-text-group">
              This package condenses 300+
              <a href="https://marketplace.zoom.us/docs/api-reference/zoom-api">
                <span className="md-emphasis md-link">
                  {" "}
                  Zoom JSON Web Token{" "}
                </span>
              </a>{" "}
              functions into one place for easy usage
            </div>
          </Fade>
          {/* Links */}
          {props.screenSize === screenSizes.COMPUTER ||
          props.screenSize === screenSizes.XL
            ? links()
            : []}
          <Fade top delay="200" distance="25%">
            <div className="md-heading">Usage</div>
          </Fade>
          <Fade bottom distance="25%">
            <span className="md-text-group">
              Install the node-zoom-jwt package:
            </span>
          </Fade>
          <Fade bottom distance="25%">
            <div className="md-cmd">npm i node-zoom-jwt</div>
          </Fade>
          <Fade bottom distance="25%">
            <span className="md-text-group">
              Add node-zoom-jwt to your file:
            </span>
          </Fade>
          <Fade bottom distance="25%">
            <div className="md-code">const Zoom = require("node-zoom-jwt")</div>
          </Fade>

          <Fade bottom distance="25%">
            <span className="md-text-group">
              Use your APIKey & APISecret to connect to your app:
            </span>
          </Fade>
          <Fade bottom distance="25%">
            <div className="md-code">
              Zoom.connect( APIKey, APISecret, new Date().getTime() + 5000 )
            </div>
          </Fade>

          <Fade bottom distance="25%">
            <span className="md-text-group">
              Now you can access the functions provided by Zoom's API through
              the
            </span>
            Zoom object:
          </Fade>
          <Fade bottom distance="25%">
            <div className="md-code" style={{ marginBottom: "20px" }}>
              const meeting = await Zoom.meeting(meetingId)
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}

const links = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* Github */}
      <Fade top delay="200">
        <a
          className="project-link-style ml-1 button-elevation"
          href={"https://github.com/Brazill-Mitchell/node-zoom-jwt.git"}
          target="blank"
        >
          <div className="md-link-code d-flex flex-row ml-2">
            <div className="github-title text-elevation">Github</div>
            <div className="github-image image-elevation my-auto ml-1 rounded-circle"></div>
          </div>
        </a>
      </Fade>

      {/* Npm */}
      <Fade top delay="400">
        <a
          className="project-link-style ml-1 button-elevation"
          href={"https://www.npmjs.com/package/node-zoom-jwt"}
          target="blank"
        >
          <div className="md-link-code d-flex flex-row ml-2">
            <div className="github-title text-elevation">Npm</div>
            <div className="npm-image image-elevation my-auto ml-1 rounded-circle"></div>
          </div>
        </a>
      </Fade>
    </div>
  );
};

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
});

const mapDispatchToProps = { setScreenSize };

export default connect(mapStateToProps, mapDispatchToProps)(Zoom);
