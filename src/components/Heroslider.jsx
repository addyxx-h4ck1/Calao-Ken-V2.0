import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/modules'
import 'swiper/css/pagination'
const Heroslider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      effect={'slide'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -30],
        },
        next: {
          translate: ['50%', 0, 0],
        },
      }}
      speed={10}
      modules={[Autoplay, Navigation, Pagination, EffectCreative]}
      navigation={{
        prevEl: '.swiper-button-prev-main',
        nextEl: '.swiper-button-next-main',
      }}
      loop={true}
      pagination
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <section className="slider w-full h-[80vh] portrait:h-[250px] bg-black">
          <div className="slider-wrapper h-full w-full portrait:h-[300px] flex justify-center items-center flex-col gap-2">
            <h1 className="capitalize  portrait:w-[90%] text-6xl font-bold text-white w-[70%] text-center portrait:text-2xl">
              your adventure, wonderful travel calls fast
            </h1>
            <a
              href=""
              className="py-3 mb-4 px-8 bg-blue-600 rounded-lg text-white hover:border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700 duration-700 ease-in-out portrait:px-4 portrait:text-sm"
            >
              Book Safari
            </a>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="slider-2 w-full h-[80vh] portrait:h-[250px] bg-black">
          <div className="slider-wrapper h-full w-full portrait:h-[300px] flex justify-center items-center flex-col gap-2">
            <h1 className="capitalize  portrait:w-[90%] text-6xl font-bold text-white w-[70%] text-center portrait:text-2xl">
              Make You Free To Travel With Us
            </h1>
            <a
              href=""
              className="py-3 mb-4 px-8 bg-blue-600 rounded-lg text-white hover:border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700 duration-700 ease-in-out portrait:px-4 portrait:text-sm"
            >
              Book Safari
            </a>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="slider-3 w-full h-[80vh] portrait:h-[250px] bg-black">
          <div className="slider-wrapper h-full w-full portrait:h-[300px] flex justify-center items-center flex-col gap-2">
            <h1 className="capitalize  portrait:w-[90%] text-6xl font-bold text-white w-[70%] text-center portrait:text-2xl">
              Sensesion Safari Trips Is Coming For You
            </h1>
            <a
              href=""
              className="py-3 mb-4 px-8 bg-blue-600 rounded-lg text-white hover:border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700 duration-700 ease-in-out portrait:px-4 portrait:text-sm"
            >
              Book Safari
            </a>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  )
}

export default Heroslider
