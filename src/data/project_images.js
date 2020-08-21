import geckoMain from "../images/projectImages/gecko/geckoMain.jpg"
import geckoLanding from "../images/projectImages/gecko/geckoLanding.jpg"
import geckoResponsive from "../images/projectImages/gecko/geckoResponsive.jpg"
import signIn from "../images/projectImages/gecko/signIn.jpg"
import webPost from "../images/projectImages/gecko/webPost.jpg"

import atomistLanding from "../images/projectImages/atomist/atomistLanding.jpg"
import atomistLandingResponsive from "../images/projectImages/atomist/atomistLandingResponsive.jpg"
import pricing from "../images/projectImages/atomist/pricing.jpg"
import pricingResponsive from "../images/projectImages/atomist/pricingResponsive.jpg"

import full8 from "../images/projectImages/connectX/full8.jpg"
import full14 from "../images/projectImages/connectX/full14.jpg"
import full20 from "../images/projectImages/connectX/full20.jpg"
import fullEmpty20 from "../images/projectImages/connectX/fullEmpty20.jpg"

import full from "../images/projectImages/paint/full.jpg"
import analysis from "../images/projectImages/paint/analysis.jpg"
import fullEmpty from "../images/projectImages/paint/fullEmpty.jpg"
import paintStyle from "../images/projectImages/paint/paintStyle.jpg"

import { projectNames } from "./constants"


export const projectMainImages = {
    gecko: geckoMain,
    atomist: atomistLanding,
    connectX: full8,
    paint: full,
}

export const projectPreviewImages = {
    [projectNames.GECKO_NOTES]: [
        {
            image: geckoLanding,
            summary: ""
        },
        {
            image: geckoResponsive,
            summary: "The web app can adjust to any screen size."
        },
        {
            image: signIn,
            summary: "Sign in using an existing Gmail account."
        },
        {
            image: webPost,
            summary: "Display app description and thumbnail in search results and link sharing."
        }
    ],
    [projectNames.ATOMIST]: [
        {
            image: atomistLandingResponsive,
            summary: ""
        },
        {
            image: pricing,
            summary: ""
        },
        {
            image: pricingResponsive,
            summary: ""
        }
    ],
    [projectNames.CONNECT_X]: [{
            image: full14,
            summary: ""
        },
        {
            image: full20,
            summary: ""
        },
        {
            image: fullEmpty20,
            summary: ""
        }],
    [projectNames.PAINT]: [{
            image: analysis,
            summary: ""
        },
        {
            image: fullEmpty,
            summary: ""
        },
        {
            image: paintStyle,
            summary: ""
        }]
}