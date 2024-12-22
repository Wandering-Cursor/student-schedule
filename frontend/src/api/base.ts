import { OpenAPIClientAxios } from 'openapi-client-axios/client'

const api = new OpenAPIClientAxios({
  definition: 'http://localhost:8000/api/schema/',
  axiosConfigDefaults: {
    baseURL: 'http://localhost:8000',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
})
api.init()

export { api }
