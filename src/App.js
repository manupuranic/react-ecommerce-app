import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Product from "./components/Products/Product";

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <>
      <Cart onCloseCart={toggleCart} show={showCart} />
      <Header onOpenCart={toggleCart} />
      <Product />
    </>
  );
}

export default App;
