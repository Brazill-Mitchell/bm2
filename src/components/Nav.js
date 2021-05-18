import React from "react";
import { connect } from "react-redux";
import { screenSizes } from "../data/constants";
import Fade from "react-reveal/Fade";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "",
      navHeight: "",
      shouldShowHome: false,
      navContainerClass:"nav-container",
    };
  }

  jumpTo(sectionRef) {
    if(sectionRef){
      window.scrollTo({
        top: sectionRef.current.offsetTop - this.state.navHeight,
        behavior: "smooth",
      });
      this.setState({
        shouldShowHome: true
      })
    }
    else{
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  componentDidUpdate(prevprops) {
    // Keep nav height updated for scrolling position
    if (prevprops.screenSize !== this.props.screenSize) {
      const screen = this.props.screenSize;
      if (screen === screenSizes.MOBILE) {
        this.setState({
          navClass: "",
          navHeight: this.props.refList.refNav.current.clientHeight,
        });
      } else {
        this.setState({
          navClass: "",
          navHeight: this.props.refList.refNav.current.clientHeight,
        });
      }
    }
    // Determine whether to show "Home" option
    if(this.props.navPosition !== prevprops.navPosition){
      if(this.props.navPosition === 0){
        this.setState({
          shouldShowHome: true,
          navContainerClass: "nav-container nav-full"
        })
      }
      else{
        this.setState({
          shouldShowHome: false,
          navContainerClass: "nav-container"
        })
      }
    }

    // Show or hide "Home" based on scroll
    // if(prevprops.isNavTop !== this.props.isNavTop){
    //   this.setState({
    //     shouldShowHome: true
    //   })
    // }
    // else{
    //   this.setState({
    //     shouldShowHome: false
    //   })
    // }
  }

  componentDidMount() {
    this.setState({
      navHeight: this.props.refList.refNav.current.clientHeight,
    });
  }

  render() {
    return (
      <div className="sticky-top" ref={this.props.refList.refNav}>
        <Fade>
          <div className={this.state.navContainerClass}>
            <div className="nav-item-container">
              {!this.state.shouldShowHome ? (
                []
              ) : (
                <Fade right distance="25%" delay="200">
                  <span
                    className="nav-item nav-home"
                    onClick={() => {
                     this.jumpTo()
                    }}
                  >
                    HOME
                  </span>
                </Fade>
              )}
              <Fade right distance="25%" delay="200">
                <span
                  className="nav-item"
                  onClick={() => {
                    this.jumpTo(this.props.refList.refCode);
                  }}
                >
                  CODE
                </span>
              </Fade>
              <Fade right distance="25%" delay="300">
                <span
                  className="nav-item"
                  onClick={() => {
                    this.jumpTo(this.props.refList.refProjects);
                  }}
                >
                  PROJECTS
                </span>
              </Fade>
              {/* <Fade right distance="25%" delay="400">
                <span
                  className="nav-item"
                  onClick={() => {
                    this.jumpTo(this.props.refList.refAbout);
                  }}
                >
                  ABOUT
                </span>
              </Fade> */}
              {/* <span
                className="nav-item"
                onClick={() => {
                  this.jumpTo(this.props.refList.refContact);
                }}
              >
                CONTACT
              </span> */}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
  navPosition: state.navPosition,
});

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Nav);
