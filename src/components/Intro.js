/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Slide } from "react-reveal";
import { projectData } from "../data/projects";
import { projectNames, screenSizes } from "../data/constants";
import "./Intro.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// TODO: Add Carousel Arrows

function Intro(props) {
  // carousel control
  const projectCount = Object.keys(projectNames).length;
  const controlIncrement = 100 / projectCount;
  const [lastDirection, setLastDirection] = useState(null);
  const [currentCarouselPosition, setCurrentCarouselPosition] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0)
  // const [currentProjectItem,setCurrentProjectItem] = useState(controlIncrement)
  const refCarousel = useRef(null)
  const [carouselStyle, setCarouselStyle] = useState({
    style: {
      // transform: `translateX:(${controlIncrement * 0})`,
      visibility: `hidden`,
    },
  });
  useEffect(()=>{
    setCarouselWidth(refCarousel.current.getBoundingClientRect().x )
  },[refCarousel])

  useEffect(() => {
    setCurrentCarouselPosition(
      lastDirection
        ? lastDirection === "left"
          ? currentCarouselPosition - 1
          : currentCarouselPosition + 1
        : currentCarouselPosition
    );
  }, [carouselStyle]);

  // Set carousel to selected position
  function setCarousel(index) {
    // setCarouselStyle({
    //   transform: `translateX(${controlIncrement * index * -1}%)`,
    // });
  }

  // Move Carousel left or right by one position
  function moveCarousel(direction) {
    // if (direction === "left") {
    //   if (currentCarouselPosition > 0) {
    //     setLastDirection("left");
    //     setCarouselStyle({
    //       transform: `translateX(${
    //         controlIncrement * (currentCarouselPosition - 1) * -1
    //       }%)`,
    //     });
    //   }
    // } else if (direction === "right") {
    //   if (currentCarouselPosition < projectCount - 1) {
    //     setLastDirection("right");
    //     setCarouselStyle({
    //       transform: `translateX(${
    //         controlIncrement * (currentCarouselPosition + 1) * -1
    //       }%)`,
    //     });
    //   }
    // }
  }

  return (
    <div
      ref={props.refList.refIntro}
      className="d-flex justify-content-center flex-column mt-5"
    >
      <Slide left>
        <div>Project Name</div>
        {/* <div>
          {lastDirection || "wating for carousel movement"} <br />
          carousel position: {currentCarouselPosition}
        </div> */}
        <br />
        {/* images */}
        <div className="project-carousel-container d-flex flex-row mx-auto justify-content-center">
          <NavigateBeforeIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              moveCarousel("left");
            }}
          ></NavigateBeforeIcon>
          <div
            className="project-carousel-items-container"
            // style={carouselStyle}
          >
            <div
              className="project-carousel-items d-flex justify-content-between"
              style={carouselStyle}
              ref={refCarousel}
            >
              {Object.keys(projectNames).map((currentProject, index) => {
                return (
                  <div className="project-item" key={index}>
                    <div className="project-image">
                      <img
                        className="img"
                        src={projectData[currentProject].mainImage}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
              
              {/* ****************************** */}
              {/* Temp to simulate more projects */}
              {Object.keys(projectNames).map((currentProject, index) => {
                return (
                  <div className="project-item" key={index}>
                    <div className="project-image">
                      <img
                        className="img"
                        src={projectData[currentProject].mainImage}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <NavigateNextIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              moveCarousel("right");
            }}
          ></NavigateNextIcon>
        </div>

        {/* control */}
        <div className="carousel-control-container d-flex w-25 mx-auto">
          {Object.keys(projectNames).map((project, index) => {
            return (
              <div
                className="carousel-index mx-auto"
                key={index}
                onClick={() => {
                  setCarousel(index);
                }}
              ></div>
            );
          })}
        </div>
      </Slide>
    </div>
  );
}

export default Intro;
