import './Register.scss'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <div className='des'>Đăng Nhập</div>
          <form className='form-control'>
            <input type='tex' placeholder='Email/Số điện thoại/Tên đăng nhập' />
            <input type='password' placeholder='Mật Khẩu' />
            <input type='password' placeholder=' Xác Nhận Mật Khẩu' />
            <button className='btn-login'>Đăng Nhập</button>
          </form>
          <div className='login-password'>
            <div>Quên mật khẩu</div>
            <div>Đăng nhập với sms</div>
          </div>
          <div className='des-1'>HOẶC</div>
          <div className='login-fb-gg'>
            <div>
              <FaFacebook size={25} /> Facebook
            </div>
            <div>
              <FcGoogle size={25} /> Google
            </div>
          </div>
          <div className='login-register'>
            Bạn đã có tài khoản?
            <Link className='a' to={'/'}>
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
