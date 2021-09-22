import React from "react";
import { languages } from "../../Helpers/fakeData";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { useFormik } from "formik";
import { Form, Button, Col } from "react-bootstrap";
import { getAddPostodal, createPost } from "../../Redux/Actions/postActions";
import { Post } from "../../Interface/interface";
import { ModalHead, FormLabel } from "./style";

export default function AddPost() {
  const dispatch = useDispatch();
  const display = useSelector((state: any) => state.post.addP);
  const allLang = useSelector((state: any) => state.post.allLang);

  const validate = (values: Post) => {
    const errors: Post = {};

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.description) {
      errors.description = "Required";
    }

    if (!values.language) {
      errors.language = "Required";
    }

    if (!values.code) {
      errors.code = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      language: "",
      code: "",
    },
    validate: validate,
    onSubmit: (values: Post, { resetForm }) => {
      dispatch(createPost(values));
      //resetForm({ values: "" });
    },
  });

  return (
    <Modal display={display} close={getAddPostodal}>
      <ModalHead>Add Post</ModalHead>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="title">
          <FormLabel>Title</FormLabel>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={formik.values.title}
            onChange={formik.handleChange}
            // isInvalid={formik.errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-3" controlId="description">
          <FormLabel>Description</FormLabel>
          <Form.Control
            style={{ height: "100px" }}
            as="textarea"
            placeholder="Enter Code description"
            value={formik.values.description}
            onChange={formik.handleChange}
            // isInvalid={formik.errors.desc}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
        <Form.Group className="mt-3" controlId="language">
          <FormLabel>Select Language</FormLabel>
          <Form.Control
            as="select"
            onChange={formik.handleChange}
            // isInvalid={formik.errors.language}
          >
            <option value="">Select Any language</option>
            {allLang.map((item) => {
              return (
                <option key={item._id} value={item.language}>
                  {item.language}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {formik.errors.language}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="pt-3 mb-3" controlId="code">
          <FormLabel>Code</FormLabel>
          <Form.Control
            as="textarea"
            style={{ height: "200px" }}
            placeholder="Enter Code"
            value={formik.values.code}
            onChange={formik.handleChange}
            // isInvalid={formik.errors.code}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.code}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Snippet
        </Button>
      </Form>
    </Modal>
  );
}
