import React, { useState } from "react"
import { Slide } from "react-reveal"
import { projectData } from "../data/projects"
import { projectNames, screenSizes } from "../data/constants"

function Intro(props){
    // carousel control
    const projectCount = Object.keys(projectNames).length
    const controlIncrement = 100 / projectCount
    
    // const [currentProjectItem,setCurrentProjectItem] = useState(controlIncrement)
    const [carouselStyle,setCarouselStyle] = useState(
        {
            style: {
                transform: `translateX:(${controlIncrement * 0})`
            }
        }
    )

    function moveCarousel(index){
        setCarouselStyle(
            {
                transform: `translateX(${controlIncrement * index * -1}%)`
            }
        )
    }

    

    return(
        <div ref={props.refList.refIntro} className="d-flex justify-content-center flex-column mt-5">
            <Slide left>
                <div>Project Name</div>
                {/* images */}
                <div className="project-carousel-container d-flex mx-auto justify-content-center">
                    <div 
                        className='project-carousel-items d-flex justify-content-between'
                        style={carouselStyle}    
                    >
                        {Object.keys(projectNames).map((currentProject,index) => {
                            return <div className="project-item" key={index}>
                                        <div className="project-image">
                                            <img className="img" src={projectData[currentProject].mainImage} alt=""/>
                                        </div>
                                </div>
                        })}
                    </div>
                </div>

                {/* control */}
                <div className="carousel-control-container d-flex w-25 mx-auto">
                    {Object.keys(projectNames).map((project,index) => {
                        return <div 
                            className="carousel-index mx-auto" 
                            key={index}
                            onClick={()=>{moveCarousel(index)}}
                        ></div>
                    })}
                </div>
            </Slide>
        </div>
    )
}

export default Intro