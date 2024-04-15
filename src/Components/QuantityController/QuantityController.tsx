import { InputHTMLAttributes } from 'react'
import InputNumber from '../InputNumber/InputNumber'
import './QuantityController.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  max?: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
}
const QuantityController = ({ max, onDecrease, onIncrease, onType, value, ...rest }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(event.target.value)
    if (max !== undefined && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }
    onType && onType(_value)
  }

  const increase = () => {
    let _value = Number(value) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }
    onIncrease && onIncrease(_value)
  }

  const decrease = () => {
    let _value = Number(value) - 1
    if (_value < 1) {
      _value = 1
    }
    onIncrease && onIncrease(_value)
  }

  return (
    <>
      <div className='quantity-controller'>
        <button onClick={decrease}>-</button>
        <InputNumber
          onChange={handleChange}
          {...rest}
          value={value}
          style={{ width: '50px', border: '1px solid #dddddd', outline: 'none', padding: '5px', textAlign: 'center' }}
        />
        <button onClick={increase}>+</button>
      </div>
    </>
  )
}

export default QuantityController
