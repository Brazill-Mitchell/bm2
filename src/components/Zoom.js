import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import mdSrc from "./zoomMd.js";
import "./Md.css";
import 'github-markdown-css'

function Zoom() {
  return (
    <div className="md-container markdown-body">
      <div className="md-section">
        <ReactMarkdown source={mdSrc} />
      </div>
    </div>
  );
}

export default Zoom;
