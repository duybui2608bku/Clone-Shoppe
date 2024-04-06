import axios, { AxiosError, HttpStatusCode } from 'axios'
import { isAxiousUnprocessableEntity } from './Utils'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
  baseURL: 'https://api-ecom.duthanhduoc.com/',
  timeout: 10000, // Thời gian timeout (miliseconds), nếu API không trả về trong khoảng thời gian này, request sẽ bị hủy
  headers: {
    'Content-Type': 'application/json'
    // 'Authorization': `Bearer ${token}`  // Nếu bạn muốn thêm token vào headers
  }
})

axios.interceptors.response.use(
  function (response) {
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
