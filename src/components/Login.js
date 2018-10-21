import React, { Component } from "react"
import { connect } from "react-redux"

import { login } from "../actions"

import "./Login.css"

export class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  submitLogin = e => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    return (
      <div class="container">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <h2>RedAlert Logowanie</h2>
              <p>Wprowadź login i hasło do konta urzędnika</p>
            </div>
            <form id="Login" onSubmit={this.submitLogin.bind(this)}>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Adres e-mail"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>

              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Hasło"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </div>
              <div class="forgot">
                <a href="reset.html">
                  Zapomniałeś hasła? <small>nie nasz problem</small>
                </a>
              </div>
              <button type="submit" class="btn btn-primary">
                Zaloguj się
              </button>
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
