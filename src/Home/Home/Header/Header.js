import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><span className="text-danger">e</span>BAZAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">  
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><i class="far fa-user"></i> Sign in </Nav.Link>
      <Nav.Link eventKey={2} href="#memes"><i class="fas fa-cart-plus"></i> Order </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  
  
</Navbar>

    );
};

export default Header;