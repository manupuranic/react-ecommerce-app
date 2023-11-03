import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.quantity);

  const onQtyChange = (e) => {
    setQty(() => e.target.value);
  };

  return (
    <li className={classes.cartItem}>
      <Image src={props.imageUrl} rounded />
      <div className={classes.title}>{props.title}</div>
      <div>₹{props.price}</div>
      <input className="form-control" value={qty} onChange={onQtyChange} />
      <Button variant="danger" type="button">
        Remove
      </Button>
    </li>
  );
};

export default CartItem;
