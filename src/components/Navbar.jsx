import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="https://placehold.co/100x40"
          width="100"
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
          style={{ marginLeft: '15px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#login" className="nav-link-custom">Login</Nav.Link>
          <Nav.Link href="#signup" className="nav-link-custom">Sign Up</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
