import React, { useState } from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import { projectData } from "../data/projects";
import { projectNames, screenSizes } from "../data/constants";

function ProjectItem(props) {
  const project = projectData[props.projectTitle];
  const [displayImage, setDisplayImage] = useState(project.previewImages[0]);

  function handleFocus(image) {
    if (image !== undefined) {
      setDisplayImage(image);
    } else {
      setDisplayImage({ image: project.previewImages[0].image });
    }
  }

  return (
    <div
      onClick={() => {
        handleFocus();
      }}
      className={
        props.screenSize !== screenSizes.MOBILE
          ? "mt-5 project-container container d-flex p-2"
          : // mobile
            "mt-2 project-container container d-flex p-2"
      }
    >
      <Fade right distance="25%">
        {/* <div className="project-container container d-flex p-2"> */}

        {props.screenSize === screenSizes.COMPUTER ||
        props.screenSize === screenSizes.XL ? (
          <div
            className="project-container container d-flex p-2"
            style={!props.isLast ? { marginBottom: "5%" } : {}}
          >
            {/* Main Image */}
            <div className="project-main-image-container container my-auto">
              {/* image */}
              <div className="project-main-image">
                <img
                  className="img"
                  alt=""
                  src={
                    displayImage !== undefined
                      ? displayImage.image
                      : project.mainImage
                  }
                ></img>
              </div>

              {/* desc */}
              <div className="project-main-image-desc mx-1">
                {/* display placeholder when no description is displayed to preserve spacing */}
                {displayImage.description || (
                  <span style={{ visibility: "hidden" }}>-</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="project-description-container d-flex flex-column w-100 ml-2">
              <div className="project-text-area my-auto d-flex flex-column">
                <Fade down delay="100">
                  <div className="project-title">{project.title}</div>
                </Fade>
                <Fade right delay="200" distance="25%">
                  <p className="project-summary">{project.summary}</p>
                </Fade>

                {/* Links */}
                <div className="project-links-container d-flex mt-2 mb-1">
                  <Fade right delay="300" distance="25%">
                    <a
                      className="project-link-style button-elevation"
                      href={project.links.projectUrl}
                      target="blank"
                    >
                      <span className="project-link-name text-elevation">
                        {project.title}
                      </span>
                    </a>
                  </Fade>
                  <Fade right delay="400" distance="25%">
                    <a
                      className="project-link-style ml-1 button-elevation"
                      href={project.links.github}
                      target="blank"
                    >
                      <div className="project-github-link d-flex flex-row ml-2">
                        <span className="github-title text-elevation">
                          Github
                        </span>
                        <div className="github-image image-elevation my-auto ml-1 rounded-circle"></div>
                      </div>
                    </a>
                  </Fade>
                </div>
              </div>

              {/* Preview Images */}
              {/* <Fade up delay="500"> */}
              <div className="w-100 mt-2">
                {project !== undefined ? (
                  <div className="d-flex preview-image-container">
                    {project.previewImages.map((image, index) => {
                      return (
                        <div
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFocus(image);
                          }}
                          className={
                            displayImage === project.previewImages[index]
                              ? "preview-image preview-selected"
                              : "preview-image"
                          }
                        >
                          <Fade
                            bottom
                            delay={`${200 + index * 100}`}
                            distance="25%"
                          >
                            <img
                              className="img img-elevation"
                              key={index}
                              src={image.image}
                              alt=""
                            ></img>
                          </Fade>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  []
                )}
              </div>
              {/* </Fade> */}
            </div>
          </div>
        ) : (
          // **** Mobile **** //

          <div className="project-container container d-flex flex-column p-2">
            {/* Description */}
            <div className="project-description-container d-flex flex-column w-100 ml-2">
              {/* Title */}
              <div className="project-title mb-2">{project.title}</div>

              {/* Images */}
              <div className="mobile-project-images-container">
                {/* Main Image */}
                <div className="project-main-image-container container">
                  {/* image */}
                  <div className="project-main-image">
                    <img
                      className="img"
                      alt=""
                      src={
                        displayImage !== undefined
                          ? displayImage.image
                          : project.mainImage
                      }
                    ></img>
                  </div>

                  {/* desc */}
                  <div className="project-main-image-desc mx-1">
                    {displayImage !== undefined ? displayImage.description : ""}
                  </div>
                </div>

                {/* Preview Images */}
                <div className="w-100 mt-2">
                  {project !== undefined ? (
                    <div className="d-flex preview-image-container">
                      {project.previewImages.map((image, index) => {
                        return (
                          <div
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFocus(image);
                            }}
                            className={
                              displayImage === project.previewImages[index]
                                ? "preview-image preview-selected"
                                : "preview-image"
                            }
                            // style={
                            //   index === 0 ? { opacity: 1 } : { opacity: 0.6 }
                            // }
                          >
                            <Fade
                              bottom
                              delay={`${200 + index * 100}`}
                              distance="25%"
                            >
                              <img
                                className="img img-elevation"
                                key={index}
                                src={image.image}
                                alt=""
                              ></img>
                            </Fade>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    []
                  )}
                </div>
              </div>

              {/* Text Area */}
              <div className="project-text-area mt-3">
                <p className="project-summary">{project.summary}</p>

                {/* Links */}
                <div className="project-links-container d-flex mb-1 w-100 w-100 justify-content-center">
                  <a
                    className="project-link-style button-elevation"
                    href={project.links.projectUrl}
                    target="blank"
                  >
                    <span className="project-link-name text-elevation">
                      {project.title}
                    </span>
                  </a>
                  <a
                    className="project-link-style ml-1 button-elevation"
                    href={project.links.github}
                    target="blank"
                  >
                    <div className="project-github-link d-flex flex-row ml-2">
                      <span className="github-title text-elevation">
                        Github
                      </span>
                      <div className="github-image image-elevation my-auto ml-1 rounded-circle"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* </div> */}
      </Fade>
    </div>
  );
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
});

export default connect(mapStateToProps)(ProjectItem);
