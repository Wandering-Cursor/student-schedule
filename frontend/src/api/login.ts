import apiClient from './client'
import { getCSRFToken } from './csrf'

async function performLoginRequest(username: string, password: string) {
  let csrf = (await getCSRFToken()).csrf;

  function makeRequest() {
    return apiClient.post(
      '/api-auth/login/',
      {
        username: username,
        password: password,
        submit: 'Log in',
        csrfmiddlewaretoken: csrf,
      },
      { withCredentials: true },
    )
  }

  let request = makeRequest()
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      if (!error.response) {
        console.error('Network error')
      }
      if (error.response.status == 403) {
        console.error('Login failed', error)
      }
    })
}

export { performLoginRequest }
