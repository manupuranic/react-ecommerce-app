import React, { useCallback, useEffect, useState } from "react";
import CartContext from "./cart-context";
import { addCart, getCart, removeItem, clearCart } from "../utils/cart";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const fetchCart = useCallback(async () => {
    const cart = await getCart();
    setItems(cart);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (item, quantity, increment) => {
    // let existingItemIndex = items.findIndex(
    //   (prevItem) => prevItem.id === item.id
    // );
    // let updatedItems;
    // if (existingItemIndex >= 0) {
    //   updatedItems = [...items];
    //   updatedItems[existingItemIndex].quantity = quantity;
    // } else {
    //   const formattedItem = {
    //     title: item.title,
    //     imageUrl: item.imageUrl,
    //     id: item.id,
    //     price: item.price,
    //     quantity: quantity,
    //   };
    //   updatedItems = [...items, formattedItem];
    // }
    // setItems(updatedItems);
    await addCart(item, quantity, increment);
    fetchCart();
  };

  const removeFromCart = async (id) => {
    await removeItem(id);
    fetchCart();
  };

  const emptyCart = async () => {
    await clearCart();
    setItems([]);
  };

  const cartCtx = {
    items: items,
    addItem: addToCart,
    removeItem: removeFromCart,
    fetchCart: fetchCart,
    emptyCart: emptyCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
