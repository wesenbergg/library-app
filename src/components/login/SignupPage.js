import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import SignupForm from './SignupForm'

const useStyles = makeStyles({
  container: {
    border: '4px solid brown',
  },
})
const SignupPage = () => {
  const styles = useStyles()
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container>
        <Grid xs={6}>
          <h3>Welcome to Bookzilla</h3>
          <p>Enter your credentials here.</p>
          <hr />
          <p>or</p>
          <hr />
          <Button>Log in</Button>
        </Grid>
        <Grid xs={6}>
          <SignupForm />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SignupPage
