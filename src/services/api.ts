import axios from 'axios'

export const BASE_URL = 'https://localhost.com/8080/'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
})

export default api
