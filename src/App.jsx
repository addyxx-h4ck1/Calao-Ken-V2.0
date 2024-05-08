import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/navbar/Sidebar'
function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const handleSideBar = () => {
    setShowSideBar(true)
  }

  const closeSideBar = () => {
    setShowSideBar(false)
  }

  return (
    <>
      <div className="top-div w-full py-5 flex justify-around px-4 portrait:justify-between portrait:space-x-5 text-nowrap border-b-2">
        <div className="left-div flex space-x-5 items-center">
          <a href="tel:+2547682999380">
            <i className="fa fa-phone"></i> +2547682999380
          </a>
          <a href="mailto:mail@gmail.com">
            <i className="fa fa-envelope"></i> info@mail.com
          </a>
          <select name="language" id="land">
            <option value="Fra">EUR</option>
            <option value="Eng">ENG</option>
            <option value="KISW">KISW</option>
          </select>
        </div>
        <div className="right-div flex space-x-5 items-center portrait:hidden">
          <div className="links space-x-5 border-r-3">
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="req-btns space-x-5">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
        <div className="humbugger-menu">
          <button
            className="py-2 px-6 bg-blue-600 rounded hidden portrait:block"
            onClick={handleSideBar}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
      {/* navBAR */}
      <Navbar />
      {showSideBar ? <Sidebar closeFunction={closeSideBar} /> : null}
    </>
  )
}

export default App
