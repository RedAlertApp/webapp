import axios from "axios"
import qs from "qs"
import { ACCESS_TOKEN_ITEM_NAME } from "../constants"

const login = async (email, password) => {
  const apiRoot = process.env.REACT_APP_SERVER_URL
  const data = { access_token: process.env.REACT_APP_API_MASTER_KEY }

  let url = `${apiRoot}/auth/`

  let response = await axios({
    method: "post",
    url: url,
    auth: {
      username: email,
      password: password
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(data)
  })

  let user = response.data.user
  let token = response.data.token

  let result = {}

  if (user && token) {
    localStorage.setItem(ACCESS_TOKEN_ITEM_NAME, token)
    result.user = user
  } else {
    result.error = response.data
  }

  return result
}

const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_ITEM_NAME)
}

export const userService = {
  login,
  logout
}
