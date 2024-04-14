import { Category } from 'src/Types/Categoty.type'
import { SuccessResponse } from '../Types/Utils.type'
import axiosInstance from '../Utils/axios'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return axiosInstance.get<SuccessResponse<Category[]>>(URL)
  }
}

export default categoryApi
