import React, { useState } from 'react'

const Accordion = () => {
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

        <span className="font-semibold text-[#242424] portrait:text-sm">
          Lorem ipsum dolor sit amet
        </span>
      </button>
      <div
        className={`  grid overflow-hidden transition-all duration-300 ease-in-out ${
          showAccordion
            ? `grid-rows-[1fr] opacity-100 mt-3`
            : `grid-rows-[0fr] opacity-0 mt-0`
        }`}
      >
        <div className="overflow-hidden text-gray-700 portrait:text-sm ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          nesciunt saepe at laborum totam accusamus odit! Saepe beatae accusamus
          aperiam at odit quod, minus, distinctio molestias amet est officiis
          fuga.
        </div>
      </div>
    </div>
  )
}

export default Accordion
