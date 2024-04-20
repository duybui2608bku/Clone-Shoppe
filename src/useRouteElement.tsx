import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './Pages/ProductsList/ProductsList'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import RegisterLayout from './Layout/RegisterLayout/RegisterLayout'
import MainLayOut from './Layout/MainLayout/MainLayout'
import Profile from './Pages/User/Pages/Profile/Profile'
import { useContext } from 'react'
import { AppContext } from './Context/App.context'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import ProductItem from './Pages/ProductItem/ProductItem'
import path from './constants/path'
import Cart from './Pages/Cart/Cart'
import UseLayout from './Pages/User/Layout/UserLayout/UseLayout'
import ChangePassword from './Pages/User/Pages/ChangePassword/ChangePaword'
import HistoryPurchase from './Pages/User/Pages/HistoryPurchase/HistoryPurchase'
import Page404 from './Pages/Page404/Page404'

const useRouterElement = () => {
  const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
  }

  const RejectedRoute = () => {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
  }
  const { isProductsDetail } = useContext(AppContext)

  const isDetail = isProductsDetail
  const routElemnet = useRoutes([
    {
      path: '/',
      index: true,
      element: <MainLayOut>{isDetail ? <ProductDetail /> : <ProductList />}</MainLayOut>
    },
    {
      path: path.productDetail,
      index: true,
      element: <MainLayOut>{isDetail ? <ProductItem /> : <ProductList />}</MainLayOut>
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
        },
        {
          path: 'cart',
          element: (
            <MainLayOut>
              <Cart />
            </MainLayOut>
          )
        },
        {
          path: '*',
          element: (
            <MainLayOut>
              <Page404 />
            </MainLayOut>
          )
        },
        {
          path: path.profile,
          element: (
            <MainLayOut>
              <UseLayout>
                <Profile />
              </UseLayout>
            </MainLayOut>
          )
        },
        {
          path: path.changePassword,
          element: (
            <MainLayOut>
              <UseLayout>
                <ChangePassword />
              </UseLayout>
            </MainLayOut>
          )
        },
        {
          path: path.historyPurchase,
          element: (
            <MainLayOut>
              <UseLayout>
                <HistoryPurchase />
              </UseLayout>
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
