import React, { useContext } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((num, currItem) => {
    return num + currItem.quantity;
  }, 0);
  const defaultClass =
    "link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover m-2";
  const activeClass =
    "link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover m-2";

  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Ecommerce-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }>
                Home
              </NavLink>
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }>
                Store
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }>
                About
              </NavLink>
              <Button
                onClick={props.onOpenCart}
                variant="outline-light"
                type="button">
                Cart{" "}
                {numberOfItems !== 0 && (
                  <Badge bg="danger">{numberOfItems}</Badge>
                )}
              </Button>
              S
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
