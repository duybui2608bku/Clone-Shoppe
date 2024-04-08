import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './Pages/ProductsList/ProductsList'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import RegisterLayout from './Layout/RegisterLayout/RegisterLayout'
import MainLayOut from './Layout/MainLayout/MainLayout'
import Profile from './Pages/Profile/Profile'
import { useContext } from 'react'
import { AppContext } from './Context/App.context'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}

const useRouterElement = () => {
  const routElemnet = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayOut>
          <ProductList />
        </MainLayOut>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayOut>
              <Profile />
            </MainLayOut>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routElemnet
}

export default useRouterElement
