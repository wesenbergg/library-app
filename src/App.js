import React from 'react'
import { gql, useQuery } from '@apollo/client'
import LoginForm from './components/login/LoginForm'

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

  return <LoginForm />
}

export default App
