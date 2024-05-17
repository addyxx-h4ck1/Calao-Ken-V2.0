import React from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'

const Slidercontent = ({ ...safari }) => {
  const navigate = useNavigate()
  return (
    <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
      <img
        src={safari.img}
        alt={safari.destinations}
        className="w-full h-[200px] object-cover rounded-md"
      />
      <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
        <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
          <i className="fa fa-clock"></i> {safari.duration}
        </h3>
        <h3 className="mt-1 font-bold portrait:text-sm line-clamp-3">
          {safari.destinations}
        </h3>
        <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm portrait:text-xs line-clamp-3">
          {safari.description}
        </p>
        <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm ">
          <a href={`/safari/${safari.ID}`}>See more</a>
        </button>
      </div>
    </div>
  )
}

export default Slidercontent
