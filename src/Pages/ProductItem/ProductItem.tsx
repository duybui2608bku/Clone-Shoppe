import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
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
const ProductItem = () => {
  const { nameId } = useParams()
  const images = [
    'https://cf.shopee.vn/file/vn-50009109-ff3806f443aada213cb77de3b9305310_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-3fbe50f24cc6db0332ea13fd843f4c57_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-ce314cce36baacc7ffbcf7378fa4c526_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-b09710fe00237f7babeb3755a861cdc0_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-b09710fe00237f7babeb3755a861cdc0_xxhdpi'
  ]

  const { data: ProductDetailData } = useQuery({
    queryKey: ['products', nameId],
    queryFn: () => productApi.getProductDetail(nameId as string)
  })

  console.log(ProductDetailData)
  return (
    <>
      <div className='product-item-container'>
        <div className='product-item-left'>
          <div className='product-img-main'>
            <img src='https://down-vn.img.susercontent.com/file/sg-11134201-7qvcu-limt0f7rewhs19' alt='cc' />
          </div>
          <div className='product-img-slider'>
            {images.map((img, index) => {
              return (
                <>
                  <div className='product-img-slider-item' key={index}>
                    <img src={img} />
                  </div>
                </>
              )
            })}
          </div>
          <div className='product-social'>
            <div className='social'>
              Chia sẻ: <FaFacebookMessenger style={{ color: 'blue' }} /> <FaFacebook style={{ color: 'blue' }} />{' '}
              <FaPinterest style={{ color: 'red' }} /> <FaTwitter style={{ color: 'aqua' }} />
            </div>
            <div>|</div>
            <div className='favorite'>
              <CiHeart size={34} style={{ color: 'pink' }} /> Đã thích(69)
            </div>
          </div>
        </div>
        <div className='product-item-right'>
          <div className='product-name'>
            Youtang Áo Khoác Chống Nắng Có Mũ Trùm Đầu Thoáng Khí Chống Tia UV Phù Hợp Với Mùa Hè Cho Nam
          </div>
          <div className='product-feedback'>
            <div className='product-rate'>
              <div className='product-rating'>
                {5}
                <ProductRating rating={5} />
              </div>
              <div className='product-evalue'>{69} Đánh giá</div>
              <div className='product-sold'>{6996} Đã bán</div>
            </div>
            <div className='repot'>Tố Cáo</div>
          </div>
          <div className='product-price'>
            <div className='price-old'>
              <sup>đ</sup>185.000
            </div>
            <div className='price-new'>
              <sup>đ</sup>102.000
            </div>
            <div className='price-discount'>45% Giảm</div>
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
              <div>
                <button>-</button>
                <button>1</button>
                <button>+</button>
              </div>
              <div>
                6969 Sản Phẩm Có Sẵn<nav></nav>
              </div>
            </div>
          </div>
          <div className='product-purchase'>
            <button>
              <BsCartPlus /> Thêm vào giỏ hàng
            </button>
            <ButtonShoppe title='Mua Ngay' />
          </div>
        </div>
      </div>
      <div className='product-shop'>
        <div className='shop-about'>
          <div className='avata-shop'>
            <img src='https://down-vn.img.susercontent.com/file/a701bd87585673359688ee3d16fe7d6f_tn' />
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
    </>
  )
}
export default ProductItem
