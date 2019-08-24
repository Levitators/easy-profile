import React from "react";
import { withFormik } from "formik";

// Shape of form values
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  slug: string;
}

interface OtherProps {
  userdata: FormValues;
  updateUserData: Function;
  pushBack: Function;
}

export default withFormik<OtherProps, FormValues>({
  mapPropsToValues: ({ userdata }) => ({
    firstName: userdata.firstName,
    lastName: userdata.lastName,
    email: userdata.email,
    avatarUrl: userdata.avatarUrl,
    slug: userdata.slug
  }),

  // Custom sync validation
  validate: values => {
    let errors: any = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    return errors;
  },

  handleSubmit: (values, { props: { updateUserData, pushBack }, setSubmitting }) => {
    console.log(values);
    updateUserData({
      variables: {
        updatedUserData: {
          avatarUrl: values.avatarUrl,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          slug: values.slug
        }
      }
    }).then(() => {
      pushBack();
    });
  }
});
