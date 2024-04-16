import { useQuery } from '@tanstack/react-query'
import QuantityController from '../../Components/QuantityController/QuantityController'
import './Cart.scss'
import { BsTicketPerforated } from 'react-icons/bs'
import { purchasesStatus } from '../../constants/purchase'
import purchaseApi from '../../Services/Purchase.api'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/App.context'
import { formatCurrency } from '../../Utils/Utils'
import ButtonShoppe from '../../Components/ButtonShoppe/ButtonShoppe'
import { Purchase } from '../../Types/Purchase.type'
import { produce } from 'immer'

interface ExtendePurchase extends Purchase {
  disable: boolean
  checked: boolean
}

const Cart = () => {
  const { isAuthenticated } = useContext(AppContext)
  const { data } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchaseList({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })
  const Cart = data?.data.data

  const [extenedPurchase, setExtenedPurchase] = useState<ExtendePurchase[]>([])
  const isAllChecked = extenedPurchase.every((purchase) => purchase.checked)
  useEffect(() => {
    if (Cart) {
      setExtenedPurchase(
        Cart.map((purchase) => ({
          ...purchase,
          disable: false,
          checked: false
        }))
      )
    }
  }, [Cart])

  console.log(extenedPurchase)

  const handleChecked = (productIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtenedPurchase(
      produce((draft) => {
        draft[productIndex].checked = event.target.checked
      })
    )
  }

  const [byCount, setByCount] = useState<number>()
  const handleBuyCount = (value: number) => {
    setByCount(value)
  }

  const checkAll = () => {
    setExtenedPurchase((prev) =>
      prev.map((product) => {
        return {
          ...product,
          checked: !isAllChecked
        }
      })
    )
  }

  return (
    <>
      <div className='cart-container'>
        <div className='cart-freeship'>
          <img
            width={'25px'}
            height={'25px'}
            src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/d9e992985b18d96aab90.png'
          />
          <div>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé! </div>
        </div>
        <div className='cart-description'>
          <div className='cart-product'>
            <input type='checkbox' onChange={checkAll} checked={isAllChecked} />
            <div>Sản Phẩm</div>
          </div>
          <div className='cart-quantity'>
            <div>Đơn Giá</div>
            <div>Số Lượng</div>
            <div>Số Tiền</div>
            <div>Thao Tác</div>
          </div>
        </div>
        {extenedPurchase.map((product, index) => {
          return (
            <>
              <div key={product._id} className='cart-item-container'>
                <div className='cart-item'>
                  <div className='cart-item-left'>
                    <input type='checkbox' checked={product.checked} onChange={handleChecked(index)} />
                    <div className='cart-img'>
                      <img src={product.product.image} />
                    </div>
                    <div className='cart-name-product'>
                      <p>{product.product.name}</p>
                    </div>
                  </div>
                  <div className='cart-item-right'>
                    <div>đ {formatCurrency(product.price)}</div>
                    <div>
                      <QuantityController
                        value={byCount ? byCount : product.buy_count}
                        onDecrease={handleBuyCount}
                        onIncrease={handleBuyCount}
                        onType={handleBuyCount}
                        max={product.product.quantity}
                      />
                    </div>
                    <div>đ {formatCurrency(product.buy_count * product.price)}</div>
                    <div>Xóa</div>
                  </div>
                </div>
                <hr style={{ margin: '0 200px' }} />
                <div className='cart-discount'>
                  <BsTicketPerforated className='icon' /> <div>Thêm mã giảm giá của shop</div>
                </div>
                <hr style={{ margin: '0 200px' }} />
                <div className='cart-transtion'>
                  <img
                    width={'25px'}
                    height={'25px'}
                    src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/d9e992985b18d96aab90.png'
                  />
                  <div>
                    Giảm ₫70.000 phí vận chuyển đơn tối thiểu ₫0; Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫25.000
                  </div>
                </div>
              </div>
            </>
          )
        })}
        <div className='cart-footer'>
          <div className='content-top'>
            <div className='icon'>
              <BsTicketPerforated color='#ee4d2d' size={24} /> Shoope VouCher
            </div>
            <div style={{ color: 'blue' }}>Chọn hoặc nhập mã</div>
          </div>
          <div className='content-bottom'>
            <div className='content-left'>
              <input onChange={checkAll} type='checkbox' checked={isAllChecked} />
              <div onClick={checkAll}>Chọn tất cả ({extenedPurchase.length})</div>
              <div>Xóa</div>
            </div>
            <div className='content-right'>
              <div>Tổng thanh toán(0 Sản phẩm) :</div>
              <div className='price'>100.000Đ</div>
              <ButtonShoppe title='Mua Hàng' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart
