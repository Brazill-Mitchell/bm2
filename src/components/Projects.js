import React from "react"
import { Slide } from "react-reveal"

function Projects(props){

    return(
        <div ref={props.refList.refProjects}
            style={{marginTop: "100vh"}}
        >
            <Slide right>Projects</Slide>
        </div>
    )
}

export default Projects