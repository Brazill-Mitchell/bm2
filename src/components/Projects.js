import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Slide } from "react-reveal"
import { projectData } from "../data/projects"
import { projectNames } from "../data/constants"
import sampleImg from "./github.png"

function Projects(props){

    // const[currentProject,setCurrentProject] = useState()
const a = {
    one: 1,
    two: 2
}

const b = {
    one: a.one,
    two: a.two
}

const one = a[b.one]

    const name = projectData.GECKO_NOTES

    function test(){
        const name = projectData[props.currentProject].previewImages
        const test = projectData.GECKO_NOTES
        console.log(test)
    }

    useEffect(()=>{
        test()
    },[props.currentProject])


    return(
        <div ref={props.refList.refProjects}
            // style={{marginTop: "100vh"}}
        >
            <Slide right>
                
            <div className="project-container container d-flex p-2">
                {/* Main Image */}
                <div className="project-main-image container">
                    <img className="img" src={projectData[props.currentProject].mainImage} alt=""></img>
                </div>

                {/* Description */}
                <div className="project-description-container d-flex flex-column w-100 ml-2">
                    <div className='project-text-area my-auto'>
                        <div className="project-title">{projectData[props.currentProject].title}</div>
                        <div className="project-summary">{projectData[props.currentProject].summary}</div>

                        {/* Links */}
                        <div className="project-links-container d-flex mt-2">
                            <a href={projectData[props.currentProject].links.projectUrl} target="blank">
                                <span className="project-link-name">{projectData[props.currentProject].title}</span>
                            </a>
                            <a href={projectData[props.currentProject].links.github} target="blank">
                                <div className="project-github-link d-flex flex-row ml-2">
                                    <span className="github-title">Github</span>
                                    <div className="github-image my-auto rounded-circle"></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Preview Images */}
                    <div className="w-100 mt-2 mt-auto">
                        {projectData[props.currentProject] !== undefined 
                            ? <div className="d-flex preview-image-container">
                                {projectData[props.currentProject].previewImages.map((image,index) => {
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
    )
}

const mapStateToProps = state => ({
    currentProject: state.currentProject
})

export default connect (mapStateToProps)(Projects)