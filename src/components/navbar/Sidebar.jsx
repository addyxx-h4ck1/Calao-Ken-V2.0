import React, { useRef } from 'react'

const Sidebar = ({ closeFunction }) => {
  return (
    <>
      {/* SIDEBAR */}
      <section className=" sidebar nav-links  gap-2 flex flex-col flex-wrap right-0  top-20 shadow-2xl float-right pt-2 rounded  bg-white landscape:hidden z-50 duration-500 absolute">
        <button
          className="self-end text-blue-600 text-xl hover:text-black hover:duration-700 px-5"
          onClick={closeFunction}
        >
          <i className="fa fa-x"></i>
        </button>
        {/* dropDown */}
        <div className="dropdown inline-block bg-white relative px-5">
          <button className="dropdown-action-btn mb-4 hover:text-blue-600">
            <font>
              Safaris &nbsp; <i className="fa fa-caret-down"></i>
            </font>
          </button>
          <div className="dropdown-content py-3  bg-white flex flex-col  rounded-lg shadow-2xl z-50 absolute hidden">
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

        <a href="" className="mb-4 px-5">
          Reviews
        </a>
        {/* dropDown */}
        <div className="dropdown inline-block bg-white relative px-5">
          <button className="dropdown-action-btn mb-4 hover:text-blue-600">
            <font>
              Follow Us &nbsp; <i className="fa fa-caret-down"></i>
            </font>
          </button>
          <div className="dropdown-content py-3  bg-white flex flex-col  rounded-lg shadow-2xl z-50 absolute hidden">
            <a href="" className="dropdown-link text-red-600 text-xs">
              <i className="fa-brands fa-instagram"> Instagram</i>
            </a>
            <a href="" className="dropdown-link  text-blue-400 text-xs">
              <i className="fa-brands fa-facebook"> Facebook</i>
            </a>
            <a href="" className="dropdown-link  text-green-500 text-xs">
              <i className="fa-brands fa-whatsapp"> whatsApp</i>
            </a>
            <a href="" className="dropdown-link  text-blue-500 text-xs">
              <i className="fa-brands fa-linkedin"> LinkedIn</i>
            </a>
          </div>
        </div>
        {/* dropDown */}
        <a
          href=""
          className="py-3  px-5 bg-blue-600 rounded-lg text-white text-center hover:border-2 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700 mx-5"
        >
          Book Safari
        </a>
        {/* CONTACT */}
        <section className="w-full bg-[#242424] p-3 px-5 text-white pb-7 rounded-lg flex flex-col justify-center relative">
          <h2 className="font-serif font-semibold text-sm">Get In Touch</h2>
          <p className="text-wrap my-3 text-xs">
            We must explain to you how all seds this mistakens idea off
            denouncing pleasures and praising pain was born and I will give you
            a completed accounts..
          </p>
          <div className="mt-3 leading-7 text-xs mb-5">
            <p>
              {' '}
              <i className="fa fa-location-dot text-blue-600 mr-3"></i> Malindi,
              Mombasa , Kenya
            </p>
            <p>
              {' '}
              <i className="fa fa-phone text-blue-600 mr-3"></i> +254 xxx xxx
              xxx
            </p>
            <p>
              {' '}
              <i className="fa fa-envelope text-blue-600 mr-3"></i>{' '}
              contact@mail.com
            </p>
            <p>
              {' '}
              <i className="fa fa-clock text-blue-600 mr-3"></i> open 24/7
            </p>
          </div>
          <a
            href=""
            className="py-3 mb-4 px-5 bg-green-600 rounded-lg text-white text-center hover:border-2 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <div className=" absolute bottom-0 p-3 text-[#818181] left-[20%] font-serif">
            <p className="text-center text-xs">
              &copy; {new Date().getFullYear()} | by{' '}
              <a
                href="https://solo.to/briann_bn/"
                target="_blank"
                className="underline text-blue-600"
              >
                brian_bn
              </a>
            </p>
          </div>
        </section>
      </section>
      {/* SIDEBAR */}
    </>
  )
}

export default Sidebar
