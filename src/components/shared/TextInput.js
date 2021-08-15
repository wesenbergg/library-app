import React from 'react'
import PropTypes from 'prop-types'

import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core'
const TextInput = ({ label, textHelper }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">{label}</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">{textHelper}</FormHelperText>
    </FormControl>
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  textHelper: PropTypes.string,
}

TextInput.defaultProps = {
  label: '',
  textHelper: '',
}

export default TextInput
