import React, { useContext } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const total = cartCtx.items.reduce(
    (sum, curr) => sum + curr.price * curr.quantity,
    0
  );

  let cartContent;

  if (cartCtx.items.length) {
    cartContent = (
      <ul className="list-group">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    );
  } else {
    cartContent = <p className="text-center">No Items in your Cart</p>;
  }

  let totalContent = (
    <div className={classes.total}>
      <div className={classes.label}>Total:</div>
      <div className={classes.price}>₹{total}</div>
    </div>
  );

  const onOrderHandler = () => {
    cartCtx.emptyCart();
    alert("Order Successfull!");
  };

  return (
    <Offcanvas show={props.show} placement="end" onHide={props.onCloseCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="m-auto">Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartContent}
        {cartCtx.items.length !== 0 && totalContent}
        <div className={classes.order}>
          <Button
            variant="dark"
            className="ps-5 pe-5"
            type="button"
            onClick={onOrderHandler}>
            Order
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
