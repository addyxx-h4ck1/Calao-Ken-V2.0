import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/modules'
import 'swiper/css/pagination'

const Membership = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={7}
      speed={1100}
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 0, pauseOnMouseEnter: true }}
      breakpoints={{
        300: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        500: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 9,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png"
          alt=""
          className="object-cover border-[.1px] mx-3 border-[#737272c5] h-[50px] px-4 rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Membership
