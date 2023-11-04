import React from "react";
import { Button, Container } from "react-bootstrap";
import classes from "./Home.module.css";

const Home = () => {
  const tourList = [
    {
      date: "JUL 16",
      city: "DETROIT, MI",
      address: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      city: "TORONTO,ON",
      address: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      city: "BRISTOW, VA",
      address: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      city: "PHOENIX, AZ",
      address: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      city: "LAS VEGAS, NV",
      address: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "CONCORD, CA",
      address: "CONCORD PAVILION",
    },
  ];

  const tourContent = (
    <ul className="list-group w-75 m-auto">
      {tourList.map((tour) => (
        <li className="list-group-item">
          <div className={classes.list}>
            <div>{tour.date}</div>
            <div>{tour.city}</div>
            <div>{tour.address}</div>
            <Button variant="info" className="text-light">
              Buy Tickets
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Container className="text-center bg-body-secondary p-5" fluid>
        <h1 className="display-1">The Generics</h1>
        <Button variant="outline-info mt-5">Get our Latest Album</Button>
      </Container>
      <Container className="text-center mt-5 mb-5">
        <h2 className="text-black-50">Tours</h2>
        {tourContent}
      </Container>
      <footer>
        <Container fluid className="bg-info p-4">
          <h2 className="text-light ms-5">The Generics</h2>
        </Container>
      </footer>
    </>
  );
};

export default Home;
