import React from "react";
import * as yup from "yup";

export const SignSchema = yup.object().shape({
  email: yup.string().email("enter email").required("Can't be empty"),
  password: yup
    .string("Can't be empty")
    .required("Can't be empty")
    .max(16, "enough")
    .min(8, "too weak"),

  RepPassword: yup
    .string("Can't be empty")
    .required("Can't be empty")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
