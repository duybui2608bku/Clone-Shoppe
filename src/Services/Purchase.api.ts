import { Purchase, PurchaseListStatus } from '../Types/Purchase.type'
import { SuccessResponse } from '../Types/Utils.type'
import axiosInstance from '../Utils/axios'

const URL = 'purchases'

const purchaseApi = {
  addToCart(body: { product_id: string; buy_count: number }) {
    return axiosInstance.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, body)
  },
  getPurchaseList(params: { status: PurchaseListStatus }) {
    return axiosInstance.get<SuccessResponse<Purchase[]>>(`${URL}`, {
      params
    })
  },
  buyProducts(body: { product_id: string; buy_count: number }[]) {
    return axiosInstance.post<SuccessResponse<Purchase[]>>(`${URL}/buy-products`, body)
  },
  updateProducts(body: { product_id: string; buy_count: number }) {
    return axiosInstance.put<SuccessResponse<Purchase>>(`${URL}/update-purchase`, body)
  },
  deleteProducts(purchaseIds: string[]) {
    return axiosInstance.delete<SuccessResponse<{ deleted_count: number }>>(`${URL}`, {
      data: purchaseIds
    })  
  }
}

export default purchaseApi
