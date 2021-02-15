import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import "./bm.css"
import SideMenu from './SideMenu.js'
import Menu from './Menu.js'
import Head from './Head.js'
import Footer from './Footer.js'
import Body from './Body.js'
import { connect } from 'react-redux'
import { setScreenSize } from './redux/actions'
import { screenSizes, mediaList } from './data/constants'
import Intro from "./components/Intro"
import Nav from "./components/Nav.js"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Test from "./components/Test"
import Zoom from "./components/Zoom"


function App(props) {
  const refNav = useRef(null)
  const refIntro = useRef(null)
  const refProjects = useRef(null)
  const refAbout = useRef(null)
  const refContact = useRef(null)

  const refList = {
    refNav : refNav,
    refIntro : refIntro,
    refProjects : refProjects,
    refAbout : refAbout,
    refContact : refContact
  }

    /* Responsive */

window.addEventListener('resize', checkScreenSize)

function checkScreenSize(){
  for (let x  = 0; x < mediaList.length; x++){
      if(window.matchMedia(mediaList[x][1]).matches){
          if (props.resolution !== mediaList[x][0]){
              props.setScreenSize(mediaList[x][0])
          }
          return
      }
  }
}

useEffect(()=>{
  checkScreenSize()
},[])

  return (
    <div className="App">
      
      <Nav refList={refList}/>
      <Zoom/>
      {/* <Test/> */}
      {/* <Intro refList={refList} /> */}
      <Projects refList= {refList}/>
      <About refList={refList} />
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

const mapStateToProps = state => ({
  screenSize: state.screenSize
})

const mapDispatchToProps = { setScreenSize }

export default connect(mapStateToProps,mapDispatchToProps)(App);
