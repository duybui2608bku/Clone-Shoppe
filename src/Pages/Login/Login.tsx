import './Login.scss'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from '../../Utils/ruls'
const Login = () => {
  interface FormData {
    email: string
    password: string
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  const rules = getRules(getValues)
  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <div className='des'>Đăng Nhập</div>
          <form className='form-control' onSubmit={onSubmit}>
            <input type='text' placeholder='Email/Số điện thoại/Tên đăng nhập' {...register('email', rules.email)} />
            {errors.email?.message ? (
              <div className='error-form'>{errors.email?.message}</div>
            ) : (
              <div className='error-form'></div>
            )}
            <input {...register('password', rules.password)} autoComplete='on' type='password' placeholder='Mật Khẩu' />
            {errors.password?.message ? (
              <div className='error-form'>{errors.password?.message}</div>
            ) : (
              <div className='error-form'></div>
            )}
            <button type='submit' className='btn-login'>
              Đăng Nhập
            </button>
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
            Bạn mới biết đến Shoppe?
            <Link className='a' to={'/register'}>
              Đăng kí
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
