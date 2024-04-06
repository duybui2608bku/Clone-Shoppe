import Footer from '../../Components/Footer/Footer'
import HeaderMain from '../../Components/HeaderMain/HeaderMain'

interface Props {
  children?: React.ReactNode
}

const MainLayOut = ({ children }: Props) => {
  return (
    <>
      <div className='main-layout'>
        <HeaderMain></HeaderMain>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayOut
