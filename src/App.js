import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './SideMenu.js'
import Menu from './Menu.js'
import Head from './Head.js'
import Footer from './Footer.js'
import Body from './Body.js'
import { connect } from 'react-redux'
import { setScreenResolution } from './redux/actions'
import { MOBILE, TABLET, COMPUTER, XL } from './redux/reducer'
import Nav from "./bm"

function App(props) {

    /* Responsive */

window.addEventListener('resize', checkScreenSize)
let mediaList = [
  [MOBILE,'(max-width: 500px)'],
  [TABLET,'(max-width: 800px)'],
  [COMPUTER,'(max-width: 1400px)'],
  [XL, '(min-width: 1400px)']
]

function checkScreenSize(){
  for (let x  = 0; x < mediaList.length; x++){
      if(window.matchMedia(mediaList[x][1]).matches){
          if (props.resolution !== mediaList[x][0]){
              props.setScreenResolution(mediaList[x][0])
          }
          return
      }
  }
}

useEffect(()=>{
  checkScreenSize()
},[])

  return (
    <div className="">
      <Nav/>
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
  resolution: state.resolution
})

const mapDispatchToProps = { setScreenResolution }

export default connect(mapStateToProps,mapDispatchToProps)(App);
