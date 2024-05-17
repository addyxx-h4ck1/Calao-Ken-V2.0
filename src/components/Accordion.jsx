import React, { useState } from 'react'

const Accordion = ({ ...itinerary }) => {
  console.log(itinerary)
  const [showAccordion, setShowAccordion] = useState(false)
  return (
    <div className="accordion flex flex-col bg-[#f9f9f9e0] rounded-lg justify-between it w-[100%] p-4 mb-2">
      <button
        className="flex gap-4 items-center "
        onClick={() => setShowAccordion(!showAccordion)}
      >
        <span
          className={`transition-all duration-300 ease-in-out text-blue-600 text-lg ${
            showAccordion
              ? `fa fa-angle-double-down`
              : `fa fa-angle-double-right`
          }`}
        ></span>

        <span className="font-semibold text-[#242424] text-sm portrait:text-xs text-left">
          {itinerary.day}
        </span>
      </button>
      <div
        className={`  grid overflow-hidden transition-all duration-300 ease-in-out ${
          showAccordion
            ? `grid-rows-[1fr] opacity-100 mt-3`
            : `grid-rows-[0fr] opacity-0 mt-0`
        }`}
      >
        <div className="overflow-hidden text-gray-700 portrait:text-sm text-justify">
          {itinerary.detail}
        </div>
      </div>
    </div>
  )
}

export default Accordion
