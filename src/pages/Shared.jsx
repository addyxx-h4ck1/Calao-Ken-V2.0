import React from 'react'
import { Outlet } from 'react-router-dom'
import App from '../App'
const Shared = () => {
  return (
    <>
      <App />
      <Outlet />
    </>
  )
}

export default Shared
