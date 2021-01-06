import React, { useState } from "react";
import { connect } from "react-redux";
import { Slide } from "react-reveal";
import { projectData } from "../data/projects";
import { projectNames, screenSizes } from "../data/constants";

function ProjectItem(props) {
  const project = projectData[props.projectTitle];
  const [displayImage, setDisplayImage] = useState(project.previewImages[0]);

  function handleFocus(image) {
    if (image !== undefined) {
      setDisplayImage(image);
    } else{
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
      <Slide right>
        {/* <div className="project-container container d-flex p-2"> */}

        {props.screenSize !== screenSizes.MOBILE ? (
          <div className="project-container container d-flex p-2">
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
                {displayImage.description || <span style={{visibility:"hidden"}}>-</span>}
              </div>
            </div>

            {/* Description */}
            <div className="project-description-container d-flex flex-column w-100 ml-2">
              <div className="project-text-area my-auto d-flex flex-column">
                <div className="project-title">{project.title}</div>
                <p className="project-summary">{project.summary}</p>

                {/* Links */}
                <div className="project-links-container d-flex mt-2 mb-1">
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

              {/* Preview Images */}
              <div className="w-100 mt-2 mt-auto">
                {project !== undefined ? (
                  <div className="d-flex preview-image-container">
                    {project.previewImages.map((image, index) => {
                      return (
                        <div
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
                          <img
                            className="img img-elevation"
                            key={index}
                            src={image.image}
                            alt=""
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  []
                )}
              </div>
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
                            className="preview-image"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFocus(image);
                            }}
                            style={
                              index === 0 ? { opacity: 1 } : { opacity: 0.6 }
                            }
                          >
                            <img
                              className="img img-elevation"
                              key={index}
                              src={image.image}
                              alt=""
                            ></img>
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
      </Slide>
    </div>
  );
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
});

export default connect(mapStateToProps)(ProjectItem);
