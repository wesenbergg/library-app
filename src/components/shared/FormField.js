import React from 'react'
import PropTypes from 'prop-types'

import { FormControl, FormLabel, Hidden } from '@material-ui/core'
import { FastField, Field, FieldArray } from 'formik'
import { get, isEmpty } from 'lodash'
import FormErrorMessage from './FormErrorMessage'

function isFieldTouchedAndErrored({ field, form, name }) {
  const fieldName = get(field, 'name', name)
  const touched = get(form, `touched.${fieldName}`, false)
  const error = get(form, `errors.${fieldName}`, '')
  return touched && !isEmpty(error)
}

const FormField = ({ fieldType, label, name, children, ...otherProps }) => {
  const renderFormControl = React.useCallback(
    (fieldProps) => {
      const error = isFieldTouchedAndErrored(fieldProps)
      return (
        <FormControl {...otherProps} error={error}>
          <Hidden>
            <FormLabel htmlFor={name}>{label}</FormLabel>
          </Hidden>
          {children(fieldProps)}
          <FormErrorMessage name={name} />
        </FormControl>
      )
    },
    [otherProps, children, name, label]
  )

  switch (fieldType) {
    case 'fast':
      return <FastField name={name}>{renderFormControl}</FastField>
    case 'array':
      return <FieldArray name={name}>{renderFormControl}</FieldArray>
    default:
      return <Field name={name}>{renderFormControl}</Field>
  }
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  fieldTypes: PropTypes.oneOf(['fast', 'array']),
}

FormField.defaultProps = {
  fieldType: '',
  label: '',
  name: '',
}

export default FormField
