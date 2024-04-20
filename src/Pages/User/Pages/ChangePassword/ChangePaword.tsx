import { useForm } from 'react-hook-form'
import UserApi, { BodyUpdateProfile } from '../../../../Services/User.api'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import ButtonShoppe from '../../../../Components/ButtonShoppe/ButtonShoppe'
import './ChangePassword.scss'
import { getRules } from '../../../../Utils/ruls'
import { Helmet } from 'react-helmet'
interface BodyPassword extends BodyUpdateProfile {
  password: string
  new_password: string
}

const ChangePassword = () => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<BodyPassword>({
    defaultValues: {
      password: '',
      newPassword: ''
    }
  })
  const updateProfileMutation = useMutation({
    mutationFn: (body: BodyUpdateProfile) => {
      return UserApi.updateProfile(body)
    }
  })
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await updateProfileMutation.mutateAsync(data)
      toast.success(res.data.message)
    } catch (error) {
      toast.error('Mật khẩu không đúng')
    }
  })
  const rules = getRules()
  console.log(errors)
  return (
    <>
      <div className='change-password-container'>
        <Helmet>
          <title>Đổi Mật Khẩu</title>
          <meta name='description' content='Đổi Mật Khẩu' />
        </Helmet>
        <div className='des'>
          <div>Thêm mật khẩu</div>
          <div>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
          <hr />
        </div>
        <div className='content'>
          <div className='left'>
            <div>Mật khẩu mới</div>
            <div>Xác nhận mật khẩu</div>
          </div>
          <div className='right'>
            <form onSubmit={onSubmit}>
              <div>
                <input {...register('password', rules.password)} placeholder='Mật Khẩu Cũ' type='password' />
                {errors.password?.message ? (
                  <div style={{ fontSize: '10px', color: 'red' }}>{errors.password?.message}</div>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                <input {...register('new_password', rules.password)} placeholder='Mật Khẩu Mới' type='password' />
                {errors.new_password?.message ? (
                  <div style={{ fontSize: '10px', color: 'red' }}>{errors.new_password?.message}</div>
                ) : (
                  <div></div>
                )}
              </div>
              <ButtonShoppe title='Lưu' />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
