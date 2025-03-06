import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form submitted", values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-4 border rounded">
          <div>
            <label>Username:</label>
            <Field type="text" name="username" className="border p-2" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" className="border p-2" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" className="border p-2" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 mt-4">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
