import { isUndefined, omitBy } from 'lodash'
import { ProductListConfig } from '../Types/Product.type'
import useQueryParams from './useQueryParams'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
const useQueryConfig = () => {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || 10,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      oder: queryParams.oder,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  return queryConfig
}
export default useQueryConfig
