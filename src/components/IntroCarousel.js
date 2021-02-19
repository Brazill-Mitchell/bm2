/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Slide } from "react-reveal";
import { projectData } from "../data/projects";
import { projectNames, screenSizes } from "../data/constants";
import "./Intro.css";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// TODO: Add Carousel Arrows

function IntroCarousel(props) {
  // carousel control
  const projectCount = Object.keys(projectNames).length;
  // const projectCount = 5;
  const controlIncrement = 100 / projectCount; //temp *2 for project count simulation;
  // const controlIncrement = 100 / (projectCount * 2) //temp *2 for project count simulation;
  const shiftValue = projectCount / 2 - 1; //Sets the first project at center on initial render
  const [lastDirection, setLastDirection] = useState(null);
  const [currentCarouselPosition, setCurrentCarouselPosition] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  // const [currentProjectItem,setCurrentProjectItem] = useState(controlIncrement)
  const refCarousel = useRef(null);
  const [carouselStyle, setCarouselStyle] = useState({
    // transform: `translateX:(${controlIncrement * 0})`,
    transform: `translateX(${
      (100 / projectCount) * shiftValue + controlIncrement / 2
    }%)`,
  });

  // get width of the carousel
  useEffect(() => {
    try {
      setCarouselWidth(refCarousel.current.getBoundingClientRect().x);
    } catch {
      setCarouselWidth("carousel ref width not available");
    }
  }, [refCarousel]);

  useEffect(() => {
    setCurrentCarouselPosition(
      lastDirection
        ? lastDirection === "left"
          ? currentCarouselPosition - 1
          : currentCarouselPosition + 1
        : currentCarouselPosition
    );
  }, [carouselStyle]);

  // // Set carousel to selected position
  // function setCarousel(index) {
  //   setCarouselStyle({
  //     transform: `translateX(${controlIncrement * index * -1}%)`,
  //   });
  // }

  // Move Carousel left or right by one position
  function moveCarousel(direction) {
    if (direction === "left") {
      if (currentCarouselPosition > 0) {
        setLastDirection("left");
        setCarouselStyle({
          transform: `translateX(${
            (100 / projectCount) * shiftValue +
            controlIncrement / 2 -
            controlIncrement * (currentCarouselPosition - 1)
          }%)`,
          // transform: `translateX(${
          //   controlIncrement * (currentCarouselPosition - 1) * -1
          // }%)`,
        });
      }
    } else if (direction === "right") {
      if (currentCarouselPosition < projectCount - 1) {
        setLastDirection("right");
        setCarouselStyle({
          transform: `translateX(${
            (100 / projectCount) * shiftValue +
            controlIncrement / 2 -
            controlIncrement * (currentCarouselPosition + 1)
          }%)`,
          // transform: `translateX(${
          //   controlIncrement * (currentCarouselPosition + 1) * -1
          // }%)`,
        });
      }
    }
  }

  return (
    <div
      ref={props.refList.refIntro}
      className="d-flex justify-content-center flex-column mt-5"
    >
      <div>Project Name</div>
      project count: {projectCount}
      <div>
        {/* {lastDirection || "wating for carousel movement"} <br />
          transform left:{" "}
          {(100 / projectCount) * shiftValue +
            controlIncrement / 2 +
            controlIncrement * (currentCarouselPosition + 1)}{" "}
          <br />
          transform right:{" "}
          {(100 / projectCount) * shiftValue +
            controlIncrement / 2 -
            controlIncrement * (currentCarouselPosition + 1)}{" "}
          <br />
          carousel position: {currentCarouselPosition} */}
        carousel width: {carouselWidth}
      </div>
      <br />
      <div className='carousel-area-container'>
      <NavigateBeforeIcon
        className="carousel-nav-arrow-left"
        style={{ cursor: "pointer" }}
        onClick={() => {
          moveCarousel("left");
        }}
      ></NavigateBeforeIcon>
      {/* images */}
      <div
        className="project-carousel-container"
        ref={refCarousel}
      >
        <div
          className="project-carousel-items-container"
          // style={carouselStyle}
        >
          <div
            className="project-carousel-items d-flex justify-content-between"
            style={carouselStyle}
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
            {/* {Object.keys(projectNames).map((currentProject, index) => {
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
              })} */}
          </div>
        </div>
      </div>
      <NavigateNextIcon
        className="carousel-nav-arrow-right"
        style={{ cursor: "pointer" }}
        onClick={() => {
          moveCarousel("right");
        }}
      ></NavigateNextIcon>
      </div>
      {/* control */}
      {/* <div className="carousel-control-container d-flex w-25 mx-auto">
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
        </div> */}
      {/* <NavigateBeforeIcon
          className="carousel-nav-arrow-left"
          onClick={() => {
            moveCarousel("left");
          }}
        ></NavigateBeforeIcon>
        <NavigateNextIcon
          className="carousel-nav-arrow-right"
          onClick={() => {
            moveCarousel("right");
          }}
        ></NavigateNextIcon> */}
    </div>
  );
}

export default IntroCarousel;
