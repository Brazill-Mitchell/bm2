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
    // [projectNames.PHLASK]: phlaskMain,
    // [projectNames.NW]: nwMain,
    [projectNames.GECKO_NOTES]: geckoMain,
    [projectNames.ATOMIST]: atomistLanding,
    [projectNames.CONNECT_X]: full8,
    [projectNames.PAINT]: full,
}

export const projectPreviewImages = {
    [projectNames.NW]: [
        // {
        //     image: geckoMain,
        //     description: "main"
        // },
        {
            image: geckoMain,
            summary: "first",
            description: "landing"
        },
        {
            image: geckoLanding,
            description: "landing"
        },
        {
            image: geckoResponsive,
            description: "The web app can adjust to any screen size."
        },
        {
            image: signIn,
            description: "Sign in using an existing Gmail account."
        },
        {
            image: webPost,
            description: "Display app description and thumbnail in search results and link sharing."
        }, 
    ],
    [projectNames.PHLASK]: [
        // {
        //     image: atomistLanding,
        //     description: "landing"
        // },
        {
            image: atomistLanding,
            summary: "first",
            description: "landing"
        },
        {
            image: atomistLandingResponsive,
            description: "landing responsive"
        },
        {
            image: pricing,
            description: "pricing"
        },
        {
            image: pricingResponsive,
            description: "pricing responsive"
        }, 
    ],
    [projectNames.GECKO_NOTES]: [
        // {
        //     image: geckoMain,
        //     description: "main"
        // },
        {
            image: geckoMain,
            summary: "first",
            description: "landing"
        },
        {
            image: geckoLanding,
            description: "landing"
        },
        {
            image: geckoResponsive,
            description: "The web app can adjust to any screen size."
        },
        {
            image: signIn,
            description: "Sign in using an existing Gmail account."
        },
        {
            image: webPost,
            description: "Display app description and thumbnail in search results and link sharing."
        }, 
    ],
    [projectNames.ATOMIST]: [
        // {
        //     image: atomistLanding,
        //     description: "landing"
        // },
        {
            image: atomistLanding,
            summary: "first",
            description: "landing"
        },
        {
            image: atomistLandingResponsive,
            description: "landing responsive"
        },
        {
            image: pricing,
            description: "pricing"
        },
        {
            image: pricingResponsive,
            description: "pricing responsive"
        }, 
    ],
    [projectNames.CONNECT_X]: [
        // {
        //     image: full8,
        //     description: "full 8"
        // },
        {
            image: full8,
            summary: "first",
            description: "landing"
        },
        {
            image: full14,
            description: "full 4"
        },
        {
            image: full20,
            description: ""
        },
        {
            image: fullEmpty20,
            description: ""
        }, 
    ],
    [projectNames.PAINT]: [
        // {
        //     image: full,
        //     description: "full"
        // },
        {
            image: full,
            summary: "first",
            description: "landing"
        },
        {
            image: analysis,
            description: ""
        },
        {
            image: fullEmpty,
            description: ""
        },
        {
            image: paintStyle,
            description: ""
        }, 
    ]
}