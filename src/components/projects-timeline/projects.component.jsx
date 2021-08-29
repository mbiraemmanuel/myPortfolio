import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent, TextEvent, YouTubeEvent, } from '@merc/react-timeline'
import './projects.style.css';
import challenge from "../../assets/challenge.png";
import testimonial from "../../assets/testimonial.png";
import landing from "../../assets/landing.png";
import portfolio from "../../assets/Portfolio.png";
import articleSearch from "../../assets/articleSearch.png";
import kanban from "../../assets/kanban.png";
import netflixClone from "../../assets/netflix.png"

const Projects = () => {
    return (
        <>
            <h1 id="projects" className="text-center font-details- pb-4">PROJECTS</h1>
            <hr />
            <Timeline>
                <Events>
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
                            <a href="https://github.com/mbiraemmanuel/Java-Script-Crash-Course">View Source</a>
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
                            <a href="">View Source</a>
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
                            <a href="">View Source</a>
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
                        <>
                            <a href="https://github.com/mbiraemmanuel/myPortfolio">View Source</a>
                        </>
                    </ImageEvent>

                    <ImageEvent
                        date="2021"
                        text="Salesforce Kanban"
                        src={kanban}
                        url=""
                        alt="Kanban Board"
                        credit="Custom Salesforce Kanban built by LWC framework"

                    >
                        <>
                            <a href="">View Source</a>
                        </>
                    </ImageEvent>

                    <ImageEvent
                        date="2021"
                        text="Article Search Engine"
                        src={articleSearch}
                        url=""
                        alt="My Website"
                        credit="A saleforce search engine for aticles that you can use in your flow for easy case creation"

                    >
                    </ImageEvent>

                    <ImageEvent
                        date="2021"
                        text="Netflix Clone"
                        src={netflixClone}
                        url="https://github.com/mbiraemmanuel/maina-netflix-clone"
                        alt="Netflix Clone"
                        credit="A netflix clone web app"

                    >
                        <>
                            <a href="https://github.com/mbiraemmanuel/maina-netflix-clone">View Source</a>
                        </>
                    </ImageEvent>


                </Events>
            </Timeline>
        </>

    );
}

export default Projects;