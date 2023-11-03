import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="mt-2">
      <h1 className="text-center">About Us</h1>
      <p>
        Labore adipisicing ex dolore consectetur. Deserunt anim culpa amet
        consequat ut fugiat sit excepteur ipsum non sunt. Commodo reprehenderit
        dolore incididunt nulla est ea et culpa. Qui ipsum dolor velit ex do
        occaecat magna pariatur.
      </p>
      <p>
        Tempor nostrud eiusmod velit cillum in ipsum amet. Aute reprehenderit
        officia aliquip sit eu culpa. Incididunt excepteur ullamco aliquip duis
        cillum consequat cupidatat enim velit laborum est id. Fugiat ipsum ipsum
        tempor officia laborum occaecat. Dolore ullamco ipsum est veniam
        consectetur ut reprehenderit commodo culpa cupidatat incididunt laborum
        reprehenderit veniam. Ex in occaecat eiusmod irure aliqua dolore culpa
        deserunt laborum et velit veniam adipisicing consequat. Ipsum excepteur
        nisi pariatur consectetur eiusmod id proident magna. Sunt cupidatat ad
        Lorem anim fugiat excepteur do aliquip veniam voluptate pariatur culpa
        velit quis. Ad id minim nisi Lorem nostrud magna esse. Non consequat
        incididunt adipisicing ad commodo in voluptate ex minim. Sit nisi
        laboris do velit officia. Labore sit irure amet irure id voluptate. Aute
        voluptate pariatur exercitation officia labore aliquip tempor veniam.
        Officia dolore Lorem consequat in sunt reprehenderit fugiat officia
        irure tempor. Officia mollit sunt enim id excepteur commodo ipsum sint
        qui ex Lorem. Labore ut aliqua reprehenderit eiusmod incididunt esse
        est.
      </p>
      <div className="m-auto" style={{ width: "90%" }}>
        <Link to="/store">
          <Button variant="dark" className="text-center w-100 mb-2">
            Go to Store
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default About;
