import { User } from '../Types/UserType'
import { SuccessResponse } from '../Types/Utils.type'
import axiosInstance from '../Utils/axios'

export interface BodyUpdateProfile extends Omit<User, '_id' | 'role' | 'createdAt' | 'updatedAt'> {
  password?: string
  newPassword?: string
}

const UserApi = {
  getProfile() {
    return axiosInstance.get<SuccessResponse<User>>('me')
  },
  updateProfile(body: BodyUpdateProfile) {
    return axiosInstance.put('user', body)
  },
  upLoadAvatar(body: FormData) {
    return axiosInstance.post<SuccessResponse<string>>('user/upload-avatar', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default UserApi
