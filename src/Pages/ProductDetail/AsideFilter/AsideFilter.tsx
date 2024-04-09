import { AiOutlineBars } from 'react-icons/ai'
import { CiFilter } from 'react-icons/ci'
import ButtonShoppe from '../../../Components/ButtonShoppe/ButtonShoppe'
import { IoIosArrowDown } from 'react-icons/io'
import { FaStar } from 'react-icons/fa6'
import './AsideFilter.scss'
import { IoIosArrowForward } from 'react-icons/io'
const AsideFilter = () => {
  return (
    <>
      <div className='aside-container'>
        <div className='aside-header'>
          <AiOutlineBars /> Tất Cả Danh Mục
          <hr />
        </div>
        <div className='aside-category'>
          <div className='category-item'>
            {' '}
            <IoIosArrowForward />
            Thời Trang Nam
          </div>
          <div className='category-item'>Áo Khoác</div>
          <div className='category-item'>Áo Vest</div>
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
              <input placeholder='Từ' />
              <input placeholder='Đến' />
            </form>
            <div style={{ textAlign: 'center', backgroundColor: '#ee4d2d' }}>
              <ButtonShoppe title='Áp Dụng' />
            </div>
          </div>
          <div className='sort-rate'>
            <div className='title'>Đánh Giá</div>
            <div className='star'>
              <div className='5-star star-row '>
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
              </div>
              <div className='4-star star-row'>
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <div>Trở Lên</div>
              </div>
              <div className='3-star star-row'>
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'rgb(255, 206, 61)', stroke: 'black', strokeWidth: '5' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <FaStar style={{ fill: 'white', stroke: 'black', strokeWidth: '20' }} />
                <div>Trở Lên</div>
              </div>
              <div className='2-star star-row'>
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
        <ButtonShoppe title='Xóa Tất Cả' />
      </div>
    </>
  )
}
export default AsideFilter
