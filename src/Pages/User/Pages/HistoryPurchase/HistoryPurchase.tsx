import { Link, createSearchParams } from 'react-router-dom'
import './HistoryPurchase.scss'
import path from '../../../../constants/path'
import { purchasesStatus } from '../../../../constants/purchase'
import useQueryParams from '../../../../Hooks/useQueryParams'
import { useQuery } from '@tanstack/react-query'
import purchaseApi from '../../../../Services/Purchase.api'
import { BiChat } from 'react-icons/bi'
import { CiShop } from 'react-icons/ci'
import { TbTruckDelivery } from 'react-icons/tb'
import ButtonShoppe from '../../../../Components/ButtonShoppe/ButtonShoppe'
import { BiCheckShield } from 'react-icons/bi'
import { formatCurrency } from '../../../../Utils/Utils'
import { PurchaseListStatus } from '../../../../Types/Purchase.type'
import { Helmet } from 'react-helmet'
const HistoryPurchase = () => {
  const queryParams: { status?: string } = useQueryParams()
  const status: number = Number(queryParams.status) || purchasesStatus.all
  const purchaseTabs = [
    { status: purchasesStatus.all, name: 'Tất cả' },
    { status: purchasesStatus.waitForConfirmation, name: 'Chờ xác nhận' },
    { status: purchasesStatus.waitForGetting, name: 'Chờ lấy hàng' },
    { status: purchasesStatus.inProgress, name: 'Đang giao' },
    { status: purchasesStatus.delivered, name: 'Đã giao' },
    { status: purchasesStatus.cancelled, name: 'Đã hủy' }
  ]
  const { data } = useQuery({
    queryKey: ['purchases', { status: status }],
    queryFn: () => purchaseApi.getPurchaseList({ status: status as PurchaseListStatus })
  })
  const Purchase = data?.data.data
  console.log(Purchase)
  const purchaseTabLinks = purchaseTabs.map((tab) => {
    return (
      <>
        <Link
          className={`item ${status === tab.status ? 'active' : ''}`}
          to={{
            pathname: path.historyPurchase,
            search: createSearchParams({
              status: String(tab.status)
            }).toString()
          }}
          key={tab.status}
        >
          {tab.name}
        </Link>
      </>
    )
  })
  if (!Purchase) return null
  return (
    <>
      <div className='history-purchase-container'>
        <Helmet>
          <title>Đơn Mua</title>
          <meta name='description' content='Đơn Mua' />
        </Helmet>
        {purchaseTabLinks}
      </div>
      <div className='history-purchase-item'>
        {Purchase?.length > 0 ? (
          Purchase?.map((purchase, index) => {
            return (
              <>
                <div key={index} className='detail-purchase'>
                  <div className='content-one'>
                    <div className='infor-shop'>
                      <div className='left'>
                        <BiChat /> Chat
                      </div>
                      <div className='right'>
                        <CiShop /> Xem Shop
                      </div>
                    </div>
                    <div className='transition'>
                      <div style={{ color: '#26AA99' }}>
                        <TbTruckDelivery /> Đơn hàng đã được giao thành công
                      </div>
                      <div style={{ color: '#ee4d2d' }}>Đánh giá</div>
                    </div>
                  </div>
                  <hr />
                  <div className='content-two'>
                    <div className='img'>
                      <img src={purchase.product.image} />
                    </div>
                    <div className='des'>
                      <div>{purchase.product.name}</div>
                      <div>x:{purchase.buy_count}</div>
                    </div>
                    <div className='price'>
                      <div style={{ textDecoration: 'line-through', color: '#00000064' }}>
                        đ {formatCurrency(purchase.price_before_discount)}
                      </div>
                      <div style={{ color: '#ee4d2d' }}>đ {formatCurrency(purchase.price)}</div>
                    </div>
                  </div>
                  <hr />
                  <div className='content-three'>
                    <div className='finale-price'>
                      <BiCheckShield /> Thành Tiền: <span>đ {formatCurrency(purchase.price * purchase.buy_count)}</span>
                    </div>
                    <div className='button'>
                      <ButtonShoppe title='Mua Lại' />
                      <button>Liên Hệ Người Bán</button>
                      <button>Xem Đánh Giá Shop</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        ) : (
          <>
            <div className='img-no-purchase'>
              <div className='img'>
                <img src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/orderlist/5fafbb923393b712b964.png' />
              </div>
              <div>Chưa có đơn hàng</div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default HistoryPurchase
