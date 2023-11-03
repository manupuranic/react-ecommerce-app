import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const total = cartElements.reduce(
    (sum, curr) => sum + curr.price * curr.quantity,
    0
  );

  return (
    <Offcanvas
      show={props.show}
      placement="end"
      scroll={true}
      onHide={props.onCloseCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="m-auto">Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="list-group">
          {cartElements.map((item) => (
            <CartItem
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </ul>
        <div className={classes.total}>
          <div className={classes.label}>Total:</div>
          <div className={classes.price}>₹{total}</div>
        </div>
        <div className={classes.order}>
          <Button variant="dark" className="ps-5 pe-5" type="button">
            Order
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
