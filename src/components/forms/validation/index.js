import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required("email is required"),
  password: yup.string().required("password is required"),
});

export { loginSchema };
