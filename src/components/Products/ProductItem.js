import React, { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import classes from "./ProductItem.module.css";
import CartContext from "../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddToCart = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
    });
  };

  return (
    <Col className="col-lg-3 col-md-6 col-12">
      <Card bg="light" className="mt-3 shadow">
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Title className="text-center mt-2">{props.title}</Card.Title>
        <Card.Body className={classes.cardBody}>
          <Card.Text className="text-center">₹{props.price}</Card.Text>
          <Button onClick={onAddToCart} variant="dark">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
