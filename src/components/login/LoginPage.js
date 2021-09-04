import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import LoginForm from './LoginForm'

const useStyles = makeStyles({
  container: {
    display: 'block',
    height: '60vh',
    minHeight: 600,
    backgroundColor: '#B4885F',
    borderRadius: 6,
  },
  grey: {
    backgroundColor: '#c4c4c4',
    height: '95%',
    minHeight: 580,
    borderRadius: 3,
  },
  grid1: {
    textAlign: 'center',
  },
  grid2: {
    backgroundColor: '#dddddd',
    marginLeft: 20,
    marginRight: 20,
    height: 'calc(100% - 20px)',
    position: 'relative',
  },
})

const LoginPage = () => {
  const styles = useStyles()
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Container maxWidth="lg" className={`${styles.container} center`}>
        <div className={styles.grey}>
          <Grid container style={{ height: '100%' }}>
            <Grid xs={6}>
              <div style={{ borderRight: '3px solid #3337', height: '100%' }}>
                <div className={`${styles.grid1} ${styles.grid2}`}>
                  <div className="center">
                    <h3>Welcome</h3>
                    <p>Enter your credentials here.</p>
                    <hr />
                    <p>or</p>
                    <hr />
                    <Button variant="outlined">Sign up</Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={6}>
              <div className={styles.grid2}>
                <div className="center" style={{ width: '90%' }}>
                  <LoginForm />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default LoginPage
