import React from 'react'
import TextInput from '../shared/TextInput'

import * as Yup from 'yup'
import { Formik } from 'formik'
import { Button, Input } from '@material-ui/core'

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
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
            <TextInput name="username" label="Username">
              {({ field }) => <Input {...field} id={field.name} />}
            </TextInput>
            <TextInput name="password" label="Password">
              {({ field }) => <Input {...field} id={field.name} />}
            </TextInput>
            <Button onSubmit={submitForm}>Save</Button>
          </>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
