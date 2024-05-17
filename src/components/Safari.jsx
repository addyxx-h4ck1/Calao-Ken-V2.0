import React from 'react'

const Safari = ({ ...safari }) => {
  return (
    <div className="safari-parent shadow-sm overflow-hidden rounded-xl relative mx-3">
      <div className="safari-img relative overflow-hidden ">
        <img
          src={safari.img}
          alt={safari.destinations}
          className="w-full h-[200px] object-cover portrait:h-[190px]"
        />
        <div className="tag absolute bottom-[20px] px-8 z-[1] w-full">
          <p className="font-semibold text-white text-sm  portrait:text-xm">
            From Nairobi
          </p>
        </div>
      </div>
      <div className="safari-content text-[#2f2d2dc7] p-5 my-2 portrait:text-sm">
        <i className="fa fa-location-dot"></i> {safari.top}
        <h4 className="text-[#2f2d2de8] border-dashed border-2 border-r-0  border-l-0 font-semibold duration-300 hover:text-blue-600 hover:duration-300 w-full py-3 my-4 portrait:text-sm">
          {safari.destinations}
        </h4>
        <div className="rating">
          <div className="rating inline-block">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h3 className="font-semibold  text-[#2f2d2dc7] mt-2">
            <i className="fa fa-clock"></i> {safari.duration}
          </h3>
        </div>
      </div>
      <div className="ribbon ribbon-top-left overflow-hidden text-sm portrait:text-xs absolute z-[2] w-[150px] h-[150px]">
        <span>Safari</span>
      </div>
    </div>
  )
}

export default Safari
