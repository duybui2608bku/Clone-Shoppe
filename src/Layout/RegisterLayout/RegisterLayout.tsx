import Footer from '../../Components/Footer/Footer'
import RegisterHeader from '../../Components/RegisterHeader/RegisterHeader'
import './RegisterLayout.scss'

interface Props {
  children?: React.ReactNode
}

const RegisterLayout = ({ children }: Props) => {
  return (
    <>
      <div className='register-layout-container'>
        <RegisterHeader />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default RegisterLayout
