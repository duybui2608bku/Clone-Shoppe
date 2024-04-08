export const saveAccessTokenToLS = (access_token: string) => {
  return localStorage.setItem('access_token', access_token)
}

export const clearAcccessTokenFormLS = () => {
  return localStorage.removeItem('access_token')
}

export const getAccessTokenFormLS = () => {
  return localStorage.getItem('access_token') || ''
}
