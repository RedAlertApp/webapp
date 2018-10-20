import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"
import history from "./history"

import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { PrivateRoute } from "./components/PrivateRoute"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
