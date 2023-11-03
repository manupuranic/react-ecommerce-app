import React, { useContext } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((num, currItem) => {
    return num + currItem.quantity;
  }, 0);
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
            <Button
              onClick={props.onOpenCart}
              variant="outline-light"
              type="button">
              Cart{" "}
              {numberOfItems !== 0 && (
                <Badge bg="danger">{numberOfItems}</Badge>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
