import React, { useRef } from 'react'

const Sidebar = ({ closeFunction }) => {
  return (
    <>
      {/* SIDEBAR */}
      <section className=" sidebar nav-links  gap-2 flex flex-col relative right-12 top-4 shadow-2xl float-right p-7 h-screen relative landscape:hidden">
        <button
          className="self-end text-blue-600 text-2xl hover:text-black hover:duration-700"
          onClick={closeFunction}
        >
          <i className="fa fa-x"></i>
        </button>
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

        <a href="" className="mb-4">
          Reviews
        </a>
        {/* dropDown */}
        <div className="dropdown inline-block bg-white relative">
          <button className="dropdown-action-btn mb-4 hover:text-blue-600">
            <font>
              Follow Us <i className="fa fa-caret-down"></i>
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
        <a
          href=""
          className="py-2 mb-4 px-5 bg-blue-600 rounded-lg text-white text-center hover:border-2 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700"
        >
          Book Safari
        </a>
      </section>
      {/* SIDEBAR */}
    </>
  )
}

export default Sidebar
