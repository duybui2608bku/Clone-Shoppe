import { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key: string]: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc!'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài vượt quá 160 kí tự!'
    },
    minLength: {
      value: 5,
      message: 'Độ dài phải hơn 5 kí tự!'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài mật khẩu  vượt quá 160 kí tự!'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải hơn 5 kí tự!'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Xác nhận mật khẩu là bắt buộc!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài mật khẩu  vượt quá 160 kí tự!'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu phải hơn 5 kí tự!'
    },
    validate:
      typeof getValues === 'function'
        ? (value: any) => value === getValues('password') || 'Mật khẩu không khớp'
        : undefined
  }
})
