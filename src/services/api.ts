import axios from 'axios'

export const BASE_URL = 'http://localhost:8080/'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
})

export default api
