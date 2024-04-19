import { CiUser } from 'react-icons/ci'
import { RiLockPasswordFill } from 'react-icons/ri'
import { RiBillLine } from 'react-icons/ri'
import { FaPen } from 'react-icons/fa'
import './UserSideNav.scss'
const UserSideNav = () => {
  return (
    <>
      <div className='user-sidebar-container'>
        <div className='user-sidebar-avatar'>
          <div className='avatar'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4JWdrzCwY2owucPdunvUNiBWZBV3n7KYRA&s' />
          </div>
          <div className='user-sidebar-infor'>
            <div className='name'>Duy BKU</div>
            <div className='change'>
              <FaPen />
              Sửa Hồ Sơ
            </div>
          </div>
        </div>
        <hr style={{ marginTop: '-15px' }}></hr>
        <div className='user-sidebar-profile'>
          <CiUser color='blue' />
          <span>Tài Khoản Của Tôi</span>
        </div>
        <div className='user-sidebar-password'>
          <RiLockPasswordFill /> <span>Đổi Mật Khẩu</span>
        </div>
        <div className='user-sidebar-purchase'>
          <RiBillLine color='blue' /> <span>Đơn Mua</span>
        </div>
      </div>
    </>
  )
}

export default UserSideNav
