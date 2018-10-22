import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Input from "@material-ui/core/Input"

import { login } from "../actions"

import "./Login.css"
import { TextField } from "@material-ui/core"

export class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  submitLogin = e => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <Typography variant="h2">RedAlert Logowanie</Typography>
              <Typography>Wprowadź email i hasło do konta urzędnika</Typography>
            </div>
            <form onSubmit={this.submitLogin}>
              <div className="form-group">
                <TextField
                  label="Adres e-mail"
                  fullWidth
                  type="email"
                  name="inputEmail"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
              </div>

              <div className="form-group">
                <TextField
                  label="Hasło"
                  fullWidth
                  type="password"
                  name="inputPassword"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                />
              </div>
              <div className="forgot">
                <a href="reset.html">
                  Zapomniałeś hasła? <small>nie nasz problem</small>
                </a>
              </div>
              <Button variant="contained" color="primary" type="submit">
                Zaloguj się
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
