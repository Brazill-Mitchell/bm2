import React, { useState } from "react"
import { Slide } from "react-reveal"
import { projectData } from "../data/projects"
import { projectNames, screenSizes } from "../data/constants"

function Intro(props){

    const [selectedProject,setSelectedProject] = useState(0)

    return(
        <div ref={props.refList.refIntro} className="container d-flex justify-content-center flex-column mt-5 bg-primary">
            <Slide left>
                <div>{selectedProject}</div>
                {/* images */}
                <div className="project-carousel-container d-flex justify-content-between">
                    {Object.keys(projectNames).map((currentProject,index) => {
                        return <div className="project-item">
                                    <div className="project-image">
                                        <img className="img" src={projectData[currentProject].mainImage} alt=""/>
                                    </div>
                            </div>
                    })}
                </div>

                {/* control */}
                <div className="carousel-control-container d-flex w-25">
                    {Object.keys(projectNames).map((project,index) => {
                        return <div 
                            className="carousel-index mx-auto" 
                            key={index}
                            onClick={()=>{setSelectedProject(index)}}
                        ></div>
                    })}
                </div>
            </Slide>
        </div>
    )
}

export default Intro