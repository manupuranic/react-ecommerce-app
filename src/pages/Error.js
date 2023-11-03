import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <h1 className="text-center text-dark-emphasis">An error Occured!</h1>
      <p className="text-center display-5">Could not find this Page</p>
      <div className="text-center">
        <Link to="/">
          <Button variant="dark">Go to Home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Error;
