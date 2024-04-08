import { User } from './UserType'
import { SuccessResponse } from './Utils.type'

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: string
  user: User
}>
