import React from 'react'
import { useQuery } from 'react-query'
import { loadUser } from '../utils/storage'

const useFetchUser = () => {
  const fetchUser = React.useCallback(async () => {
    const user = await localStorage.getItem('bookzillaUser')
    console.log(user)
    return loadUser()
  }, [])
  return useQuery(['user'], fetchUser, { enabled: true })
}

export default useFetchUser
