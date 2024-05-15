import React from 'react'
import { Outlet } from 'react-router-dom'
const App = React.lazy(() => import('../App'))
const Footer = React.lazy(() => import('../components/Footer'))
const Shared = () => {
  return (
    <>
      <App />
      <Outlet />
      <Footer />
    </>
  )
}

export default Shared
