type ButtonShoppeProps = {
  title?: string
  bachGround?: string
  colorText?: string
}

const ButtonShoppe: React.FC<ButtonShoppeProps> = ({ title, bachGround, colorText }) => {
  return (
    <button
      style={{
        backgroundColor: bachGround ? bachGround : '#ee4d2d',
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
