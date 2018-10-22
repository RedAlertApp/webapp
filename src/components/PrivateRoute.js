import React from "react"
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...children }) => (
  <Route
    {...children}
    render={props =>
      localStorage.getItem("access_token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
)
