import React from 'react'
import { allSafaris } from '../assets/safaris'
const Slider = React.lazy(() => import('../components/Slider'))
const Adventures = () => {
  return (
    <>
      {allSafaris.map((safari) => {
        return <Slider />
      })}
    </>
  )
}

export default Adventures
