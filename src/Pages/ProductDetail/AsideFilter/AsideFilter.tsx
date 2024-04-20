import { AiOutlineBars } from 'react-icons/ai'
import { CiFilter } from 'react-icons/ci'
import ButtonShoppe from '../../../Components/ButtonShoppe/ButtonShoppe'
import { IoIosArrowDown } from 'react-icons/io'
import { FaStar } from 'react-icons/fa6'
import './AsideFilter.scss'
import { IoIosArrowForward } from 'react-icons/io'
import { QueryConfig } from '../ProductDetail'
import { Category } from '../../../Types/Categoty.type'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import path from '../../../constants/path'
import InputNumber from '../../../Components/InputNumber/InputNumber'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { omit } from 'lodash'
interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}

type FormData = {
  price_min: string
  price_max: string
}

const AsideFilter = ({ categories, queryConfig }: Props) => {
  const { category } = queryConfig
  const { control, watch, reset } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    }
  })

  const valueForm = watch()
  const nagivate = useNavigate()
  const [errorForm, setErrorForm] = useState<boolean>(false)

  const handleClickRatingFilter = (ratingFilter: number) => {
    nagivate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        rating_filter: String(ratingFilter)
      }).toString()
    })
  }

  const handleRemoveAllFilter = () => {
    reset()
    nagivate({
      pathname: path.home,
      search: createSearchParams(omit(queryConfig, ['price_min', 'price_max', 'rating_filter', 'category'])).toString()
    })
  }

  return (
    <>
      <div className='aside-container'>
        <div className='aside-header'>
          <AiOutlineBars /> Tất Cả Danh Mục
          <hr />
        </div>
        <div className='aside-category'>
          {categories.map((item, index) => {
            const isActive = category === item._id
            return (
              <>
                <Link
                  to={{
                    pathname: path.home,
                    search: createSearchParams({
                      ...queryConfig,
                      category: item._id
                    }).toString()
                  }}
                  key={index}
                  className={isActive ? `category-item active` : 'category-item'}
                >
                  {isActive ? <IoIosArrowForward /> : null}
                  {item.name}
                </Link>
              </>
            )
          })}
          <div>
            Thêm
            <IoIosArrowDown />
          </div>
        </div>
        <div className='aside-sort'>
          <div className='title'>
            <CiFilter size={24} /> Bộ Lọc Tìm Kiếm
            <hr />
          </div>
          <div className='sort-approx'>
            <div className='title'>Khoảng Giá</div>
            <form className='form-sort'>
              <Controller
                control={control}
                name='price_min'
                render={({ field }) => {
                  return <InputNumber type='text' placeholder='Từ' value={field.value} onChange={field.onChange} />
                }}
              />
              <Controller
                control={control}
                name='price_max'
                render={({ field }) => {
                  return <InputNumber type='text' placeholder='Đến' value={field.value} onChange={field.onChange} />
                }}
              />
            </form>
            {errorForm ? <div style={{ color: 'red', marginBottom: '10px' }}>Gía không hợp lệ</div> : <div></div>}
            <div
              onClick={() => {
                if (valueForm.price_max && Number(valueForm.price_min) >= Number(valueForm.price_max)) {
                  setErrorForm(true)
                  return null
                } else {
                  nagivate({
                    pathname: path.home,
                    search: createSearchParams({
                      ...queryConfig,
                      price_min: valueForm.price_min,
                      price_max: valueForm.price_max || ''
                    }).toString()
                  })
                }
              }}
              style={{ textAlign: 'center', backgroundColor: '#ee4d2d' }}
            >
              <ButtonShoppe title='Áp Dụng' />
            </div>
          </div>
          <div className='sort-rate'>
            <div className='title'>Đánh Giá</div>
            <div className='star'>
              <div
                onClick={() => {
                  handleClickRatingFilter(5)
                }}
                className='5-star star-row '
              >
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
              </div>
              <div
                onClick={() => {
                  handleClickRatingFilter(4)
                }}
                className='4-star star-row'
              >
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <div>Trở Lên</div>
              </div>
              <div
                onClick={() => {
                  handleClickRatingFilter(3)
                }}
                className='3-star star-row'
              >
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <div>Trở Lên</div>
              </div>
              <div
                onClick={() => {
                  handleClickRatingFilter(2)
                }}
                className='2-star star-row'
              >
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <div>Trở Lên</div>
              </div>
              <div>
                <IoIosArrowDown />
                Thêm
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            handleRemoveAllFilter()
          }}
          style={{ textAlign: 'center', backgroundColor: '#ee4d2d' }}
        >
          <ButtonShoppe title='Xóa Tất Cả' />
        </div>
      </div>
    </>
  )
}
export default AsideFilter
