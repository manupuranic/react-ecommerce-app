import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <>
      <Header onOpenCart={toggleCart} />
      <main>
        <Cart onCloseCart={toggleCart} show={showCart} />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
