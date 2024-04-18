import axios, { AxiosError, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { AuthResponse } from '../Types/Auth.type'
import { clearLS, getAccessTokenFormLS, getProfileFromLS, saveAccessTokenToLS, setProfileFromLS } from './Auth'

let accesstoken = getAccessTokenFormLS()
let profileUser = getProfileFromLS()

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
      profileUser = (response.data as AuthResponse).data?.user
      saveAccessTokenToLS(accesstoken)
      setProfileFromLS(profileUser)
    } else if (url === '/logout') {
      accesstoken = ''
      clearLS()
    }
    return response
  },
  function (error: AxiosError) {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      const data: any | undefined = error.response?.data
      const message = data.message || error.message
      toast.error(message)
    }
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      clearLS()
      window.location.reload
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
