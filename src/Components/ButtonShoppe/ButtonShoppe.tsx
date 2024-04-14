type ButtonShoppeProps = {
  title?: string
  backGround?: string
  colorText?: string
}

const ButtonShoppe: React.FC<ButtonShoppeProps> = ({ title, backGround, colorText }) => {
  return (
    <button
      style={{
        backgroundColor: backGround ? backGround : '#ee4d2d',
        border: 'none',
        color: colorText ? colorText : 'white',
        padding: '10px 30px'
      }}
      className='button-shoppe'
    >
      {title}
    </button>
  )
}

export default ButtonShoppe
