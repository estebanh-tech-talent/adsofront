import axios from 'axios'

const apiURL = {
  DEV: import.meta.env.VITE_API_URL_DEV,
  PROD: import.meta.env.VITE_API_URL_PROD,
  INTERNAL: import.meta.env.VITE_API_URL_INTERNAL,
}

console.log(import.meta.env.RAILWAY_PRIVATE_DOMAIN)
console.log(import.meta.env.VITE_RAILWAY_PRIVATE_DOMAIN)

const env = import.meta.env.VITE_MODE as keyof typeof apiURL

// const apiURL =
//   import.meta.env.VITE_MODE === 'PROD'
//     ? import.meta.env.VITE_API_URL_PROD
//     : import.meta.env.VITE_API_URL_DEV

console.log(`API URL: ${apiURL[env]}`)
console.log(`Environment: ${env}`)

const axiosInstance = axios.create({
  // baseURL: apiURL[env],
  // baseURL: 'http://fastapiadso.railway.internal',
  baseURL: 'fastapiadso.railway.internal',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
