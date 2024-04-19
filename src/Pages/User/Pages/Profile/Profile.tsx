import { useMutation, useQuery } from '@tanstack/react-query'
import ButtonShoppe from '../../../../Components/ButtonShoppe/ButtonShoppe'
import './Profile.scss'
import UserApi, { BodyUpdateProfile } from '../.../../../../../Services/User.api'
import { Controller, useForm } from 'react-hook-form'
import { getRules } from '../../../../Utils/ruls'
import { useContext, useEffect } from 'react'
import DateSelected from '../../Components/DateSelected/DateSelected'
import { toast } from 'react-toastify'
import { AppContext } from '../../../../Context/App.context'
import { setProfileFromLS } from '../../../../Utils/Auth'
interface FormData {
  name: string
  phone: string
  address: string
  avatar: string
  date_of_birth: Date
}
const Profile = () => {
  const { setProfile } = useContext(AppContext)
  const { data, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: () => UserApi.getProfile()
  })
  const rules = getRules()
  const User = data?.data.data
  const {
    register,
    control,
    watch,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      avatar: '',
      date_of_birth: new Date(1990, 1, 1)
    }
  })
  useEffect(() => {
    if (User) {
      setValue('name', User.name || '')
      setValue('phone', User.phone || '')
      setValue('address', User.address || '')
      setValue('avatar', User.avatar || '')
      setValue('date_of_birth', User.date_of_birth ? new Date(User.date_of_birth) : new Date(1990, 1, 1))
    }
  }, [User, setValue])

  const updateProfileMutation = useMutation({
    mutationFn: (body: BodyUpdateProfile) => {
      return UserApi.updateProfile(body)
    }
  })
  const onSubmit = handleSubmit(async (data) => {
    const res = await updateProfileMutation.mutateAsync({ ...data, date_of_birth: data.date_of_birth?.toISOString() })
    refetch()
    console.log(res.data.data)
    setProfile(res.data.data)
    setProfileFromLS(res.data.data)
    toast('Cập Nhật Thành Công')
  })

  const value = watch()
  console.log(errors)

  return (
    <>
      <div className='proflie-container'>
        <div className='des'>
          <div>Hồ Sơ Của Tôi</div>
          <div>Quản lí thông tin hồ sơ để bảo mật tài khoản</div>
          <hr />
        </div>
        <form onSubmit={onSubmit}>
          {' '}
          <div className='infor'>
            <div className='infor-left'>
              <div>Email</div>
              <div>Tên</div>
              <div>Số điện thoại</div>
              <div>Địa chỉ</div>
              <div>Ngày sinh</div>
            </div>
            <div className='infor-right'>
              <div>{User?.email}</div>
              <div>
                <input value={User?.name} {...register('name', rules.name)} placeholder='Tên' type='text' />
                {errors.name?.message ? (
                  <div style={{ fontSize: '10px', color: 'red' }}>{errors.name?.message}</div>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                <input value={User?.phone} {...register('phone', rules.phone)} placeholder='Phone' type='number' />
                {errors.phone?.message ? (
                  <div style={{ fontSize: '10px', color: 'red' }}>{errors.phone?.message}</div>
                ) : (
                  <div></div>
                )}
              </div>
              <div>
                <input
                  value={User?.address}
                  {...register('address', rules.address)}
                  placeholder='Địa chỉ'
                  type='text'
                />
                {errors.address?.message ? (
                  <div style={{ fontSize: '10px', color: 'red' }}>{errors.address?.message}</div>
                ) : (
                  <div></div>
                )}
              </div>
              <Controller
                name='date_of_birth'
                control={control}
                render={({ field }) => <DateSelected onChange={field.onChange} value={field.value} />}
              />

              <div>
                <ButtonShoppe title='Lưu' />
              </div>
            </div>
            <div className='avatar'>
              <div className='img'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4JWdrzCwY2owucPdunvUNiBWZBV3n7KYRA&s' />
              </div>
              <input type='file' style={{ display: 'none' }} />
              <div className='button'>
                <button type='button'>Chọn Ảnh</button>
              </div>
              <div>
                Dung Lượng File tối đa 1MB
                <br />
                Định dạng:.JPEG, .PNG
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Profile
