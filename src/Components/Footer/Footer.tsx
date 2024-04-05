import { Link } from 'react-router-dom'
import './Footer.scss'
import img1 from '../../assets/PAY-IMG/1.png'
import img2 from '../../assets/PAY-IMG/2.png'
import img3 from '../../assets/PAY-IMG/3.png'
import img4 from '../../assets/PAY-IMG/4.png'
import img5 from '../../assets/PAY-IMG/5.png'
import img6 from '../../assets/PAY-IMG/6.png'
import img7 from '../../assets/PAY-IMG/7.png'
import img8 from '../../assets/PAY-IMG/8.png'

import img9 from '../../assets/Transit/1.png'
import img10 from '../../assets/Transit/2.png'
import img11 from '../../assets/Transit/3.png'
import img12 from '../../assets/Transit/4.png'
import img13 from '../../assets/Transit/5.png'
import img14 from '../../assets/Transit/6.png'
import img15 from '../../assets/Transit/7.png'
import img16 from '../../assets/Transit/8.png'
import img17 from '../../assets/Transit/9.png'
import img18 from '../../assets/Transit/10.png'
import img19 from '../../assets/Transit/11.png'

import img20 from '../../assets/Download/1.png'
import img21 from '../../assets/Download/2.png'
import img22 from '../../assets/Download/3.png'
import img23 from '../../assets/Download/4.png'

import img24 from '../../assets/License/1.png'
import img25 from '../../assets/License/2.png'

import { IoLogoFacebook } from 'react-icons/io5'
import { RiInstagramFill } from 'react-icons/ri'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='content-one'>
          <div className='help-customer'>
            <p className='p'>CHĂM SÓC KHÁCH HÀNG</p>
            <Link className='a' to={'/'}>
              Trung tâm trợ giúp
            </Link>
            <Link className='a' to={'/'}>
              Shopee Blog
            </Link>
            <Link className='a' to={'/'}>
              Shopee Mall
            </Link>
            <Link className='a' to={'/'}>
              Hướng Dẫn Mua Hàng
            </Link>
            <Link className='a' to={'/'}>
              Hướng Dẫn Bán Hàng
            </Link>
            <Link className='a' to={'/'}>
              Thanh Toán
            </Link>
            <Link className='a' to={'/'}>
              Shopee Xu
            </Link>
            <Link className='a' to={'/'}>
              Vận Chuyển
            </Link>
            <Link className='a' to={'/'}>
              Trả Hàng & Hoàn Tiền
            </Link>
            <Link className='a' to={'/'}>
              Chăm Sóc Khách Hàng
            </Link>
            <Link className='a' to={'/'}>
              Chính Sách Bảo Hành
            </Link>
          </div>
          <div className='about'>
            <p className='p'>VỀ SHOPPE</p>
            <Link className='a' to={'/'}>
              Giới Thiệu Về Shopee Việt Nam
            </Link>
            <Link className='a' to={'/'}>
              Tuyển Dụng
            </Link>
            <Link className='a' to={'/'}>
              Điều Khoản Shopee
            </Link>
            <Link className='a' to={'/'}>
              Chính Sách Bảo Mật
            </Link>
            <Link className='a' to={'/'}>
              Chính Hãng
            </Link>
            <Link className='a' to={'/'}>
              Kênh Người Bán
            </Link>
            <Link className='a' to={'/'}>
              Flash Sales
            </Link>
            <Link className='a' to={'/'}>
              Chương Trình Tiếp Thị Liên Kết Shopee
            </Link>
            <Link className='a' to={'/'}>
              Liên Hệ Với Truyền Thông
            </Link>
          </div>
          <div className='pay-sit'>
            <div className='pay'>
              <p className='p'>THANH TOÁN</p>
              <div className='image'>
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
                <img src={img4}></img>
                <img src={img5}></img>
                <img src={img6}></img>
                <img src={img7}></img>
                <img src={img8}></img>
              </div>
            </div>
            <div className='transit'>
              <p className='p'>ĐƠN VỊ VẬN CHUYỂN</p>
              <div className='image'>
                <img src={img9}></img>
                <img src={img10}></img>
                <img src={img11}></img>
                <img src={img12}></img>
                <img src={img13}></img>
                <img src={img14}></img>
                <img src={img15}></img>
                <img src={img16}></img>
                <img src={img17}></img>
                <img src={img18}></img>
                <img src={img19}></img>
              </div>
            </div>
          </div>
          <div className='flowing'>
            <p className='p'>THEO DÕI CHÚNG TÔI TRÊN</p>
            <div className='social'>
              <Link className='a' to={'/'}>
                <IoLogoFacebook /> FaceBook
              </Link>
              <Link className='a' to={'/'}>
                {' '}
                <RiInstagramFill /> Instargam
              </Link>
              <Link className='a' to={'/'}>
                {' '}
                <FaLinkedin /> Linkedin
              </Link>
            </div>
          </div>
          <div className='download'>
            <p className='p'>TẢI ỨNG DỤNG</p>
            <div className='image'>
              <div className='qr'>
                <img src={img20}></img>
              </div>
              <div className='app'>
                <img src={img21}></img>
                <img src={img22}></img>
                <img src={img23}></img>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='content-two'>
          <div className='contry'>
            粤ICP备17161890号 Copyright © 2024 深圳虾皮信息技术有限责任公司. All rights reserved.
            <br />
            Quốc gia & Khu vực: Singapore | Indonesia | Thái Lan | Malaysia | Việt Nam | Philippines | Brazil | México |
            Colombia | Chile Đài Loan.
          </div>
          <div className='policy'>
            CHÍNH SÁCH BẢO MẬT | QUY CHẾ HOẠT ĐỘNG | CHÍNH SÁCH VẬN CHUYỂN | CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
          </div>
          <div className='license'>
            <div className='image'>
              <img src={img24}></img>
              <img src={img24}></img>
              <img src={img25}></img>
            </div>
            <p className='p'>Công ty TNHH Shopee</p>
          </div>
          <div className='des'>
            <div>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
              phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </div>
            <div>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
            <div>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
            <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
