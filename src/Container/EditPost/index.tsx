import React from "react";
import { languages } from "../../Helpers/fakeData";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal";
import { getEditPostodal, editPost } from "../../Redux/Actions/postActions";
import { Post } from "../../Interface/interface";
import { ModalHead, FormLabel } from "./style";

export default function EditPost() {
  const display = useSelector((state: any) => state.post.editP);
  const post = useSelector((state: any) => state.post.postId);
  const allLang = useSelector((state: any) => state.post.allLang);
  const dispatch = useDispatch();

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
      title: post?.title,
      description: post?.description,
      language: post?.language,
      code: post?.code,
    },
    validate: validate,
    enableReinitialize: true,
    onSubmit: (values: Post, { resetForm }) => {
      dispatch(editPost({ ...values, id: post._id }));
      //resetForm({ values: "" });
    },
  });

  return (
    <Modal display={display} close={getEditPostodal}>
      <ModalHead>Edit Post</ModalHead>
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
            value={formik.values.language}
            onChange={formik.handleChange}
            // isInvalid={formik.errors.language}
          >
            <option value="">Select Any language</option>
            {allLang.map((item: any) => {
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
            style={{ height: "200px" }}
            as="textarea"
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
