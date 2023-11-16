import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item, quantity, increment) => {},
  removeItem: (id) => {},
  fetchCart: () => {},
  emptyCart: () => {},
});

export default CartContext;
