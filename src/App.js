import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './SideMenu.js'
import Head from './Head.js'
import Footer from './Footer.js'
import Body from './Body.js'

function App() {
  return (
    <div className="App">
      {/* <SideMenu/> */}
      <Head/>
      <Body/>
      <Footer/>
      
    </div>
  );
}

export default App;
