import { CiUser } from 'react-icons/ci'
import { RiLockPasswordFill } from 'react-icons/ri'
import { RiBillLine } from 'react-icons/ri'
import { FaPen } from 'react-icons/fa'
import './UserSideNav.scss'
import { useContext } from 'react'
import { AppContext } from '../../../../Context/App.context'
import { getAvatar } from '../../../../Types/Utils.type'
import { useLocation, useNavigate } from 'react-router-dom'
const UserSideNav = () => {
  const { profile } = useContext(AppContext)
  const location = useLocation()
  const nagivate = useNavigate()
  return (
    <>
      <div className='user-sidebar-container'>
        <div className='user-sidebar-avatar'>
          <div className='avatar'>
            <img src={getAvatar(profile?.avatar)} />
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
        <div onClick={() => nagivate('/user/profile')} className='user-sidebar-profile'>
          <CiUser color='blue' />
          <span style={location.pathname === '/user/profile' ? { color: '#ee4d2d' } : {}}>Tài Khoản Của Tôi</span>
        </div>
        <div onClick={() => nagivate('/user/password')} className='user-sidebar-password'>
          <RiLockPasswordFill />{' '}
          <span style={location.pathname === '/user/password' ? { color: '#ee4d2d' } : {}}>Đổi Mật Khẩu</span>
        </div>
        <div onClick={() => nagivate('/user/purchase')} className='user-sidebar-purchase'>
          <RiBillLine color='blue' />{' '}
          <span style={location.pathname === '/user/purchase' ? { color: '#ee4d2d' } : {}}>Đơn Mua</span>
        </div>
      </div>
    </>
  )
}

export default UserSideNav
