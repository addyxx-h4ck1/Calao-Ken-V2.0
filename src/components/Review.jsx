import React from 'react'

const Review = ({ ...set }) => {
  return (
    <div className="review-container flex flex-col justify-center items-center mx-4">
      <div className="review-message shadow-xl p-10  rounded-xl w-full h-[300px] portrait:h-[fit-content] flex flex-col items-center justify-center">
        <p className="text-[#242424b7] portrait:text-[12px] portrait:leading-[1.2rem]">
          <i className="fa fa-quote-left text-[#242424ba] text-4xl mr-3"></i>
          <i>{set.message}</i>
        </p>
      </div>
      <div className="review-writter flex items-center gap-3 self-start my-3">
        <img
          src={set.img}
          alt=""
          className="w-[100px] h-[100px] portrait:h-[80px] portrait:w-[80px]  object-cover rounded-full border-2 border-blue-600 bg-[#242424]"
        />
        <div>
          <a href={set.profile} target="_blank">
            {' '}
            <p className="name portrait:text-sm font-semibold hover:text-blue-600 hover:underline hover:duration-300 duration-300">
              {set.name}
            </p>
          </a>
          <p className="profession text-[#242424ba]">{set.profession}</p>
          <div className="rating inline-block portrait:text-sm">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
