import axiosInstance from '../Utils/axios'
import { AuthResponse } from 'Types/Auth.type'

export const postRegister = (body: { email: string; password: string }) => {
  return axiosInstance.post<AuthResponse>('/register', body)
}

export const postLogin = (body: { email: string; password: string }) => {
  return axiosInstance.post<AuthResponse>('/login', body)
}
