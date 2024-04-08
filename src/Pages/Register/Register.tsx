import './Register.scss'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from '../../Utils/ruls'
import { postRegister } from '../../Services/LogInLogOut.api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { omit } from 'lodash'
import { isAxiousUnprocessableEntity } from '../../Utils/Utils'
import { useState } from 'react'
const Register = () => {
  const [errorForm, setErrorForm] = useState<boolean>(false)
  const navigate = useNavigate()
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

  const registerMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => {
      return postRegister(body)
    }
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerMutation.mutate(body, {
      onSuccess: (_) => {
        toast('Đăng kí thành công, mời đăng nhập')
        navigate('/login')
      },
      onError: (errors: any) => {
        if (isAxiousUnprocessableEntity(errors)) {
          toast.error(errors.response.data.data.email)
          setErrorForm(true)
        }
      }
    })
  })
  const rules = getRules(getValues)

  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <div className='des'>Đăng Kí</div>
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
            <input
              onFocus={() => setErrorForm(false)}
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
            <button disabled={errorForm} style={errorForm ? { cursor: 'no-drop' } : {}} className='btn-login'>
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
