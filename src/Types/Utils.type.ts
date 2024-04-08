export interface SuccessResponse<Data> {
  mesage: string
  data: Data
}

export interface ErrorResponse<Data> {
  mesage: string
  data?: Data
}
