import React from 'react'

const Activity = () => {
  return (
    <div className="activity-parent h-[280px] rounded-lg relative overflow-hidden text-white mx-3 mb-3">
      <img
        src="https://ik.imagekit.io/uimqpalyw/calao%20kenya%20safaris/images/imgblock1/345087676_596718845725871_957069171105796561_n.jpg?updatedAt=1696988338548"
        alt=""
        className="w-full h-full object-cover rounded-lg relative"
      />
      <div className="activity-content w-full bg-[#242424a3] z-10 absolute bottom-0 p-[.5rem]">
        <div className="flex gap-2 items-center">
          <i className="fa fa-calendar"></i>
          <p> Mar 15, 2017</p>
        </div>
        <h4 className="my-5 font-sans font-semibold text-xl">
          Raising Say Express Had Chiefly Detract
        </h4>
      </div>
    </div>
  )
}

export default Activity
