import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addToCart = (item, quantity) => {
    let existingItemIndex = items.findIndex(
      (prevItem) => prevItem.id === item.id
    );
    let updatedItems;
    if (existingItemIndex >= 0) {
      updatedItems = [...items];
      updatedItems[existingItemIndex].quantity = quantity;
    } else {
      const formattedItem = {
        title: item.title,
        imageUrl: item.imageUrl,
        id: item.id,
        price: item.price,
        quantity: quantity,
      };
      updatedItems = [...items, formattedItem];
    }
    setItems(updatedItems);
  };

  const removeFromCart = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const cartCtx = {
    items: items,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
