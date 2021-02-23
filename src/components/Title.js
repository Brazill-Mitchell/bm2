import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import "./Title.css";

function Title(props) {

  return (
    <div className="intro-area">
      <div className="intro-quote">
        <span>Hi, My name's Brazill</span>
        <br />
        <span>{"\u00A0"} ...yes, like the country.</span>
      </div>
      {/* <Head/> */}
      {/* <IntroCarousel/> */}
      {/* <div className="intro-name">Brazill Mitchell</div> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
//   screenSize: state.screenSize,
});

export default connect(mapStateToProps)(Title);
