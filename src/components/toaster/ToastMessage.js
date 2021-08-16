import React from 'react'
import Alert from '@material-ui/lab/Alert'

const ToastMessage = ({ type, message }) => {
  return (
    <Alert variant="filled" severity="error">
      This is an error alert — check it out!
    </Alert>
  )
}

export default ToastMessage
