import { useRoutes } from 'react-router-dom'
import ProductList from './Pages/ProductsList/ProductsList'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import RegisterLayout from './Layout/RegisterLayout/RegisterLayout'

const useRouterElement = () => {
  const routElemnet = useRoutes([
    {
      path: '/',
      element: <ProductList />
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
