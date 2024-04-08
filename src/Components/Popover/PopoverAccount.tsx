import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Link } from 'react-router-dom'
import './PopoverAccount.scss'

const PopoverAccount = () => {
  const popover = (
    <Popover className='popover-header-container'>
      <Popover.Body className='popover-header-content'>
        <Link className='a' to='/'>
          Tài Khoản Của Tôi
        </Link>
        <Link className='a' to='/'>
          Đơn Mua
        </Link>
        <Link className='a' to='/'>
          Đăng Xuất
        </Link>
      </Popover.Body>
    </Popover>
  )

  return (
    <OverlayTrigger trigger='click' placement='bottom' overlay={popover}>
      <div>Tài Khoản</div>
    </OverlayTrigger>
  )
}

export default PopoverAccount
