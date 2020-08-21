import React from "react";
import { connect } from "react-redux";
import { screenSizes } from "../data/constants";
import Fade from "react-reveal/Fade";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "",
      navHeight: "",
    };
  }

  jumpTo(sectionRef) {
    // sectionRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
    window.scrollTo({
        top: sectionRef.current.offsetTop - this.state.navHeight,
        behavior: "smooth"
    })
  }

  componentDidUpdate(prevprops) {
    if (prevprops.screenSize !== this.props.screenSize) {
      const screen = this.props.screenSize;
      if (screen === screenSizes.MOBILE) {
        this.setState({
          navClass: "",
          navHeight: this.props.refList.refNav.current.clientHeight
        });
      } else {
        this.setState({
          navClass: "",
          navHeight: this.props.refList.refNav.current.clientHeight
        });
      }
    }
  }

  componentDidMount() {
    this.setState({
      navHeight: this.props.refList.refNav.current.clientHeight
    });
  }

  render() {
    return (
      <div className="sticky-top" ref={this.props.refList.refNav}>
        <Fade>
          <div className="nav-container">
            <div className="nav-item-container">
              <span
                className="nav-item"
                onClick={() => {
                  this.jumpTo(this.props.refList.refHome);
                }}
              >
                HOME
              </span>
              <span
                className="nav-item"
                onClick={() => {
                  this.jumpTo(this.props.refList.refProjects);
                }}
              >
                PROJECTS
              </span>
              <span
                className="nav-item"
                onClick={() => {
                  this.jumpTo(this.props.refList.refAbout);
                }}
              >
                ABOUT
              </span>
              <span
                className="nav-item"
                onClick={() => {
                  this.jumpTo(this.props.refList.refContact);
                }}
              >
                CONTACT
              </span>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
});

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Nav);
