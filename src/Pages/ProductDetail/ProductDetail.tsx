import Carousel from 'react-bootstrap/Carousel'
import CaroseImageProductList from './CaroseImageProductList'
import './ProductDetail.scss'
import AsideFilter from './AsideFilter/AsideFilter'
import SortProductList from './SortProductList/SortProductList'
import useQueryParams from '../../Hooks/useQueryParams'
import productApi from '../../Services/Products.api'
import { useQuery } from '@tanstack/react-query'
import { formatCurrency, formatNumberToSocialStyle } from '../../Utils/Utils'
import ProductRating from '../../Components/ProductRating/ProductRating'
import Pagination from '../../Components/Paginate/Pagination'
import { ProductListConfig } from '../../Types/Product.type'
import { isUndefined, omitBy } from 'lodash'
import categoryApi from '../../Services/CategotyApi.api'
import { useNavigate } from 'react-router-dom'
import path from '../../constants/path'
import { generateNameId } from '../../Types/Utils.type'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

const ProductDetail = () => {
  const images = [
    'https://cf.shopee.vn/file/vn-50009109-410a98988272057c05c79c48f961163d',
    'https://cf.shopee.vn/file/vn-50009109-19d69c5fcf41b8d1fd381921ae6f1a6c',
    'https://cf.shopee.vn/file/856d76a2fb06e2fbf00a82d2e37151d9',
    'https://cf.shopee.vn/file/vn-50009109-125f54721ac486beb0292aa843198757',
    'https://cf.shopee.vn/file/vn-50009109-29bad63c01fc4790059f36ff979d77ae',
    'https://cf.shopee.vn/file/vn-50009109-82c3a458f0b6eb3dff94e8acae1a919f',
    'https://cf.shopee.vn/file/vn-50009109-0cedc0eb80813f8b8ee8ebc2812c3cfa'
  ]
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

  const { data: productsData } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    }
  })

  const { data: categoryData } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })

  const nagivate = useNavigate()

  const caculateDiscount = (priceOld: number, priceNew: number): number => {
    return Math.ceil(((priceOld - priceNew) / priceOld) * 100)
  }

  return (
    <>
      <div className='products-detail-container'>
        <div className='products-slider'>
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index} interval={index === 0 ? 1000 : 500}>
                <CaroseImageProductList images={[image]} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='product-mall'>
          <div className='title'>Shoppe Mall</div>
          <div className='image'>
            <img src='https://down-vn.img.susercontent.com/file/513f589c10254512669d3d8b50a6dea7' />
            <img src='https://down-vn.img.susercontent.com/file/5c1936f863ed34b0e77299b2dbb96365' />
            <img src='https://down-vn.img.susercontent.com/file/573699fb35b480bae467c33e237bef2b' />
            <img src='https://down-vn.img.susercontent.com/file/25f5e7c890cb12fe390cdebe899b1b9a' />
            <img src='https://down-vn.img.susercontent.com/file/21c730c26e8d3a6fab107a6ea75c057a' />
            <img src='https://down-vn.img.susercontent.com/file/513f589c10254512669d3d8b50a6dea7' />
            <img src='https://down-vn.img.susercontent.com/file/5c1936f863ed34b0e77299b2dbb96365' />
            <img src='https://down-vn.img.susercontent.com/file/573699fb35b480bae467c33e237bef2b' />
            <img src='https://down-vn.img.susercontent.com/file/25f5e7c890cb12fe390cdebe899b1b9a' />
            <img src='https://down-vn.img.susercontent.com/file/21c730c26e8d3a6fab107a6ea75c057a' />
          </div>
        </div>
        <div className='product-detail-item'>
          <div className='product-detail-item-left'>
            <AsideFilter queryConfig={queryConfig} categories={categoryData?.data.data || []} />
          </div>
          <div className='product-detail-item-right'>
            {productsData && (
              <>
                <div className='sort'>
                  <SortProductList queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
                </div>
                <div className='product-item-container'>
                  {productsData &&
                    productsData?.data.data.products.map((products, index) => {
                      return (
                        <>
                          <div
                            onClick={() => {
                              nagivate(`${path.home}${generateNameId({ name: products.name, id: products._id })}`)
                            }}
                            key={index}
                            className='products-item'
                          >
                            <div className='products-image'>
                              <img src={products.image} />
                            </div>
                            <div className='products-title'>
                              <p>{products.name}</p>
                            </div>
                            <div className='products-price'>
                              <div className='price-old'>
                                <sup>đ</sup>
                                {formatCurrency(products.price_before_discount)}
                              </div>
                              <div className='price-new'>
                                <sup>đ</sup>
                                {formatCurrency(products.price)}
                              </div>
                            </div>
                            <div className='products-sold'>
                              <div>
                                <ProductRating rating={products.rating} />
                              </div>
                              <div style={{ fontSize: '12px' }}>Đã bán {formatNumberToSocialStyle(products.sold)}</div>
                            </div>
                            <div className='discount'>
                              {caculateDiscount(products.price_before_discount, products.price)}%
                            </div>
                          </div>
                        </>
                      )
                    })}
                </div>
                <Pagination queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
