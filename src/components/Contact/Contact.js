import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onInputChange = (e) => {
    const updatedForm = { ...formData };
    updatedForm[e.target.name] = e.target.value;
    setFormData(updatedForm);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://FIREBASE_URL/contacts.json", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json" },
    });
    alert("Contact saved, One of our agents will come in contact with you.");
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Container className="mt-3">
      <h1 className="text-center mb-4">Contact Us</h1>
      <Card>
        <Card.Body>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={onInputChange}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
              />
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Full Name"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;
