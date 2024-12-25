import { OpenAPIClientAxios } from 'openapi-client-axios/client'

let baseAPIUrl = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : 'http://localhost:8000'

const api = new OpenAPIClientAxios({
  definition: `${baseAPIUrl}/api/schema/`,
  axiosConfigDefaults: {
    baseURL: baseAPIUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
})
api.init()

export { api }
