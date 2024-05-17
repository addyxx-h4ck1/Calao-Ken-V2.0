import React from 'react'
import { allSafaris } from '../assets/safaris'
const Safari = React.lazy(() => import('../components/Safari'))
const ShortSafaris = () => {
  //get short day safaris
  const shortDaySafaris = allSafaris.filter(
    (safari) => safari.duration.split(' ')[0] <= 3
  )

  return (
    <>
      {shortDaySafaris.map((safari) => {
        return <Safari key={safari.description} {...safari} />
      })}
    </>
  )
}

export default ShortSafaris
