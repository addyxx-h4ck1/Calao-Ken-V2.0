import React from 'react'

const Destination = ({ ...el }) => {
  return (
    <div className="destination h-[250px] relative overflow-hidden portrait:h-[220px]">
      <img src={el.img} alt="" className="w-full h-full object-cover " />
      <div className="dest-content absolute bottom-[13px] z-[1] px-4">
        <div className="rating inline-block">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <h3 className="font-semibold text-white text-xl portrait:text-sm">
          {el.destination}
        </h3>
      </div>
      <div className="destination-overlay w-full h-full absolute left-0 top-0 opacity-1 text-center  flex justify-center items-center bg-[#00000091] ">
        <a
          href=""
          className="py-3 mb-4 px-8 hover:bg-blue-600 rounded-lg text-white border-2 border-white  hover:text-white hover:border-blue-600 hover:duration-700 duration-700"
        >
          Book
        </a>
      </div>
    </div>
  )
}

export default Destination
