import React from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Grid, Input } from "@material-ui/core";
import FormField from "../shared/FormField";
import useLogin from "../../hooks/useLogin";

const BookSearchInlineForm = () => {
  const [login] = useLogin();

  const validationSchema = Yup.object().shape({
    SearchTerm: Yup.string().required(),
    Genre: Yup.string().required(),
  });

  return (
    <>
      <Formik
        initialValues={{ SearchTerm: "", Genre: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          login({
            variables: {
              loginSearchTerm: values.SearchTerm,
              loginGenre: values.Genre,
            },
          })
        }
      >
        {({ submitForm }) => (
          <Grid container>
            <Grid item xs={6}>
              <FormField name="SearchTerm" label="Hakutermi" fullWidth>
                {({ field }) => <Input {...field} id={field.name} />}
              </FormField>
            </Grid>

            <Grid item xs={3}>
              <FormField name="Genre" label="Genre" fullWidth>
                {({ field }) => (
                  <Input {...field} id={field.name} type="Genre" />
                )}
              </FormField>
            </Grid>

            <Grid item xs={2}>
              <FormField name="Area" label="Alue" fullWidth>
                {({ field }) => (
                  <Input {...field} id={field.name} type="Area" />
                )}
              </FormField>
            </Grid>

            <Grid item xs={1}>
              <Button
                onClick={submitForm}
                color="primary"
                variant="contained"
                fullWidth
              >
                Search
              </Button>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  );
};

export default BookSearchInlineForm;
