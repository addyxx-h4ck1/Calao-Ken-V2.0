import React, { Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Error from './pages/Error.jsx'
import About from './pages/About.jsx'
import Shared from './pages/Shared.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Loading from './components/navbar/Loading.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shared />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const Main = () => {
  const [loaded, setLoaded] = useState(true)
  return <>{loaded ? <RouterProvider router={router} /> : <Loading />}</>
}

export default Main

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
