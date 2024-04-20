import { useMutation, useQuery } from '@tanstack/react-query'
import QuantityController from '../../Components/QuantityController/QuantityController'
import './Cart.scss'
import { BsTicketPerforated } from 'react-icons/bs'
import { purchasesStatus } from '../../constants/purchase'
import purchaseApi from '../../Services/Purchase.api'
import { useContext, useEffect, useMemo, useState } from 'react'
import { AppContext } from '../../Context/App.context'
import { formatCurrency } from '../../Utils/Utils'
import ButtonShoppe from '../../Components/ButtonShoppe/ButtonShoppe'
import { Purchase } from '../../Types/Purchase.type'
import { produce } from 'immer'
import { keyBy } from 'lodash'
import { useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

interface ExtendePurchase extends Purchase {
  disable: boolean
  checked: boolean
}

const Cart = () => {
  const { isAuthenticated } = useContext(AppContext)
  const location = useLocation()
  const choosenPurchaseIdFromLocation = (location.state as { purchaseId: string } | null)?.purchaseId
  const navigate = useNavigate()
  const { data, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchaseList({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  const updatePurchaseMutation = useMutation({
    mutationFn: purchaseApi.updateProducts,
    onSuccess: (_) => {
      refetch()
    }
  })
  const Cart = data?.data.data
  let totalPrice = 0
  let totalSave = 0

  const [extenedPurchase, setExtenedPurchase] = useState<ExtendePurchase[]>([])
  const isAllChecked = useMemo(() => extenedPurchase.every((purchase) => purchase.checked), [extenedPurchase])
  const checkedPurchase = useMemo(() => extenedPurchase.filter((purchase) => purchase.checked), [extenedPurchase])
  let totalChecked = 0
  for (let i = 0; i < extenedPurchase.length; i++) {
    if (extenedPurchase[i].checked) {
      totalChecked++
    }
  }
  useEffect(() => {
    if (Cart) {
      setExtenedPurchase((prev) => {
        const extendedPurchaseObject = keyBy(prev, '_id')
        return (
          Cart.map((purchase) => {
            const isChoosenPurchaseFormLocation = choosenPurchaseIdFromLocation === purchase.product._id
            return {
              ...purchase,
              disable: false,
              checked: isChoosenPurchaseFormLocation || Boolean(extendedPurchaseObject[purchase._id]?.checked)
            }
          }) || []
        )
      })
    }
  }, [Cart, choosenPurchaseIdFromLocation])

  useEffect(() => {
    return () => {
      history.replaceState(null, '')
    }
  }, [])

  const handleChecked = (productIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtenedPurchase(
      produce((draft) => {
        draft[productIndex].checked = event.target.checked
      })
    )
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

  const handleQuantity = (productIndex: number, value: number, enable: boolean) => {
    console.log(enable)
    if (enable) {
      setExtenedPurchase(
        produce((draft) => {
          draft[productIndex].disable = true
        })
      )
      const purchase = extenedPurchase[productIndex]
      updatePurchaseMutation.mutate({ product_id: purchase.product._id, buy_count: value })
    }
  }

  const handleTypeQuantity = (productIndex: number) => (value: number) => {
    setExtenedPurchase(
      produce((draft) => {
        draft[productIndex].buy_count = value
      })
    )
  }

  const buyProductMutation = useMutation({
    mutationFn: purchaseApi.buyProducts,
    onSuccess: () => {
      refetch()
    }
  })

  const deleteProductMutation = useMutation({
    mutationFn: purchaseApi.deleteProducts,
    onSuccess: () => {
      refetch()
    }
  })

  const handleDelete = (productIndex: number) => () => {
    const purchaseId = extenedPurchase[productIndex]._id
    deleteProductMutation.mutate([purchaseId])
  }

  const handleDeleteMany = () => {
    const purchaseIds = checkedPurchase.map((purchase) => purchase._id)
    deleteProductMutation.mutate(purchaseIds)
  }

  const handleBuyProduct = () => {
    if (checkedPurchase.length > 0) {
      const body = checkedPurchase.map((purchase) => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count
      }))
      buyProductMutation.mutate(body)
    }
  }

  return (
    <>
      {extenedPurchase.length > 0 ? (
        <div className='cart-container'>
          <Helmet>
            <title>Giỏ Hàng</title>
            <meta name='description-1' content='Giỏ Hàng' />
          </Helmet>
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
            {
              product.checked ? (totalPrice += product.price * product.buy_count) : 0
            }
            {
              product.checked
                ? (totalSave += product.price_before_discount * product.buy_count - product.price * product.buy_count)
                : 0
            }

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
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ textDecoration: 'line-through' }}>
                          đ {formatCurrency(product.price_before_discount)}
                        </div>
                        <div>đ {formatCurrency(product.price)}</div>
                      </div>
                      <div>
                        <QuantityController
                          value={product.buy_count}
                          max={product.product.quantity}
                          onIncrease={(value) => handleQuantity(index, value, value <= product.product.quantity)}
                          onDecrease={(value) => handleQuantity(index, value, value >= 1)}
                          onFocusOut={(value) =>
                            handleQuantity(
                              index,
                              value,
                              value >= 1 &&
                                value <= product.product.quantity &&
                                (Cart as Purchase[])[index].buy_count != value
                            )
                          }
                          disabled={product.disable}
                          onType={handleTypeQuantity(index)}
                        />
                      </div>
                      <div>đ {formatCurrency(product.price * product.buy_count)}</div>
                      <div onClick={handleDelete(index)}>Xóa</div>
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
                <div onClick={handleDeleteMany}>Xóa</div>
              </div>
              <div className='content-right'>
                <div>Tổng thanh toán({totalChecked} Sản phẩm) :</div>
                <div className='price'>
                  <div>{formatCurrency(totalPrice)} đ</div>
                  <div>Tiết Kiệm: {formatCurrency(totalSave)} đ</div>
                </div>
                <div onClick={handleBuyProduct}>
                  <ButtonShoppe disable={buyProductMutation.isPending} title='Mua Hàng' />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='no-cart'>
          <img src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png' />
          <div>Giỏ Hàng Của Bạn Còn Trống</div>
          <div onClick={() => navigate('/')}>
            <ButtonShoppe title='Mua Ngay' />
          </div>
        </div>
      )}
    </>
  )
}
export default Cart
