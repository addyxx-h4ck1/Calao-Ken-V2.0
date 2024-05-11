import ReactDOM from 'react-dom/client'
import { useEffect, useState, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
const Error = lazy(() => import('./pages/Error.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Shared = lazy(() => import('./pages/Shared.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const Loading = lazy(() => import('./components/navbar/Loading.jsx'))
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
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(false)
    setTimeout(() => {
      setLoaded(true)
    }, 5000)
  }, [])
  return <>{loaded ? <RouterProvider router={router} /> : <Loading />}</>
}

export default Main

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
