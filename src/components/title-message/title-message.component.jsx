import React from 'react';
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => {
    return (
        <MyTitleMessage>
            <div className="head">
                <div className="main text-center mb-3">
                    Hi, I am
                    <br />
                    <span><strong>Emmanuel Maina</strong></span>

                </div>
            </div>
            <Typewriter
                options={{
                    strings: ["Web Developer", "Salesforce Administrator", "Student", "Software Engineer", "Cyber Engineer"],
                    autoStart: true,
                    loops: true,
                    delay: 50
                }}
            />
        </MyTitleMessage>
    );
}

export default TitleMessage;