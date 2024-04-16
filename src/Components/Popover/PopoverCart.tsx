import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import './PopoverCart.scss'
import { FiShoppingCart } from 'react-icons/fi'
import ButtonShoppe from '../ButtonShoppe/ButtonShoppe'
import { useQuery } from '@tanstack/react-query'
import { purchasesStatus } from '../../constants/purchase'
import purchaseApi from '../../Services/Purchase.api'
import { formatCurrency } from '../../Utils/Utils'

const PopoverCart = () => {
  const { data } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchaseList({ status: purchasesStatus.inCart })
  })

  const Cart = data?.data.data
  if (!Cart) return null
  const totalCart = Cart ? Cart.length : 0
  const maxCartShow = 5

  const popover = (
    <Popover className='popover-cart-container'>
      <Popover.Body className='popover-cart-content'>
        <div>Sản Phẩm Mới Thêm</div>
        {Cart ? (
          <>
            {Cart?.slice(0, maxCartShow).map((item) => {
              return (
                <div key={item._id} className='cart-item'>
                  <div className='cart-image'>
                    <img src={item.product.image} alt={item.product.name} />
                  </div>
                  <div className='cart-title'>
                    <p>{item.product.name}</p>
                  </div>
                  <div className='cart-price'>
                    <sup>đ</sup>
                    {formatCurrency(item.price)}
                  </div>
                </div>
              )
            })}
            <div className='popover-cart-footer'>
              <div>({totalCart > maxCartShow ? totalCart - maxCartShow : ''})Thêm Hàng Vào Giỏ</div>
              <div>
                <ButtonShoppe title='Xem giỏ hàng' />
              </div>
            </div>
          </>
        ) : (
          <div className='no-cart'>
            <img src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png' />
            <div>Chưa có hàng trong giỏ</div>
          </div>
        )}
      </Popover.Body>
    </Popover>
  )

  return (
    <OverlayTrigger trigger='click' placement='bottom' overlay={popover}>
      <div className='popover-cart-icon'>
        <FiShoppingCart style={{ cursor: 'pointer' }} size={26} />
        <div className='quantity'>{totalCart}</div>
      </div>
    </OverlayTrigger>
  )
}

export default PopoverCart
