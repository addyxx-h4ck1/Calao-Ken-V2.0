import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/modules'
import 'swiper/css/pagination'

const Slidercontent = React.lazy(() => import('./Slidercontent'))

const Slider = ({ safariData }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      speed={1100}
      modules={[Autoplay, Navigation, Pagination]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
      loop={true}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {safariData.map((safari) => {
        return (
          <SwiperSlide key={safari.destinations}>
            <Slidercontent {...safari} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider
