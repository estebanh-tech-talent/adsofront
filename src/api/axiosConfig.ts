import axios from 'axios'

const apiURL =
  import.meta.env.VITE_MODE === 'PROD'
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV

const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
