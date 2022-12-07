import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const LogIn = () => {
  const [error, setError] = useState("");
  const { userSignIn, emailVerify, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        if (user.emailVerified === true) {
          navigate(from, { replace: true });
          toast.success("Successfully LogIn!");
        } else {
          handlerVerify();
        }
      })
      .catch((e) => {
        console.log(e);
        const er = e.message;
        setError(er);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handlerVerify = () => {
    emailVerify()
      .then(() => {
        toast.success("check your email for verify!!");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <div className="text-danger mt-4">{error}</div>
    </Form>
  );
};

export default LogIn;
