import React from 'react'
import { gql, useQuery } from '@apollo/client'
import LoginPage from './components/login/LoginPage'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomePage from './components/home/HomePage'

const ALL_USERS = gql`
  query Query {
    allUsers {
      username
    }
  }
`

const App = () => {
  const { loading } = useQuery(ALL_USERS)

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />

        <Redirect to="/home" />
      </Switch>
      {/* <ToastMessage /> */}
    </>
  )
}

export default App
