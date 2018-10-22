import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"
import history from "./history"
import { logout } from "./actions"

import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { PrivateRoute } from "./components/PrivateRoute"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        {/* Fix logout */}
        <Route
          path="/logout"
          onEnter={() => {
            store.dispatch(logout())
          }}
        />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
