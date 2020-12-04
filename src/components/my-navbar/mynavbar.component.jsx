import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/logo.png';
import "./mynavbar.style.css"

const MyNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" bg="light" expand="md" variant="dark" classname="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="myLogo" src={Logo} alt='My Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link className="navlinks" href="#features">Home</Nav.Link>
                        <Nav.Link className="navlinks" href="#pricing">About</Nav.Link>
                        <Nav.Link className="navlinks" href="#pricing">About</Nav.Link>
                        <Nav.Link className="navlinks" href="#skills">Skills</Nav.Link>
                        <Nav.Link className="navlinks" href="#experience">Experience</Nav.Link>
                        <Nav.Link className="navlinks" href="#contact">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyNavbar;