import ButtonShoppe from '../../../Components/ButtonShoppe/ButtonShoppe'
import Form from 'react-bootstrap/Form'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { QueryConfig } from '../ProductDetail'
import './SortProductList.scss'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { sortBy, order as oderConstants } from '../../../constants/product'
import path from '../../../constants/path'
import { ProductListConfig } from '../../../Types/Product.type'
import { omit } from 'lodash'
interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

const SortProductList = ({ queryConfig, pageSize }: Props) => {
  const page = Number(queryConfig.page)
  const { sort_by = sortBy.createdAt } = queryConfig
  const naviagte = useNavigate()
  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }

  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    naviagte({
      pathname: path.home,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handlePriceOder = (oderValue: Exclude<ProductListConfig['oder'], undefined>) => {
    naviagte({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: oderValue
      }).toString()
    })
  }
  return (
    <>
      <div className='sort-product-list-container'>
        <div className='sort-product'>
          <div className='title'>Sắp xếp theo</div>
          <button style={{ border: 'none' }} onClick={() => handleSort(sortBy.view)}>
            <ButtonShoppe
              title='Phổ Biến'
              backGround={isActiveSortBy(sortBy.view) ? '' : 'white'}
              colorText={isActiveSortBy(sortBy.view) ? '' : 'black'}
            />
          </button>
          <button style={{ border: 'none' }} onClick={() => handleSort(sortBy.createdAt)}>
            <ButtonShoppe
              title='Mới Nhất'
              backGround={isActiveSortBy(sortBy.createdAt) ? '' : 'white'}
              colorText={isActiveSortBy(sortBy.createdAt) ? '' : 'black'}
            />
          </button>
          <button style={{ border: 'none' }} onClick={() => handleSort(sortBy.sold)}>
            <ButtonShoppe
              title='Bán Chạy'
              backGround={isActiveSortBy(sortBy.sold) ? '' : 'white'}
              colorText={isActiveSortBy(sortBy.sold) ? '' : 'black'}
            />
          </button>
          <Form.Select
            onChange={(e) => handlePriceOder(e.target.value as Exclude<ProductListConfig['oder'], undefined>)}
            // value={oder || ''}
            style={{ width: '200px', display: 'inline' }}
          >
            <option value={oderConstants.asc}>Giá:Thấp đến cao</option>
            <option value={oderConstants.desc}>Giá:Cao đến thấp</option>
          </Form.Select>
        </div>
        <div className='paginate'>
          <div className='current-page'>
            <span style={{ color: '#ee4d2d' }}>{queryConfig.page}</span>/{pageSize}
          </div>
          <div className='next-prev-page'>
            <div>
              <Link
                to={{
                  pathname: '/',
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page - 1).toString()
                  }).toString()
                }}
              >
                <IoIosArrowBack />
              </Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page + 1).toString()
                  }).toString()
                }}
              >
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SortProductList
