import React from 'react';
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import './title-message.component.css'

const TitleMessage = () => {
  return (
    <>
      <div id="home" className="wrapper">
        
        <div className="title-content">
          <h1 className="main-message"> Hi, My Name is <strong>Emmanuel Maina</strong></h1>
          <br/>
          <br/>
          <span className="typewritter-text">
            <Typewriter
                  options={{
                    strings: ["Web Developer", "Salesforce Administrator", "Student", "Software Engineer", "Cyber Engineer"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                  }}
                />
          </span>
          <div className="bottom">
            <span className="subtext">
              <h6>Welcome to my portfolio, here I get to show you my skills, achievements, and projects</h6>
              <p className="text-center"><a href="https://johnjay.digication.com/emmanuel-mbira-maina-official/my-co-curriculars" target="_blank">For more on my hobbies and extra-curricular activities use this link</a></p>
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default TitleMessage;