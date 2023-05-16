import axios from 'axios'

const api = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.PROD ? '/api' : 'https://e-shop-v1.onrender.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
export default api
