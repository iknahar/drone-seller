import React, { useState } from "react";
import login from "../../../images/login.jpg";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { Alert, Container, Spinner, Button, Row, Col } from "react-bootstrap";
import Naviagation from "../../Shared/Naviagation/Naviagation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      <Naviagation></Naviagation>
      <Container>
        <Row>
          <h1 className="my-3">Register</h1>
          <Col>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="Your Name"
                  name="name"
                  onBlur={handleOnBlur}
                />
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                />
                <input
                  className="w-75 my-3 p-1"
                  id="standard-basic"
                  placeholder="ReType Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                />

                <Button className="w-75 my-3 p-1" type="submit">
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="link">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <Spinner animation="grow" />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Col>
          <Col>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
