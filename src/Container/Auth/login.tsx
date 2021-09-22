import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { login } from "../../Interface/interface";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  SectionWrapper,
  CardWrapper,
  AuthBody,
  LogoWrapper,
  CardTitle,
} from "./style";
import { receiveLogin } from "../../Redux/Actions/userActions";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [load, setLoad] = useState(false);

  const validate = (values: login) => {
    const errors: login = {};

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values, { resetForm }) => {
      setLoad(true);
      dispatch(receiveLogin(values, history));
      setTimeout(() => {
        setLoad(false)
      }, 4000)
      //resetForm({ values: "" });
    },
  });
  return (
    <SectionWrapper src={process.env.PUBLIC_URL + "/assets/outdoor.png"}>
      <div className="container">
        <AuthBody>
          <CardWrapper>
            <LogoWrapper>Code Store</LogoWrapper>
            <CardTitle>Login</CardTitle>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-2" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  //   isInvalid={formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  //   isInvalid={formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              {load ? (
                <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
                  <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <div className="d-flex flex-column">
                  <Button className="mt-2" variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              )}
            </Form>
            <div className="pt-4">
              Not a member?{" "}
              <Link style={{ textDecoration: "none" }} to="/register">
                Register
              </Link>{" "}
              now !
            </div>
          </CardWrapper>
        </AuthBody>
      </div>
    </SectionWrapper>
  );
}
