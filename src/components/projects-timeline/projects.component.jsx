import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent, TextEvent, YouTubeEvent, } from '@merc/react-timeline'
import './projects.style.css';
import challenge from "../../assets/challenge.png";
import testimonial from "../../assets/testimonial.png";
import landing from "../../assets/landing.png";
import portfolio from "../../assets/Portfolio.png";

const Projects = () => {
    return (
        <>
            <h1 id="projects" className="text-center font-details- pb-4">PROJECTS</h1>
            <hr />
            <Timeline>
                <Events>
                    {/* <TextEvent date="2018-2019" text="<strong>Intern, Internet Installation Department, Elenix Telecoms, Nairobi, Kenya.</strong>
                    <ul>
                    <li>Installed internet to clients countrywide
                    </li>
                    <li>Troubleshot clients’ internet issues</li>
                    <li>Maintained company computers and network equipment</li>
                    <li>Planned team’s internet installation schedule</li>
                    <li>Worked with clients all over the country while installing, troubleshooting internet</li>
                    </ul>" /> */}

                    <ImageEvent
                        date="2019"
                        text="Javascript FunTime Projects"
                        src={challenge}
                        url=""
                        alt="Javascript Project"
                        credit="Games by Emmanuel Maina"

                    >
                        <>
                            <UrlButton href="https://main.d23qj5f635sm9d.amplifyapp.com/">
                                Have fun with some games
                            </UrlButton>
                        </>
                    </ImageEvent>

                    <ImageEvent
                        date="2020"
                        text="Coding Testimonials Slider"
                        src={testimonial}
                        url=""
                        alt="Coding Testimonials Slider"
                        credit="Coded by Emmanuel Maina"

                    >
                        <>
                            <UrlButton href="https://master...amplifyapp.com ">
                                Take a peek at the page
                            </UrlButton>
                        </>
                    </ImageEvent>

                    <ImageEvent
                        date="2020"
                        text="Chat App Landing Page"
                        src={landing}
                        url=""
                        alt="Chat App Landing Page"
                        credit="Coded by Emmanuel Maina"

                    >
                        <>
                            <UrlButton href="https://main...amplifyapp.com  ">
                                Take a peek at the page
                            </UrlButton>
                        </>
                    </ImageEvent>

                    <ImageEvent
                        date="2020"
                        text="My Porfolio"
                        src={portfolio}
                        url=""
                        alt="My Website"
                        credit="Created By Emmanuel Maina"

                    >
                    </ImageEvent>


                </Events>
            </Timeline>
        </>

    );
}

export default Projects;