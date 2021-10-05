import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { SignUp } from "../../Interface/interface";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegistrationSchema } from "../../Interface/schema";
import {
  SectionWrapper,
  CardWrapper,
  AuthBody,
  LogoWrapper,
  CardTitle,
} from "./style";
import { receiveSignUp } from "../../Redux/Actions/userActions";

export default function Register() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [load, setLoad] = useState(false);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
    } as SignUp,
    validationSchema: RegistrationSchema,
    onSubmit: (values: SignUp, { resetForm }) => {
      setLoad(true);
      dispatch(receiveSignUp(values, history))
      setTimeout(() => {
        setLoad(false)
      }, 4000)
      //   resetForm({ values: "" });
    },
  }); 

  return (
    <SectionWrapper src={process.env.PUBLIC_URL + "/assets/outdoor.png"}>
      <div className="container">
        <AuthBody>
          <CardWrapper>
            <LogoWrapper>Code Store</LogoWrapper>
            <CardTitle>Register</CardTitle>
            <Form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Group className="mb-2" controlId="fname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      value={formik.values.fname}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.fname != "" && formik.errors.fname != undefined}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.fname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group className="mb-2" controlId="lname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      value={formik.values.lname}
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.lname != "" && formik.errors.lname != undefined}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.lname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-2" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.email != "" && formik.errors.email != undefined}
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
                  isInvalid={formik.errors.password != "" && formik.errors.password != undefined}
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
              Already a member? <Link style={{textDecoration:'none'}} to="/login">Login</Link> now !
            </div>
          </CardWrapper>
        </AuthBody>
      </div>
    </SectionWrapper>
  );
}
