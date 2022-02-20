import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Assets/Images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar className='navigation-container' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='img-fluid' src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='navbar-link' href="#home">About Us</Nav.Link>
                        <Nav.Link className='navbar-link' href="#link">Services</Nav.Link>
                        <Nav.Link className='navbar-link' href="#link">Get Free Quotes</Nav.Link>
                        <Nav.Link className='navbar-link' href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation