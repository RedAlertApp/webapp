import {
  INIT_SOCKET,
  UPDATE_REPORTS,
  UPDATE_CENTER,
  SHOW_MARKER_WINDOW,
  HIDE_MARKER_WINDOW,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "./actionTypes"

import history from "../history"

import { userService } from "../services"

export const initSocket = socket => {
  return {
    type: INIT_SOCKET,
    payload: socket
  }
}

export const updateReports = reports => {
  return {
    type: UPDATE_REPORTS,
    payload: reports
  }
}

export const updateCenter = center => {
  return {
    type: UPDATE_CENTER,
    payload: center
  }
}

export const showMarkerWindow = data => {
  return {
    type: SHOW_MARKER_WINDOW,
    payload: data
  }
}

export const hideMarkerWindow = () => {
  return {
    type: HIDE_MARKER_WINDOW
  }
}

export const login = (email, password) => {
  return async dispatch => {
    let result = await userService.login(email, password)
    if (result.user) {
      dispatch(loginSuccess(result.user))
      history.push("/")
    } else {
      dispatch(loginError(result.error))
    }
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

export const loginError = error => {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export const logout = () => {
  userService.logout()
  history.push("/")
}
