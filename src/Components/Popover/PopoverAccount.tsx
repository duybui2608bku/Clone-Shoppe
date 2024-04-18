import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Link } from 'react-router-dom'
import './PopoverAccount.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postLogOut } from '../../Services/LogInLogOut.api'
import { useContext } from 'react'
import { AppContext } from '../../Context/App.context'
// import { queryClient } from '../../main'
import { purchasesStatus } from '../../constants/purchase'

const PopoverAccount = () => {
  const queryClient = useQueryClient()
  const { setIsAuthenticated, setProfile, profile } = useContext(AppContext)
  const logOutMutation = useMutation({
    mutationFn: (_) => {
      return postLogOut()
    },
    onSuccess: (_) => {
      setIsAuthenticated(false)
      setProfile(null)
      queryClient.removeQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
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
      <div>{profile?.email}</div>
    </OverlayTrigger>
  )
}

export default PopoverAccount
