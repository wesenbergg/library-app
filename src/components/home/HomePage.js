import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const history = useHistory()
  return (
    <>
      <h1>HomePage</h1>
      <Button onClick={() => history.push('/login')}>login</Button>
    </>
  )
}

export default HomePage
