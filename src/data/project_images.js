import phlaskMain from "../images/projectImages/phlask/phlaskMain.png"
import phlaskSelectedTap from "../images/projectImages/phlask/phlaskSelectedTap.png"
import phlaskHours from "../images/projectImages/phlask/phlaskHours.png"

import nwMain from "../images/projectImages/nw/nwMain.png"
import nwServicesMobile from "../images/projectImages/nw/nwServicesMobile.png"
import nwServices from "../images/projectImages/nw/nwServices.png"
import nwCardsMobile from "../images/projectImages/nw/nwCardsMobile.png"
import nwCards from "../images/projectImages/nw/nwCards.png"

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
    [projectNames.PHLASK]: phlaskMain,
    [projectNames.NW]: nwMain,
    [projectNames.GECKO_NOTES]: geckoMain,
    [projectNames.ATOMIST]: atomistLanding,
    [projectNames.CONNECT_X]: full8,
    [projectNames.PAINT]: full,
}

export const projectPreviewImages = {
    [projectNames.PHLASK]: [
        {
            image: phlaskMain,
            summary: "first",
            description: "PHLASK map"
        },
        {
            image: phlaskSelectedTap,
            description: "Location Selected"
        },
        {
            image: phlaskHours,
            description: "Hours "
        },
    ],
    [projectNames.NW]: [
        {
            image: nwMain,
            summary: "first",
            description: "Landing Page"
        },
        {
            image: nwCards,
            description: "Feature Cards"
        },
        {
            image: nwCardsMobile,
            description: "Mobile Card Layout"
        },
        {
            image: nwServices,
            description: "Services"
        },
        {
            image: nwServicesMobile,
            description: "Mobile Services Layout"
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
            description: "Notes Page"
        },
        {
            image: geckoLanding,
            description: "Login Screen"
        },
        {
            image: geckoResponsive,
            description: "The web app can adjust to any screen size."
        },
        {
            image: signIn,
            description: "   in using an existing Gmail account."
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
            description: "Landing Page"
        },
        {
            image: atomistLandingResponsive,
            description: "Landing Page Mobile Layout"
        },
        {
            image: pricing,
            description: "Pricing Page"
        },
        {
            image: pricingResponsive,
            description: "Pricing Mobile Layout"
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