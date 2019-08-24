import React from "react";
import { Redirect } from "react-router-dom";

const RedirectToLogin = () => {
  return <Redirect to="/login" />;
};

export default RedirectToLogin;
