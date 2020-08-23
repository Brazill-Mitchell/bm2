import React, { useState } from "react";
import { screenSizes } from "../data/constants";
import Slide from "react-reveal/Fade";
import github from "../images/general/github.png";
import gmail from "../images/general/gmail.png";
import linkedIn from "../images/general/linkedIn.png";

function Contact(props) {
    const[messageBtnClass,setMessageBtnClass] = useState("btn-message-send")

  return (
      <div ref={props.refList.refContact} className="container d-flex flex-column mt-5 justify-content-center">
          <Slide right>
            {/* title */}
            <div className="section-title">Get in Touch</div>
            
            {/* message area */}
            <div className='message-container d-flex flex-column justify-content-center'>
                <div className='name-box'>
                    <div className='message-area-label'>Name/Organization</div>
                    <textarea className='name-textarea' type="text"></textarea>
                </div>
                <div className='message-box'>
                    <div className='message-area-label'>Message</div>
                    <textarea className='message-textarea' type="text"></textarea>
                </div>
                <div className='message-send'>
                    <button className={messageBtnClass} onClick={()=>{setMessageBtnClass("btn-message-sent")}} type="button">Send</button>
                </div>
            </div>

            {/* contact images */}
            <div className="contact-image-container d-flex justify-content-between mt-5">
                <div className='contact-image'>
                    <img className="img img-elevation" src={linkedIn} alt=""/>
                </div>
                <div className='contact-image'>
                    <img className="img img-elevation" src={github} alt=""/>
                </div>
                <div className='contact-image'>
                    <img className="img img-elevation" src={gmail} alt=""/>
                </div>
            </div>

          </Slide>
      </div>
  );
}

export default Contact;
