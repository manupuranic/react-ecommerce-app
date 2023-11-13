import React, { useContext, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Auth = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const toggleLogin = () => {
    setIsLogin((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const onInputChange = (e) => {
    const updatedForm = { ...formData };
    updatedForm[e.target.name] = e.target.value;
    setFormData(updatedForm);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNeRjnLKXgTAFg63sWOj_5hYpXorfp-cc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNeRjnLKXgTAFg63sWOj_5hYpXorfp-cc";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (response.ok) {
        authCtx.login(data.idToken);
        navigate("/products", { replace: true });
        setFormData({
          email: "",
          password: "",
        });
      } else {
        console.log(data);
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <React.Fragment>
      <Container className="mt-4 w-50">
        <h1 className="text-center">{isLogin ? "Login" : "Sign Up"}</h1>
        <Card>
          <Card.Body>
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={onInputChange}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
              <Button
                variant="outline-dark"
                className="ms-2"
                onClick={toggleLogin}>
                {isLogin ? "New User? Sign up" : "Existing User? Login"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Auth;
