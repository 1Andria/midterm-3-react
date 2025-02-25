import React from "react";
import * as yup from "yup";

export const SignSchema = yup.object().shape({
  email: yup.string().email("enter email").required("Can't be empty"),
  password: yup
    .string("Can't be empty")
    .required("Can't be empty")
    .max(17, "enough")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Invalid"),

  RepPassword: yup
    .string("Can't be empty")
    .required("Can't be empty")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
