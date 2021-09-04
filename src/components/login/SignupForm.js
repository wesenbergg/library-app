import { Button, Input } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import FormField from "../shared/FormField";
import * as Yup from "yup";
import useSignup from "../../hooks/useSignup";

const SignupForm = () => {
  const [signup] = useSignup();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    rePassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    favoriteGenre: Yup.string().optional(),
  });

  const handleSubmit = React.useCallback(
    (values) => {
      console.log(values);
      signup({
        variables: {
          createUserUsername: values.username,
          createUserFavoriteGenre: values.favoriteGenre,
        },
      });
    },
    [signup]
  );
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm }) => (
          <>
            <FormField name="username" label="Username*" fullWidth>
              {({ field }) => <Input {...field} id={field.name} fullWidth />}
            </FormField>
            <FormField name="password" label="Password*" fullWidth>
              {({ field }) => <Input {...field} id={field.name} fullWidth />}
            </FormField>
            <FormField name="rePassword" label="Re-enter Password*" fullWidth>
              {({ field }) => <Input {...field} id={field.name} fullWidth />}
            </FormField>
            <FormField name="favoriteGenre" label="Favorite Genre" fullWidth>
              {({ field }) => <Input {...field} id={field.name} fullWidth />}
            </FormField>
            <Button onClick={submitForm}>Sign up</Button>
          </>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
