import { projectNames } from "./constants"
import { projectMainImages, projectPreviewImages } from "./project_images"

export const projectData = {
    NW: {
        title: "NW",
        // summary: ,
        links: {
            github: "https://github.com/Brazill-Mitchell/nw",
            projectUrl: "https://brazill-mitchell.github.io/nw/"
        },
        mainImage: projectMainImages[projectNames.NW],
        previewImages: projectPreviewImages[projectNames.NW]
    },
    PHLASK: {
        title: "PHLASK",
        // summary: ,
        links:
            {
               github: "https://github.com/phlask/phlask-map",
               projectUrl: "https://beta.phlask.me/"
            } ,
        mainImage: projectMainImages[projectNames.PHLASK],
        previewImages: projectPreviewImages[projectNames.PHLASK]
    },
    GECKO_NOTES: {
        title: "Gecko Notes",
        summary: "Gecko Notes is a web based, mobile friendly note keeping app. It's simple interface makes it easy to store thoughts and ideas, and come back to them anytime, anywhere.",
        links:
            {
               github: "https://github.com/chingu-voyages/v9-geckos-team-06",
               projectUrl: "https://geckonotes.firebaseapp.com"
            } ,
        mainImage: projectMainImages[projectNames.GECKO_NOTES],
        previewImages: projectPreviewImages[projectNames.GECKO_NOTES]
    },
    ATOMIST: {
        title: "Atomist",
        summary: "This Cloned website was a Developer Team project as a part of Chingu, a community of growing developers.",
        links:
            {
               github: "https://github.com/chingu-voyages/v8-toucans-team-04",
               projectUrl: "https://chingu-voyages.github.io/v8-toucans-team-04/"
            } ,
        mainImage: projectMainImages[projectNames.ATOMIST],
        previewImages: projectPreviewImages[projectNames.ATOMIST]
    },
    CONNECT_X: {
        title: "Connect X",
        summary: "This 2 player game is similar to Connect 4, except the players aren’t limited to 4. Any number of squares can be chosen as the winning amount, and the board can be set to any number of squares, making for a challenging and maybe impossible game of Connect X.",
        links:
            {
               github: "https://github.com/Brazill-Mitchell/chingu",
               projectUrl: "https://brazill-mitchell.github.io/chingu/"
            } ,
        mainImage: projectMainImages[projectNames.CONNECT_X],
        previewImages: projectPreviewImages[projectNames.CONNECT_X]
    },
    PAINT: {
        title: "Paint ",
        summary: "This project is a simple paint application, created using the Canvas element. The user is able to choose the paint color, shape, and stroke size. They can even see an analysis of how the mouse’s position in the window relates to the canvas for an understanding of how the canvas functions.",
        links:
            {
               github: "https://brazill-mitchell.github.io/paint-app/",
               projectUrl:  "https://github.com/Brazill-Mitchell/paint-app"
            } ,
        mainImage: projectMainImages[projectNames.PAINT],
        previewImages: projectPreviewImages[projectNames.PAINT]
    }
}

export default projectData