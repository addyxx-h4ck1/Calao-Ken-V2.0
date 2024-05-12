import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/modules'
import 'swiper/css/pagination'

const Slider = () => {
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
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm ">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-parent relative flex flex-col items-center rounded-md pb-8 portrait:px-4">
          <img
            src="https://www.congosafaristours.com/wp-content/uploads/2020/10/Nairobi-National-Park.jpg"
            alt=""
            className="w-full h-[200px] object-cover rounded-md"
          />
          <div className="slider-content relative w-[90%] top-[-15px] z-10  bg-white rounded-lg text-[#242424e1] p-3 shadow-xl">
            <h3 className="font-semibold text-blue-500 text-sm portrait:text-xs">
              <i className="fa fa-location-dot"></i> Nairobi National Park
            </h3>
            <h3 className="mt-1 font-bold portrait:text-sm">
              Experience a Park in a City
            </h3>
            <p className="py-2 border-b-2 border-dashed border-[#4b4a4a24] text-sm">
              The only national park located in the middle of a city.
            </p>
            <button className="py-3 text-blue-600 font-semibold portrait:py-2 portrait:text-sm">
              See more
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
