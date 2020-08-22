import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Slide } from "react-reveal"
import { projectData } from "../data/projects"
import { projectNames } from "../data/constants"

function Projects(props){

    const [displayImage,setDisplayImage] = useState()


    return(
        <div ref={props.refList.refProjects}>
            <div className="section-title mx-auto text-center">Projects</div>
            {Object.keys(projectNames).map((currentProjectName,index) => {
                return <div key={index} className="mt-5">
                    
                <Slide right>
                    
                    <div className="project-container container d-flex p-2">

                        {/* Main Image */}
                        <div className="project-main-image container">
                            <img 
                                className="img"
                                alt=""
                                src={displayImage !== undefined
                                    ? displayImage
                                    : projectData[currentProjectName].mainImage    
                                } 
                            ></img>
                        </div>
        
                        {/* Description */}
                        <div className="project-description-container d-flex flex-column w-100 ml-2">
                            <div className='project-text-area my-auto'>
                                <div className="project-title">{projectData[currentProjectName].title}</div>
                                <div className="project-summary">{projectData[currentProjectName].summary}</div>
        
                                {/* Links */}
                                <div className="project-links-container d-flex mt-2 mb-1">
                                    <a className="project-link-style" href={projectData[currentProjectName].links.projectUrl} target="blank">
                                        <span className="project-link-name">{projectData[currentProjectName].title}</span>
                                    </a>
                                    <a className="project-link-style ml-1" href={projectData[currentProjectName].links.github} target="blank">
                                        <div className="project-github-link d-flex flex-row ml-2">
                                            <span className="github-title">Github</span>
                                            <div className="github-image my-auto rounded-circle"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
        
                            {/* Preview Images */}
                            <div className="w-100 mt-2 mt-auto">
                                {projectData[currentProjectName] !== undefined 
                                    ? <div className="d-flex preview-image-container">
                                        {projectData[currentProjectName].previewImages.map((image,index) => {
                                            return <div className="preview-image">
                                                    <img className='img' key={index} src={image.image} alt=""></img>
                                                </div>
                                        })}
                                    </div>
                                    : []
                                }
                            </div>
        
                        </div>
        
                    </div>
                </Slide>
            </div>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    currentProject: state.currentProject
})

export default connect (mapStateToProps)(Projects)