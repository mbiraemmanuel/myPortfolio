import React from 'react';
import Tilt from 'react-tilt';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import './experience.style.css';
import Logo from '../../assets/logo.jpg'
import Container from 'react-bootstrap/Container';

const Experience = () => {
    return (
        <div id="experience">
        <h1 className="pt-3 text-center font-details pb-3">Experience</h1>
        <hr />
        <Container>
            <Tilt options={
                {
                    reverse:        false,  // reverse the tilt direction
                    max:            8,     // max tilt rotation (degrees)
                    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
                    scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
                    speed:          300,    // Speed of the enter/exit transition
                    transition:     true,   // Set a transition on enter/exit.
                    axis:           null,   // What axis should be disabled. Can be X or Y.
                    reset:          true,    // If the tilt effect has to be reset on exit.
                    easing:         "cubic-bezier(.09,.98,.52,.99)",    // Easing on enter/exit.
                }
            }>
                <Jumbotron>
                    <Card className="focus mt-2 mb-2">
                        <Card.Title className="text-center  card-title">CUNY Tech Prep</Card.Title>
                        <Card.Text className="text-center">Fellow, Software Development/Data Science	Jun 2021 – Present</Card.Text>
                        <Card.Text className="card-text d-flex justify-content-start flex-column">
                            <ul>
                                <li>Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test driven development, and CI/CD</li>
                                <li>Learn in-demand technologies like Python 3, Jupyter Notebooks, Pandas, Numpy, Scikit-learn, and SQL as well as industry best practices for exploratory data analysis (EDA), feature engineering, data collection and processing, statistical modeling, data visualization, machine learning techniques, data science process, and big data</li>
                            </ul>
                        </Card.Text>
                    </Card>

                    <Card className="focus mt-2 mb-2">
                        <Card.Title className="text-center  card-title">Voicebrook, Inc.</Card.Title>
                        <Card.Text className="text-center">IT and Salesforce Intern  	March 2021 – Present</Card.Text>
                        <Card.Text className="card-text d-flex justify-content-start flex-column">
                            <ul>
                                <li>Delivered huge improvements to efficiency to various parts of our internal case management by creating custom kanban using LWC, custom process and flows to create/update and manage internal IT/Internal operations case from creation all the way to delivery</li>
                                <li>Conducted training sessions and devised a rollout and devised a rollout plan to establish, measure success of the community.</li>
                                <li>Developed and improved test classes to increase code coverage and identify flaws in various pre-existing programs and apex classes.</li>
                                <li>Shadowed sales, marketing, support, and product teams to get a greater understanding of how business works at a deeper level</li>
                            </ul>
                        </Card.Text>
                    </Card>
                    
                    <Card className="focus mt-2 mb-2">
                        <Card.Title className="text-center  card-title">Freelance Web Developer</Card.Title>
                        <Card.Text className="text-center">2019 – Present</Card.Text>
                        <Card.Text className="card-text d-flex justify-content-start flex-column">
                            <ul>
                                <li>Created custom designs and responsive websites based on the customer requirements.</li>
                                <li>Enhanced web pages' capability and design by coding features such as contact form, typewriter effect, and bookmarks using HTML, CSS, Javascript, and React.</li>
                                <li>Used React to build responsive landing pages and product checkout views.</li>
                                <li>Developed dynamic and interactive websites to ensure high traffic, page views, increased user clicks, and an intuitive user experience.</li>
                                <li>Designed and developed web application backends using flask and Django to fit the customer's requirements.</li>
                                <li>Successfully designed and developed an attractive and reactive personal portfolio using React</li>
                            </ul>
                        </Card.Text>
                    </Card>

                </Jumbotron>
            </Tilt>

        </Container>
        </div>
    );
}

export default Experience;