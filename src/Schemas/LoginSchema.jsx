import React from "react";
import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email("enter email").required("Can't be empty"),
  password: yup
    .string("Can't be empty")
    .required("Can't be empty")
    .max(16, "enough"),
});
