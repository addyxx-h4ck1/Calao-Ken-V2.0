import React from 'react'
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around items-center py-3 z-50 portrait:hidden">
        {/* LOGO */}
        <img
          src="https://www.calaokenyasafaris.com/apple-touch-icon.png"
          alt=""
          className="w-2/12"
        />
        {/* LINKS */}
        <section className="nav-links flex gap-7 items-center">
          {/* dropDown */}
          <div className="dropdown inline-block bg-white relative">
            <button className="dropdown-action-btn mb-4 hover:text-blue-600">
              <font>
                Safaris <i className="fa fa-caret-down"></i>
              </font>
            </button>
            <div className="dropdown-content  bg-white flex flex-col  rounded-lg shadow-2xl z-50 absolute hidden">
              <a href="" className="dropdown-link">
                10 day safari
              </a>
              <a href="" className="dropdown-link">
                10 day safari
              </a>
              <a href="" className="dropdown-link">
                10 day safari
              </a>
              <a href="" className="dropdown-link">
                10 day safari
              </a>
            </div>
          </div>
          {/* dropDown */}
          {/* dropDown */}
          <div className="dropdown inline-block bg-white relative">
            <button className="dropdown-action-btn mb-4 hover:text-blue-600">
              <font>
                Follow Us <i className="fa fa-caret-down"></i>
              </font>
            </button>
            <div className="dropdown-content  bg-white  flex flex-col  rounded-lg shadow-2xl z-50 absolute hidden">
              <a href="" className="dropdown-link">
                10 day safari
              </a>
              <a href="" className="dropdown-link">
                10 day safari
              </a>
              <a href="" className="dropdown-link">
                10 day safari
              </a>
              <a href="" className="dropdown-link">
                10 day safari
              </a>
            </div>
          </div>
          {/* dropDown */}
          <a href="" className="mb-4">
            Reviews
          </a>
          <a
            href=""
            className="py-2 mb-4 px-5 bg-blue-600 rounded-lg text-white hover:border-2 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700"
          >
            Book
          </a>
        </section>
      </nav>
    </>
  )
}

export default Navbar
