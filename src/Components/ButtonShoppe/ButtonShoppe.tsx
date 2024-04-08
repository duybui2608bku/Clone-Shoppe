type ButtonShoppeProps = {
  title: string
}

const ButtonShoppe: React.FC<ButtonShoppeProps> = ({ title }) => {
  return (
    <button
      style={{ backgroundColor: '#ee4d2d', border: 'none', color: 'white', padding: '10px 30px' }}
      className='button-shoppe'
    >
      {title}
    </button>
  )
}

export default ButtonShoppe
