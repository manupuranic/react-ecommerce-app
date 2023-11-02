import React from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Ecommerce-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Button variant="outline-light" type="button">
              Cart <Badge bg="danger">0</Badge>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
