import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bm.css";
import SideMenu from "./SideMenu.js";
import Menu from "./Menu.js";
import Head from "./Head.js";
import Footer from "./Footer.js";
import Body from "./Body.js";
import { connect } from "react-redux";
import { setScreenSize, setNavPosition } from "./redux/actions";
// import { setNavPosition } from "./redux/actions";
import { screenSizes, mediaList } from "./data/constants";
import IntroCarousel from "./components/IntroCarousel";
import Nav from "./components/Nav.js";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Zoom from "./components/Zoom";
import Title from "./components/Title";

function App(props) {
  const refNav = useRef(null);
  const refIntro = useRef(null);
  const refCode = useRef(null);
  const refProjects = useRef(null);
  const refAbout = useRef(null);
  const refContact = useRef(null);

  const refList = {
    refNav: refNav,
    refCode: refCode,
    refIntro: refIntro,
    refProjects: refProjects,
    refAbout: refAbout,
    refContact: refContact,
  };

  /* Responsive */

  window.addEventListener("resize", checkScreenSize);

  function checkScreenSize() {
    for (let x = 0; x < mediaList.length; x++) {
      if (window.matchMedia(mediaList[x][1]).matches) {
        if (props.resolution !== mediaList[x][0]) {
          props.setScreenSize(mediaList[x][0]);
        }
        return;
      }
    }
  }

  // Check Nav position on scroll
  const [navPos, setNavPos] = useState(0);
  function updateNavPos() {
    try {
      const pos = refNav.current.getBoundingClientRect().top;
      if (pos !== navPos) {
        setNavPos(pos);
        props.setNavPosition(pos);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkScreenSize();
  }, []);

  // useEffect(() => {
  //   checkScreenSize();
  // }, [window.screenY]);

  return (
    <div className="App" onMouseMove={updateNavPos} onWheel={updateNavPos} onScroll={updateNavPos}>
      <Title refList={refList} />
      <Nav refList={refList} />
      {/* {props.navPosition} */}
      {/* <IntroCarousel refList={refList} /> */}
      <Zoom refCode={refCode} />
      <Projects refList={refList} />
      <About refAbout={refAbout} />
      {/* <Contact refList={refList}/> */}
      {/* <div id='loading-container' className="bg-success"> */}
      {/* <div id='loading-img'></div> */}
      {/* </div> */}
      {/* <SideMenu/> */}
      {/* <Menu/>
      <Head/>
      <Body/> */}
      {/* <Footer/> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
  navPosition: state.navPosition,
});

const mapDispatchToProps = { setScreenSize, setNavPosition };

export default connect(mapStateToProps, mapDispatchToProps)(App);
