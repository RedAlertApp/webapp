import axios from "axios"
import qs from "qs"

export const login = async (email, password) => {
  const apiRoot = process.env.REACT_APP_SERVER_URL
  const data = { access_token: process.env.REACT_APP_API_MASTER_KEY }

  let response = await axios.post({
    url: `${apiRoot}/auth/`,
    auth: {
      email: email,
      password: password
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(data)
  })

  let user = response.body.user
  let token = response.body.token

  if (user && token) {
    localStorage.setItem("access_token", token)
  }

  return user
}
