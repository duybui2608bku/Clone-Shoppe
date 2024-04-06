import { User } from './UserType'
import { ResponseApi } from './Utils.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
