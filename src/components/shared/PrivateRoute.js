import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import PrivateNavigation from './PrivateNavigation'
import useFetchUser from '../../hooks/useFetchUser'

/**
 * Private route component. Renders the child components if the user is logged in
 * (and in an authorized role for the route). If the user isn't logged in they are
 * redirected to the landing page (login/signup). If the user is logged in but doesn't have
 * the correct role, they are redirected to the home page. Used inside Switch component that is imported from 'react-router-dom'.
 * @exports components/PrivateRoute
 * @param {Object} props
 * @param {(boolean | undefined)} props.loggedIn User's loggedIn status. Can be undefined if user isn't loggedIn.
 * @param {string} props.path Route's path
 * @param {node} props.children Components that the route renders.
 * @param {string} [props.role] Required if private route is role specific. User's current role.
 * @param {("worker"|"business"|"agency")} [props.roles] Required if private route is role specific.
 */
const PrivateRoute = ({ loggedIn = true, children, ...rest }) => {
  const { data: user } = useFetchUser()
  console.log(user)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!loggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }

        return <PrivateNavigation>{children}</PrivateNavigation>
      }}
    />
  )
}

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PrivateRoute
