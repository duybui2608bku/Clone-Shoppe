import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Link, useNavigate } from 'react-router-dom'
import './PopoverAccount.scss'
import { useMutation } from '@tanstack/react-query'
import { postLogOut } from '../../Services/LogInLogOut.api'
import { useContext } from 'react'
import { AppContext } from '../../Context/App.context'

const PopoverAccount = () => {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const logOutMutation = useMutation({
    mutationFn: (_) => {
      return postLogOut()
    },
    onSuccess: (_) => {
      setIsAuthenticated(false)
    }
  })

  const handleLogOut = () => {
    logOutMutation.mutate()
  }

  const popover = (
    <Popover className='popover-header-container'>
      <Popover.Body className='popover-header-content'>
        <Link className='a' to='/profile'>
          Tài Khoản Của Tôi
        </Link>
        <Link className='a' to='/'>
          Đơn Mua
        </Link>
        <Link onClick={handleLogOut} className='a' to='/'>
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
