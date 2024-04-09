import { User } from '../Types/UserType'

export const saveAccessTokenToLS = (access_token: string) => {
  return localStorage.setItem('access_token', access_token)
}

export const clearLS = () => {
  return localStorage.removeItem('access_token')
}

export const getAccessTokenFormLS = () => {
  return localStorage.getItem('access_token') || ''
}

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfileFromLS = (profile: User) => {
  return localStorage.setItem('profile', JSON.stringify(profile))
}
