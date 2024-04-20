import './Login.scss'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from '../../Utils/ruls'
import { useMutation } from '@tanstack/react-query'
import { postLogin } from '../../Services/LogInLogOut.api'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { isAxiousUnprocessableEntity } from '../../Utils/Utils'
import { AppContext } from '../../Context/App.context'
import { Helmet } from 'react-helmet'
const Login = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const nagivate = useNavigate()
  interface FormData {
    email: string
    password: string
  }
  const [errorForm, setErrorForm] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => {
      return postLogin(body)
    }
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        toast('Đăng nhập thành công'), setIsAuthenticated(true), nagivate('/'), setProfile(data.data.data.user)
      },
      onError: (errors: any) => {
        if (isAxiousUnprocessableEntity(errors)) {
          toast.error(errors.response.data.data.password)
          setErrorForm(true)
        }
      }
    })
  })

  const rules = getRules(getValues)

  return (
    <>
      <div className='login-container'>
        <Helmet>
          <title>Đăng Nhập</title>
          <meta name='description' content='Đăng Nhập' />
        </Helmet>
        <div className='login-form'>
          <div className='des'>Đăng Nhập</div>
          <form className='form-controls' onSubmit={onSubmit}>
            <input
              onFocus={() => setErrorForm(false)}
              type='text'
              placeholder='Email/Số điện thoại/Tên đăng nhập'
              {...register('email', rules.email)}
            />
            {errors.email?.message ? (
              <div className='error-form'>{errors.email?.message}</div>
            ) : (
              <div className='error-form'></div>
            )}
            <input
              onFocus={() => setErrorForm(false)}
              {...register('password', rules.password)}
              autoComplete='on'
              type='password'
              placeholder='Mật Khẩu'
            />
            {errors.password?.message ? (
              <div className='error-form'>{errors.password?.message}</div>
            ) : (
              <div className='error-form'></div>
            )}
            <button
              disabled={errorForm}
              style={errorForm ? { cursor: 'no-drop', backgroundColor: ' #ee4d2d44' } : {}}
              type='submit'
              className='btn-login'
            >
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
