import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.quantity);
  const cartCtx = useContext(CartContext);

  const onQtyChange = (e) => {
    let qty = e.target.value;
    if (qty.trim() !== "" && +qty <= 0) {
      alert("Item qty cannot be less than 1");
      qty = 1;
    }
    setQty(() => qty);
    cartCtx.addItem(
      {
        id: props.id,
        title: props.title,
        imageUrl: props.imageUrl,
        price: props.price,
      },
      +qty
    );
  };

  const onRemoveItem = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <li className={classes.cartItem}>
      <Image src={props.imageUrl} rounded />
      <div className={classes.title}>{props.title}</div>
      <div>₹{props.price}</div>
      <input
        className="form-control"
        min="1"
        type="number"
        value={qty}
        onChange={onQtyChange}
      />
      <Button onClick={onRemoveItem} variant="danger" type="button">
        Remove
      </Button>
    </li>
  );
};

export default CartItem;
