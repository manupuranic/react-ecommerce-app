import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "./ProductList";

const Product = (props) => {
  return (
    <Container className="mt-3">
      <ProductList />
    </Container>
  );
};

export default Product;
