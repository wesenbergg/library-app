import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation Mutation($loginUsername: String!, $loginPassword: String!) {
    login(username: $loginUsername, password: $loginPassword) {
      value
    }
  }
`

export default function useLogin() {
  return useMutation(LOGIN, {
    onError: (error) => {
      console.log('error ', error)
    },
    onCompleted: ({ login }) => {
      console.log('onCompleted, ', login.value)
      localStorage.setItem('bookzillaUser', `bearer ${login.value}`)
    },
  })
}
