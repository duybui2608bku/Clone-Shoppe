import { useRoutes } from 'react-router-dom'
import ProductList from './Pages/ProductsList/ProductsList'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import RegisterLayout from './Layout/RegisterLayout/RegisterLayout'
import MainLayOut from './Layout/MainLayout/MainLayout'

const useRouterElement = () => {
  const routElemnet = useRoutes([
    {
      path: '/',
      element: (
        <MainLayOut>
          <ProductList />
        </MainLayOut>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routElemnet
}
export default useRouterElement
