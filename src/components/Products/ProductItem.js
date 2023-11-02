import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const ProductItem = (props) => {
  return (
    <Col className="col-lg-3 col-md-6 col-12">
      <Card className="p-2 mt-3">
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Title className="text-center mt-3">{props.title}</Card.Title>
        <Card.Body>
          <Card.Text>
            <div>MRP: ₹{props.price}</div>
            <div>Offer Price: ₹{Math.floor(props.price / 1.1)}</div>
          </Card.Text>
        </Card.Body>
        <Button variant="dark">Add to Cart</Button>
      </Card>
    </Col>
  );
};

export default ProductItem;
