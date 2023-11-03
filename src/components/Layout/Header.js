import React, { useContext } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((num, currItem) => {
    return num + currItem.quantity;
  }, 0);

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
                  isActive
                    ? classes.navLink + " " + classes.active
                    : classes.navLink
                }>
                Home
              </NavLink>
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  isActive
                    ? classes.navLink + " " + classes.active
                    : classes.navLink
                }>
                Store
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? classes.navLink + " " + classes.active
                    : classes.navLink
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
