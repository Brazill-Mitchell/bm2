import React, { useState } from "react"
import { connect } from "react-redux"
import { Slide } from "react-reveal"
import { projectData } from "../data/projects"
import { projectNames } from "../data/constants"

function ProjectItem(props){
    
    const project = projectData[props.projectTitle]
    const [displayImage,setDisplayImage] = useState()
    
    function handleFocus(image){
        if(image !== undefined){
            setDisplayImage(image)
        }else if (displayImage !== project.mainImage){
            setDisplayImage({image: project.mainImage})
        }
    }

    return(
        <div className="mt-5" onClick={()=>{handleFocus()}}>
                    
                <Slide right>
                    
                    <div className="project-container container d-flex p-2">

                        {/* Main Image */}
                        <div className="project-main-image-container container">
                            {/* image */}
                            <div className='project-main-image'>
                                <img 
                                    className="img"
                                    alt=""
                                    src={displayImage !== undefined
                                        ? displayImage.image
                                        : projectData[props.projectTitle].mainImage    
                                    } 
                                ></img>
                            </div>

                            {/* desc */}
                            <div className="project-main-image-desc mx-1" >{displayImage !== undefined
                                    ? displayImage.description
                                    : ""
                                }
                            </div>
                        </div>
        
                        {/* Description */}
                        <div className="project-description-container d-flex flex-column w-100 ml-2">
                            <div className='project-text-area my-auto'>
                                <div className="project-title">{projectData[props.projectTitle].title}</div>
                                <p className="project-summary">{projectData[props.projectTitle].summary}</p>
        
                                {/* Links */}
                                <div className="project-links-container d-flex mt-2 mb-1">
                                    <a className="project-link-style button-elevation" href={projectData[props.projectTitle].links.projectUrl} target="blank">
                                        <span className="project-link-name text-elevation">{projectData[props.projectTitle].title}</span>
                                    </a>
                                    <a className="project-link-style ml-1 button-elevation" href={projectData[props.projectTitle].links.github} target="blank">
                                        <div className="project-github-link d-flex flex-row ml-2">
                                            <span className="github-title text-elevation">Github</span>
                                            <div className="github-image image-elevation my-auto ml-1 rounded-circle"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
        
                            {/* Preview Images */}
                            <div className="w-100 mt-2 mt-auto">
                                {projectData[props.projectTitle] !== undefined 
                                    ? <div className="d-flex preview-image-container">
                                        {projectData[props.projectTitle].previewImages.map((image,index) => {
                                            return <div className="preview-image" onClick={(e)=>{e.stopPropagation();handleFocus(image)}}>
                                                    <img className='img img-elevation' key={index} src={image.image} alt=""></img>
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
    )
}

export default ProjectItem