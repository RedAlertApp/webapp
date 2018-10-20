import React from "react"
import "./Login.css"

export default function Login(props) {
  return (
    <div class="container">
      <div class="login-form">
        <div class="main-div">
          <div class="panel">
            <h2>RedAlert Logowanie</h2>
            <p>Wprowadź login i hasło do konta urzędnika</p>
          </div>
          <form id="Login">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Adres e-mail"
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Hasło"
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
