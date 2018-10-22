import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Input from "@material-ui/core/Input"

import { login } from "../actions"

import "./Login.css"
import { TextField, Grid } from "@material-ui/core"

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
      <Grid container justify="center">
        <Grid item xs={3}>
          <div className="login-form">
            <Typography variant="h5">RedAlert Logowanie</Typography>
            <Typography>Wprowadź email i hasło do konta urzędnika</Typography>
            <form onSubmit={this.submitLogin}>
              <TextField
                label="Adres e-mail"
                fullWidth
                type="email"
                name="inputEmail"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />

              <TextField
                label="Hasło"
                fullWidth
                type="password"
                name="inputPassword"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
              <Typography>
                <a href="reset.html">
                  Zapomniałeś hasła? <small>nie nasz problem</small>
                </a>
              </Typography>
              <Button variant="contained" color="primary" type="submit">
                Zaloguj się
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
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
