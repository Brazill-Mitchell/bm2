import geckoMain from "./images/projectImages/geckoMain"
import geckoLanding from "./images/projectImages/geckoLanding"
import geckoResponsive from "./images/projectImages/geckoResponsive"
import signIn from "./images/projectImages/signIn"
import webPost from "./images/projectImages/webPost"

import atomistLanding from "./images/projectImages/atomistLanding"
import atomistLandingResponsive from "./images/projectImages/atomistLandingResponsive"
import pricing from "./images/projectImages/pricing"
import pricingResponsive from "./images/projectImages/pricingResponsive"

import full8 from "./images/projectImages/full8"
import full14 from "./images/projectImages/full14"
import full20 from "./images/projectImages/full20"
import fullEmpty20 from "./images/projectImages/fullEmpty20"

import full from "./images/projectImages/full"
import analysis from "./images/projectImages/analysis"
import fullEmpty from "./images/projectImages/fullEmpty"
import paintStyle from "./images/projectImages/paintStyle"

import { projectNames } from "./projects"


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
        }],
}