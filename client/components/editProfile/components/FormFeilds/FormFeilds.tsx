import React, { Fragment } from "react";
import { CompositeComponent, Form, Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import Provider from "./FormFeildsProvider";

interface OtherProps {
  userdata: FormValues;
  updateUserData: Function;
  pushBack: Function;
}

// Shape of form values
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  slug: string;
}

const AddTodo: CompositeComponent<OtherProps> = (props: OtherProps) => {
  return (
    <Form>
      <Field type="text" component={TextField} name="firstName" label="First name" variant="outlined" />
      <ErrorMessage name="firstName" component="div" />
      <Field type="text" component={TextField} name="lastName" label="Last name" variant="outlined" />
      <ErrorMessage name="lastName" component="div" />
      <button className="edit" type="submit">Save</button>
    </Form>
  );
};

export default Provider(AddTodo);
