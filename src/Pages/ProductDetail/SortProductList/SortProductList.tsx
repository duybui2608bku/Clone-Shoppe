import ButtonShoppe from '../../../Components/ButtonShoppe/ButtonShoppe'
import Form from 'react-bootstrap/Form'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import './SortProductList.scss'
const SortProductList = () => {
  return (
    <>
      <div className='sort-product-list-container'>
        <div className='sort-product'>
          <div className='title'>Sắp xếp theo</div>
          <ButtonShoppe title='Phổ Biến' />
          <ButtonShoppe title='Mới Nhất' bachGround='white' colorText='black' />
          <ButtonShoppe title='Bán Chạy' bachGround='white' colorText='black' />
          <Form.Select style={{ width: '200px', display: 'inline' }}>
            <option value='1'>Giá:Thấp đến cao</option>
            <option value='2'>Giá:Cao đến thấp</option>
          </Form.Select>
        </div>
        <div className='paginate'>
          <div className='current-page'>2/9</div>
          <div className='next-prev-page'>
            <div>
              <IoIosArrowBack />
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SortProductList
