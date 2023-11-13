import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
// import { Outlet } from "react-router-dom";

const Root = (props) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <>
      <Header onOpenCart={toggleCart} />
      <Cart onCloseCart={toggleCart} show={showCart} />
      <main>{props.children}</main>
    </>
  );
};

export default Root;
