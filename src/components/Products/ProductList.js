import React from "react";
import { Row } from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Row>
      {productsArr.map((product) => (
        <ProductItem
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </Row>
  );
};

export default ProductList;