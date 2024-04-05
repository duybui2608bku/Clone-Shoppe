import './Register.scss'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from '../../Utils/ruls'
const Register = () => {
  interface FormData {
    email: string
    password: string
    confirm_password: string
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

  console.log(errors.confirm_password)
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
            <input
              {...register('confirm_password', rules.confirm_password)}
              name='confirm_password'
              type='password'
              placeholder=' Xác Nhận Mật Khẩu'
            />
            {errors.confirm_password?.message ? (
              <div className='error-form'>{errors.confirm_password?.message}</div>
            ) : (
              <div className='error-form'></div>
            )}
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
            <Link className='a' to={'/login'}>
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
