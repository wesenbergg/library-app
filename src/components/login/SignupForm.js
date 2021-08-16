import { Button, Input } from '@material-ui/core'
import { Formik } from 'formik'
import React from 'react'
import FormField from '../shared/FormField'
import * as Yup from 'yup'

const SignupForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  })
  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ submitForm }) => (
          <>
            <FormField name="username" label="Username" fullWidth>
              {({ field }) => <Input {...field} id={field.name} fullWidth />}
            </FormField>
            <FormField name="password" label="Password" fullWidth>
              {({ field }) => <Input {...field} id={field.name} fullWidth />}
            </FormField>
            <Button onSubmit={submitForm}>Sign up</Button>
          </>
        )}
      </Formik>
    </>
  )
}

export default SignupForm
