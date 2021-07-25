import { Formik } from "formik";
import React from "react";
import { loginSchema } from "./validation";

const LoginForm = (handleSubmit, formLoading) => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="false"
            />
            <br />
            {!!errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="false"
            />
            <br />
            {!!errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <button type="submit">{formLoading ? "..." : "sign in"}</button>
          </form>
        );
      }}
    </Formik>
  );
};

export { LoginForm };
