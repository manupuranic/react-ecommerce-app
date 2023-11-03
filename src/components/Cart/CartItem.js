import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.quantity);
  const cartCtx = useContext(CartContext);

  const onQtyChange = (e) => {
    setQty(() => e.target.value);
  };

  const onRemoveItem = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <li className={classes.cartItem}>
      <Image src={props.imageUrl} rounded />
      <div className={classes.title}>{props.title}</div>
      <div>₹{props.price}</div>
      <input className="form-control" value={qty} onChange={onQtyChange} />
      <Button onClick={onRemoveItem} variant="danger" type="button">
        Remove
      </Button>
    </li>
  );
};

export default CartItem;
