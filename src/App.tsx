import { useContext, useEffect } from 'react'
import useRouterElement from './useRouteElement'
import { LocalStorageEventTarget } from './Utils/Auth'
import { AppContext } from './Context/App.context'

const App = () => {
  const routElemnet = useRouterElement()
  const { reset } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  return (
    <>
      <div>{routElemnet}</div>
    </>
  )
}

export default App
