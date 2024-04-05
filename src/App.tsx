import useRouterElement from './useRouteElement'

const App = () => {
  const routElemnet = useRouterElement()
  return (
    <>
      <div>{routElemnet}</div>
    </>
  )
}

export default App
