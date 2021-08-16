import React from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik'
import { Box, Button, Input } from '@material-ui/core'
import FormField from '../shared/FormField'
import useLogin from '../../hooks/useLogin'

const LoginForm = () => {
  const [login, result] = useLogin()
  console.log(login)
  const validationSchema = Yup.object().shape({
    Username: Yup.string().required(),
    Password: Yup.string().required(),
  })
  console.log(result)
  return (
    <>
      <Formik
        initialValues={{ Username: '', Password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          login({
            variables: {
              loginUsername: values.Username,
              loginPassword: values.Password,
            },
          })
        }
      >
        {({ submitForm }) => (
          <>
            <FormField name="Username" label="Username" fullWidth>
              {({ field }) => <Input {...field} id={field.name} />}
            </FormField>
            <Box mb={2} />
            <FormField name="Password" label="Password" fullWidth>
              {({ field }) => (
                <Input {...field} id={field.name} type="password" />
              )}
            </FormField>
            <Box mb={2} />
            <Button
              onClick={submitForm}
              color="primary"
              variant="contained"
              fullWidth
            >
              Log in
            </Button>
          </>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
