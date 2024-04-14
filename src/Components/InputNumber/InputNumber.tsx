import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputNumber = ({ onChange, ...rest }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if ((/^[0-9\b]+$/.test(value) || value === '') && onChange) {
      onChange(event)
    }
  }
  return <input {...rest} onChange={handleChange} />
}
export default InputNumber
