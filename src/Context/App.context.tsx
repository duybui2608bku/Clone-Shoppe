import { createContext, useState } from 'react'
import { getAccessTokenFormLS, getProfileFromLS } from '../Utils/Auth'
import { User } from '../Types/UserType'

interface AppContext {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  isProductsDetail: boolean
  setIsProductsDetail: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAppContext: AppContext = {
  isAuthenticated: Boolean(getAccessTokenFormLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  isProductsDetail: false,
  setIsProductsDetail: () => null
}

export const AppContext = createContext<AppContext>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initialAppContext.profile)
  const [isProductsDetail, setIsProductsDetail] = useState<boolean>(initialAppContext.isProductsDetail)
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        isProductsDetail,
        setIsProductsDetail
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
