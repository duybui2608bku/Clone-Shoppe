import UserSideNav from '../../Components/UserSideNav/UserSideNav'
import './UserLayout.scss'
interface Props {
  children?: React.ReactNode
}
const UseLayout = ({ children }: Props) => {
  return (
    <>
      <div className='user-layout'>
        <div>
          <UserSideNav />
        </div>
        <div className='a'>{children}</div>
      </div>
    </>
  )
}

export default UseLayout
