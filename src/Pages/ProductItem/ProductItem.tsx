import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import productApi from '../../Services/Products.api'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import './ProductItem.scss'
import ProductRating from '../../Components/ProductRating/ProductRating'
import { BsBoxSeam } from 'react-icons/bs'
import { CiCircleQuestion } from 'react-icons/ci'
import { BsTruck } from 'react-icons/bs'
import { BsCartPlus } from 'react-icons/bs'
import ButtonShoppe from '../../Components/ButtonShoppe/ButtonShoppe'
import { MdOutlineMessage } from 'react-icons/md'
import { CiShop } from 'react-icons/ci'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { formatCurrency, formatNumberToSocialStyle } from '../../Utils/Utils'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Product } from '../../Types/Product.type'
import { getIdFromNameId } from '../../Types/Utils.type'
import QuantityController from '../../Components/QuantityController/QuantityController'
import purchaseApi from '../../Services/Purchase.api'
// import { queryClient } from '../../main'
import { purchasesStatus } from '../../constants/purchase'
import { toast } from 'react-toastify'
import path from '../../constants/path'

const ProductItem = () => {
  const { nameId } = useParams()
  const id = getIdFromNameId(nameId as string)
  const images = [
    'https://cf.shopee.vn/file/vn-50009109-ff3806f443aada213cb77de3b9305310_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-3fbe50f24cc6db0332ea13fd843f4c57_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-ce314cce36baacc7ffbcf7378fa4c526_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-b09710fe00237f7babeb3755a861cdc0_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-b09710fe00237f7babeb3755a861cdc0_xxhdpi'
  ]

  const productOther = [
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rcdj-lsko9nbynq9c85',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbnj-lpu5y5688v8m3d',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbkd-lpu5y68sofvk51',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rblx-lpsu0i1px1c7a1',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rbms-lpssyzx5nx2eaa',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rblu-lpssz1zsmpfp95',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rblz-lpssz0e2z5uo69',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rces-lsko9q5sipjw76',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    },
    {
      img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rce6-lsko9nsbzrq866',
      des: 'Tay áo chống nắng cho nam Nurgaz, bảo vệ cánh tay lụa băng chống tia cực tím, tay áo băng thoáng khí đi xe đạp ngoài trời',
      price: 47000,
      sold: 9669
    }
  ]

  const imgRef = useRef<HTMLImageElement>(null)
  const [byCount, setByCount] = useState<number>(1)
  const nagivate = useNavigate()
  const handleBuyCount = (value: number) => {
    setByCount(value)
  }

  const caculateDiscount = (priceOld: number, priceNew: number): number => {
    return Math.ceil(((priceOld - priceNew) / priceOld) * 100)
  }

  const { data: ProductDetailData } = useQuery({
    queryKey: ['products', nameId],
    queryFn: () => productApi.getProductDetail(id)
  })

  const product = ProductDetailData?.data.data
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const currentImages = useMemo(
    () => (product ? product.images.slice(...currentIndexImages) : []),
    [product, currentIndexImages]
  )
  const [activeImage, setActiveImage] = useState('')
  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product])

  const choseActive = (img: string) => {
    setActiveImage(img)
  }

  const next = () => {
    if (currentIndexImages[1] < (product as Product).images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const back = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const addToCartMutation = useMutation({
    mutationFn: (body: { buy_count: number; product_id: string }) => purchaseApi.addToCart(body)
  })

  const queryClient = useQueryClient()
  const addToCart = () => {
    addToCartMutation.mutate(
      { buy_count: byCount, product_id: product?._id as string },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
          toast.success('Thêm vào giỏ hàng thành công!')
        }
      }
    )
  }

  const buyNow = () => {
    addToCartMutation.mutate(
      { buy_count: byCount, product_id: product?._id as string },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
          nagivate(path.cart, {
            state: {
              purchaseId: product?._id
            }
          })
        }
      }
    )
  }

  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const image = imgRef.current as HTMLImageElement
    const { naturalHeight, naturalWidth } = image
    const { offsetX, offsetY } = e.nativeEvent
    const top = offsetY * (1 - naturalHeight / rect.height)
    const left = offsetX * (1 - naturalWidth / rect.width)
    image.style.width = naturalWidth + 'px'
    image.style.height = naturalHeight + 'px'
    image.style.top = top + 'px'
    image.style.left = left + 'px'
  }

  const handleRemoveZoom = () => {
    imgRef.current?.removeAttribute('style')
  }

  if (!product) return null

  return (
    <>
      <div className='product-item-container'>
        <div className='product-item-left'>
          <div className='product-img-main' onMouseLeave={handleRemoveZoom} onMouseMove={handleZoom}>
            <img ref={imgRef} src={activeImage} alt={product?.name} />
          </div>
          <div className='product-img-slider'>
            <div className='back' onClick={() => back()}>
              <IoIosArrowBack />
            </div>
            {currentImages.map((img, index) => {
              return (
                <>
                  <div className='product-img-slider-item' key={index} onMouseEnter={() => choseActive(img)}>
                    <img src={img} />
                  </div>
                </>
              )
            })}
            <div className='next' onClick={() => next()}>
              <IoIosArrowForward />
            </div>
          </div>
          <div className='product-social'>
            <div className='social'>
              Chia sẻ: <FaFacebookMessenger style={{ color: 'blue' }} /> <FaFacebook style={{ color: 'blue' }} />{' '}
              <FaPinterest style={{ color: 'red' }} /> <FaTwitter style={{ color: 'aqua' }} />
            </div>
            <div>|</div>
            <div className='favorite'>
              <CiHeart size={34} style={{ color: 'pink' }} /> Đã thích({formatNumberToSocialStyle(product.view)})
            </div>
          </div>
        </div>
        <div className='product-item-right'>
          <div className='product-name'>{product?.name}</div>
          <div className='product-feedback'>
            <div className='product-rate'>
              <div className='product-rating'>
                {product?.rating}
                <ProductRating rating={product?.rating} />
              </div>
              <div className='product-evalue'>{69} Đánh giá</div>
              <div className='product-sold'>{formatNumberToSocialStyle(product?.sold)} Đã bán</div>
            </div>
            <div className='repot'>Tố Cáo</div>
          </div>
          <div className='product-price'>
            <div className='price-old'>
              <sup>đ</sup>
              {formatCurrency(product.price_before_discount)}
            </div>
            <div className='price-new'>
              <sup>đ</sup>
              {formatCurrency(product.price)}
            </div>
            <div className='price-discount'>{caculateDiscount(product.price_before_discount, product.price)}% Giảm</div>
          </div>
          <div className='product-refund'>
            Chính Sách Trả Hàng:{' '}
            <span>
              <BsBoxSeam /> Trả hàng 15 ngày
            </span>{' '}
            <span>
              Đổi ý miễn phí <CiCircleQuestion />
            </span>
          </div>
          <div className='product-transition'>
            <div className='title'>Vận Chuyển</div>
            <div className='transition-addres'>
              <div>
                <img
                  style={{ marginRight: '10px' }}
                  width={'30px'}
                  src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png'
                />
                Miễn Phí Vận Chuyển
              </div>
              <div className='addres'>
                <div>
                  <BsTruck /> Vận chuyển tới : Phường Đông Hòa, Thành Phố Dĩ An
                </div>
                <div>
                  Phí Vận Chuyển: <sup>đ</sup>0
                </div>
              </div>
            </div>
          </div>
          <div className='product-size'>
            <div>Size</div>
            <div className='size'>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>
          <div className='product-quantity'>
            <div>Số Lượng</div>
            <div className='quantity'>
              <QuantityController
                value={byCount}
                onDecrease={handleBuyCount}
                onIncrease={handleBuyCount}
                onType={handleBuyCount}
                max={product.quantity}
              />
              <div>
                {product.quantity} Sản Phẩm Có Sẵn<nav></nav>
              </div>
            </div>
          </div>
          <div className='product-purchase'>
            <button onClick={addToCart}>
              <BsCartPlus /> Thêm vào giỏ hàng
            </button>
            <span onClick={buyNow}>
              <ButtonShoppe title='Mua Ngay' />
            </span>
          </div>
        </div>
      </div>
      <div className='product-shop'>
        <div className='shop-about'>
          <div className='avata-shop'>
            <img src='data:image/jpeg;base64,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' />
          </div>
          <div className='name-shop'>
            <div className='name'>BKU SHOP</div>
            <div>Online 1 Giờ Trước</div>
            <div className='button'>
              <button className='button-1'>
                <MdOutlineMessage /> Chat Ngay
              </button>
              <button className='button-2'>
                <CiShop />
                Xem Shop
              </button>
            </div>
          </div>
        </div>
        <div className='shop-rate'>
          <div>
            Đánh giá <span>1,5k</span>
          </div>
          <div>
            Sản Phẩm<span>44</span>
          </div>
        </div>
        <div className='shop-response'>
          <div>
            Tỉ lệ phản hồi <span>90%</span>
          </div>
          <div>
            Thời Gian Phản Hồi<span>Trong Vài Giờ</span>
          </div>
        </div>
        <div className='shop-follow'>
          <div>
            Tham Gia <span>6 năm trước</span>
          </div>
          <div>
            Người Theo Dõi<span>5,6K</span>
          </div>
        </div>
      </div>
      <div className='product-des'>
        <div className='des-left'>
          <div className='des-detail'>
            <div className='title'>Mô tả sản phẩm</div>
            <div
              style={{ fontSize: '17px', marginTop: '15px' }}
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>
          <div className='des-comment'>
            <div className='title'>Đánh Giá Sản Phẩm</div>
            <div className='rate'>
              <div className='rate-star'>
                <div>
                  <span>4.6</span> trên 5
                </div>
                <ProductRating rating={5} />
              </div>
              <div className='rate-comment'>
                <button>Tất Cả</button>
                <button>5 Sao(144)</button>
                <button>4 Sao(21)</button>
                <button>3 Sao(27)</button>
                <button>2 Sao(9)</button>
                <button>1 Sao(921)</button>
                <button>Có Bình Luận(52)</button>
                <button>Trong Nước(112)</button>
                <button>Có Hình Ảnh/Video(23)</button>
              </div>
            </div>
            <div className='comment-container'>
              <div className='comment-detail'>
                <div className='avatar'>
                  <img src='data:image/jpeg;base64,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' />
                </div>
                <div className='comment'>
                  <div className='user'>Thầy giáo TOKUDA</div>
                  <ProductRating rating={5} />
                  <div>2024-01-15 12:27 | Phân loại hàng: Đen,XL</div>
                  <div>Màu sắc: Xanh Blue</div>
                  <div>Chất Liệu: Tốt</div>
                  <div>Đúng với mô tả: Đúng</div>
                  <div>Màu sắc: Xanh Blue</div>
                  <div>Shop đóng gói giao hàng nhanh. giá cả và chất lượng phù hợp với giá tiền.</div>
                  <hr style={{ width: '700px' }}></hr>
                </div>
              </div>
              <div className='comment-detail'>
                <div className='avatar'>
                  <img src='data:image/jpeg;base64,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' />
                </div>
                <div className='comment'>
                  <div className='user'>Ông Nội TOKUDA</div>
                  <ProductRating rating={5} />
                  <div>2024-01-15 12:27 | Phân loại hàng: Đen,XL</div>
                  <div>Màu sắc: Xanh Blue</div>
                  <div>Chất Liệu: Tốt</div>
                  <div>Đúng với mô tả: Đúng</div>
                  <div>Màu sắc: Xanh Blue</div>
                  <div>Shop đóng gói giao hàng nhanh. giá cả và chất lượng phù hợp với giá tiền.</div>
                  <hr style={{ width: '700px' }}></hr>
                </div>
              </div>
              <div className='comment-detail'>
                <div className='avatar'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4JWdrzCwY2owucPdunvUNiBWZBV3n7KYRA&s' />
                </div>
                <div className='comment'>
                  <div className='user'>Trung Tá TOKUDA</div>
                  <ProductRating rating={5} />
                  <div>2024-01-15 12:27 | Phân loại hàng: Đen,XL</div>
                  <div>Màu sắc: Xanh Blue</div>
                  <div>Chất Liệu: Tốt</div>
                  <div>Đúng với mô tả: Đúng</div>
                  <div>Màu sắc: Xanh Blue</div>
                  <div>Shop đóng gói giao hàng nhanh. giá cả và chất lượng phù hợp với giá tiền.</div>
                  <hr style={{ width: '700px' }}></hr>
                </div>
              </div>
              <div className='comment-paginate'>
                <IoIosArrowBack />
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>...</button>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '50px',
              fontSize: '20px'
            }}
          >
            Các Sản Phẩm Khác Của Shop
          </div>
          <div className='product-other-container'>
            {productOther.map((item, index) => {
              return (
                <>
                  <div key={index} className='product-item'>
                    <div className='product-img'>
                      <img src={item.img} />
                    </div>
                    <div className='product-desc'>
                      <p>{item.des}</p>
                    </div>
                    <div className='product-price'>
                      <div className='price'>
                        <sup>đ</sup>
                        {item.price}
                      </div>
                      <div>Đã Bán: {item.sold}</div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              style={{ padding: '10px 80px', minWidth: '350px', backgroundColor: 'white', border: '1px solid #dddddd' }}
            >
              Xem Thêm
            </button>
          </div>
        </div>
        <div className='des-right'>
          <div className='title'>Top Sản Phẩm Nổi Bật</div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/0229bd70f8d57549782739b23a464f21' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljqtoktnui2q99' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lje65lnvldqq95' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgy00rvse73f5  ' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgy00r1tm1r81' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgy00rvse73f5' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgy00rvse73f5' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgy00rvse73f5' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgy00rvse73f5' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
          <div className='product-oustanding'>
            <div className='product-img'>
              <img src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgy00rvse73f5' />
            </div>
            <div className='product-descript'>
              <p>ÁO KHOÁC DÙ NAM NỮ 2 LỚP</p>
            </div>
            <div className='product-price'>
              <sup>đ</sup>166.000 - <sup>đ</sup>221.000
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductItem
