import React from 'react'

const Activity = ({ ...activity }) => {
  return (
    <div className="activity-parent h-[280px] rounded-[5px] relative overflow-hidden text-white mx-2 mb-3">
      <img
        src={activity.img}
        alt=""
        className="w-full h-full object-cover rounded-[5px] relative"
      />
      <div className="activity-content w-full bg-[#242424c5] z-10 absolute bottom-0 p-[.5rem]">
        <div className="flex gap-2 items-center">
          <i className="fa fa-calendar"></i>
          <p> {activity.date}</p>
        </div>
        <h4 className="my-3 portrait:my-4 font-sans font-semibold text-xl portrait:text-lg">
          {activity.title}
        </h4>
      </div>
    </div>
  )
}

export default Activity
