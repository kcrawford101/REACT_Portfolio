import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import avatar from '../../images/My-Avatar.png'



const Navbar = () => {
    return (
        <>
        <div className='main-navbar'>
        <ReactBootStrap.Navbar style={{background: '#393D3F', textAlign: 'center'}} expand="lg">
            <ReactBootStrap.Container >                
                <ReactBootStrap.Navbar.Brand style={{color: '#B8F3FF'}} href="#home">Kevin Crawford's Portfolio</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                
                <Image src={avatar} style={{width: '10%'}} roundedCircle />
                <ReactBootStrap.Nav  className="me-auto">
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="">About Me</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="">Projects</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="https://drive.google.com/file/d/1Ntk_K3CBqF4JKPHn8IVbEJQlBf-qICYG/view?usp=sharing">My Resume</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="https://github.com/kcrawford101">Github</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{color: '#B8F3FF'}} href="https://www.linkedin.com/in/kcrawford117/">LinkedIn</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        </div>
        
        </>
    )
}

export default Navbar;

