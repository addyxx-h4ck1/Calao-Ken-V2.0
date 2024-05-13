import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import reviewsData from '../assets/reviews'
// Import Swiper styles
import 'swiper/css'
import 'swiper/modules'
const Review = React.lazy(() => import('../components/Review'))
const Reviews = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      speed={1100}
      modules={[Autoplay, Navigation, Pagination]}
      navigation={{
        prevEl: '.swiper-button-prev-rev',
        nextEl: '.swiper-button-next-rev',
      }}
      loop={true}
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      className="mySwiper-rev"
    >
      {reviewsData.map((set) => {
        return (
          <SwiperSlide key={set.name}>
            <Review {...set} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Reviews
