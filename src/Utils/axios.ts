import axios, { AxiosError, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { AuthResponse } from '../Types/Auth.type'
import { clearAcccessTokenFormLS, getAccessTokenFormLS, saveAccessTokenToLS } from './Auth'

let accesstoken = getAccessTokenFormLS()

const axiosInstance = axios.create({
  baseURL: 'https://api-ecom.duthanhduoc.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (accesstoken && config.headers) {
      config.headers.Authorization = accesstoken
      return config
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    const { url } = response.config
    if (url === '/login' || url === '/register') {
      accesstoken = (response.data as AuthResponse).data?.access_token
      saveAccessTokenToLS(accesstoken)
    } else if (url === '/logout') {
      accesstoken = ''
      clearAcccessTokenFormLS()
    }
    return response
  },
  function (error: AxiosError) {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      const data: any | undefined = error.response?.data
      const message = data.message || error.message
      toast.error(message)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
