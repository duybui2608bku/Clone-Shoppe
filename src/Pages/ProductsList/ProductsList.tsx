import Carousel from 'react-bootstrap/Carousel'
import CaroseImageProductList from '../ProductDetail/CaroseImageProductList'
import './ProductsList.scss'
import img1 from '../../assets/Slider/1.jpg'
import img2 from '../../assets/Slider/1.jpg'
import { useQuery } from '@tanstack/react-query'
import useQueryParams from '../../Hooks/useQueryParams'
import productApi from '../../Services/Products.api'
import ButtonShoppe from '../../Components/ButtonShoppe/ButtonShoppe'
import { useContext } from 'react'
import { AppContext } from '../../Context/App.context'
import { formatCurrency, formatNumberToSocialStyle } from '../../Utils/Utils'

const ProductList = () => {
  const images = [
    'https://cf.shopee.vn/file/vn-50009109-ff3806f443aada213cb77de3b9305310_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-3fbe50f24cc6db0332ea13fd843f4c57_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-ce314cce36baacc7ffbcf7378fa4c526_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-b09710fe00237f7babeb3755a861cdc0_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-53226b3229b5929212a702d966c211c6_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-4c292f7e57d1f2cfd119cec57d4753c1_xxhdpi',
    'https://cf.shopee.vn/file/vn-50009109-cc4ba3ffccee1a11c181a84abba9493c_xxhdpi'
  ]

  const initOther = [
    {
      image: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi',
      title: 'Voucher 500K'
    },
    {
      image: 'https://cf.shopee.vn/file/vn-50009109-c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi',
      title: 'Free Ship'
    },
    {
      image: 'https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi',
      title: 'Shoppe Siêu Rẻ'
    },
    {
      image: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi',
      title: 'Mã giảm giá'
    },
    {
      image: 'https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi',
      title: 'Hàng hiệu Oulet giảm 50%'
    },
    {
      image: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi',
      title: 'Hàng Quốc tế'
    },
    {
      image: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi',
      title: 'Nạp thẻ'
    }
  ]

  const initCategory = [
    {
      image: 'https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn',
      title: 'Đồng Hồ'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
      title: 'Áo Thun'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
      title: 'Điện thoại'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
      title: 'Máy ảnh'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
      title: 'Áo Thun'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
      title: 'Điện thoại'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
      title: 'Máy ảnh'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
      title: 'Áo Thun'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
      title: 'Điện thoại'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn',
      title: 'Máy ảnh'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
      title: 'Áo Thun'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
      title: 'Điện thoại'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    },
    {
      image: 'https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn',
      title: 'Thiết bị điện tử'
    }
  ]

  const { setIsProductsDetail } = useContext(AppContext)

  const caculateDiscount = (priceOld: number, priceNew: number): number => {
    return Math.ceil(((priceOld - priceNew) / priceOld) * 100)
  }

  const queryParams = useQueryParams()

  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })

  return (
    <>
      <div className='slider-container'>
        <div className='slider-left'>
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index} interval={index === 0 ? 1000 : 500}>
                <CaroseImageProductList images={[image]} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='slider-right'>
          <img alt='img1' src={img1} />
          <img alt='img2' src={img2} />
        </div>
      </div>
      <div className='other-container'>
        {initOther.map((item, index) => {
          return (
            <>
              <div key={index} className='other-item'>
                <div>
                  {' '}
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='title'>{item.title}</div>
              </div>
            </>
          )
        })}
      </div>
      <div className='product-list-container-backgourd'>
        <div className='category-container'>
          {initCategory.map((item, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    setIsProductsDetail(true)
                  }}
                  className='category-item'
                >
                  <div key={index}>
                    {' '}
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className='title'>{item.title}</div>
                </div>
              </>
            )
          })}
        </div>

        <div className='list-products-header'>Gợi Ý Hôm Nay</div>

        <div className='list-products-container'>
          {data?.data.data.products.map((products, index) => {
            return (
              <>
                <div key={index} className='products-item'>
                  <div className='products-image'>
                    <img src={products.image} />
                  </div>
                  <div className='products-title'>
                    <p>{products.name}</p>
                  </div>
                  <div className='products-price-sold'>
                    <div className='price'>
                      <sup>đ</sup>
                      {formatCurrency(products.price)}
                    </div>
                    <div className='sold'>Đã bán {formatNumberToSocialStyle(products.sold)}</div>
                  </div>
                  <div className='discount'>{caculateDiscount(products.price_before_discount, products.price)}%</div>
                </div>
              </>
            )
          })}
        </div>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <ButtonShoppe title='Xem Thêm' />
        </div>
      </div>
      {/* <div className='ads'>
        <img src='https://cf.shopee.vn/file/vn-50009109-6633b5cef23abfb566cb1bdf80018aee' />
      </div> */}
    </>
  )
}

export default ProductList
