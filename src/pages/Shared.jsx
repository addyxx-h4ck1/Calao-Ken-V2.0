import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import App from '../App'
import Loading from '../components/navbar/Loading'
const Shared = () => {
  const [load, setLoad] = useState(false)
  window.onload = () => {
    setLoad(true)
  }
  return (
    <>
      {load ? (
        <>
          <App />
          <Outlet />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Shared
