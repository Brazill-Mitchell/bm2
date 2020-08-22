import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Slide } from "react-reveal"
import { projectData } from "../data/projects"
import { projectNames } from "../data/constants"
import ProjectItem from "./ProjectItem"

function Projects(props){

    return(
        <div ref={props.refList.refProjects}>
            <div className="section-title mx-auto text-center">Projects</div>
            {Object.keys(projectNames).map((currentProjectName,index) => {
                return <ProjectItem projectTitle={currentProjectName} key={index}/>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    currentProject: state.currentProject
})

export default connect (mapStateToProps)(Projects)