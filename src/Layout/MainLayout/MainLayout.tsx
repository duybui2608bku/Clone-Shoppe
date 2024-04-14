import Footer from '../../Components/Footer/Footer'
import HeaderMain from '../../Components/HeaderMain/HeaderMain'

interface Props {
  children?: React.ReactNode
}

const MainLayOut = ({ children }: Props) => {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f5' }} className='main-layout'>
        <HeaderMain />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayOut
