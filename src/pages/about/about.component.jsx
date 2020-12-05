import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../../assets/EmmanuelMaina.jpg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Zoom from 'react-reveal/Zoom';
import './about.style.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <hr />
                <Container>
                    <Row className="pt-3 pb-5 align-item-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-t rounded details">
                                <Zoom left cascade>
                                    <p>Bonjour! My name is <strong>Emmanuel Mbira Maina.</strong></p>
                                    <p>I am programmer, Salesforce Adminstrator, and Cyber Engineer born and raised in Kenya</p>
                                    <p>I have successfully designed and created a couple of websites that are attched below</p>
                                    <p>My goal is to obtain a position in the information security field where I can utilize and advance my technical and leadership abilities. </p>
                                </Zoom>

                                <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's Talk
                                            </Button>
                                        </a>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>

        </div>
    );
}

export default About