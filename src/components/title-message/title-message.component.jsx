import React from 'react';
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import './title-message.component.css'

const TitleMessage = () => {
  return (
    <>
      <div className="wrapper">
        
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
              <h6>Welcome to my portfolio, here I get to show you my skills, achievements, projects, and hobbies</h6>
            </span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default TitleMessage;