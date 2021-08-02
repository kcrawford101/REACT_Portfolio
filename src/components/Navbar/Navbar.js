import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className='main-navbar'>
        <ReactBootStrap.Navbar style={{background: '#393D3F'}} expand="lg">
            <ReactBootStrap.Container>
                <ReactBootStrap.Navbar.Brand style={{color: '#B8F3FF'}} href="#home">Kevin Crawford's Portfolio</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootStrap.Nav className="me-auto">
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="">About Me</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="">Projects</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="">My Resume</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="">Contact Me</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        </div>
        
        </>
    )
}

export default Navbar;

