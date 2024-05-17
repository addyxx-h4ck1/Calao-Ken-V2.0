import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'

const Loading = () => {
  return (
    <div className="w-screen h-screen overflow-hidden text-sm flex justify-center items-center flex-col gap-8">
      <PropagateLoader
        color="#3f69e8"
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading
