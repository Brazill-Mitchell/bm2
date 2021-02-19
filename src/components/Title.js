import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Slide } from "react-reveal"
import "./Title.css"
import IntroCarousel from "./IntroCarousel"
import Head from "../Head"
import Orbs from "./Orbs"

function Title(props){

    return(
        <div className="intro-area">
            <div className="intro-quote">Making things is hard. I try and make it easy</div>
            <Head/>
            {/* <Orbs/> */}

            {/* <IntroCarousel/> */}
            {/* <div className="intro-name">Brazill Mitchell</div> */}
        </div>
    )
}

const mapStateToProps = state => ({
    currentProject: state.currentProject
})

export default connect (mapStateToProps)(Title)