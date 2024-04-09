import axiosInstance from '../Utils/axios'
import { Product, ProductList, ProductListConfig } from '../Types/Product.type'
import { SuccessResponse } from '../Types/Utils.type'

const URL = 'products'

const productApi = {
  getProducts(params: ProductListConfig) {
    return axiosInstance.get<SuccessResponse<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return axiosInstance.get<SuccessResponse<Product>>(`${URL}/${id}`)
  }
}

export default productApi
