import React from 'react'
import { useSwiper } from 'swiper/react'
import placesToVisit from '../assets/data'
import { recentActivity } from '../assets/activity'
import { allSafaris } from '../assets/safaris'
const Activity = React.lazy(() => import('../components/Activity'))
const Destination = React.lazy(() => import('../components/Destination'))
const Safari = React.lazy(() => import('../components/Safari'))
const Membership = React.lazy(() => import('../components/Membership'))
const Heroslider = React.lazy(() => import('../components/Heroslider'))
const Slider = React.lazy(() => import('../components/Slider'))
const Reviews = React.lazy(() => import('../components/Reviews'))
const ShortSafaris = React.lazy(() => import('../components/ShortSafaris'))

const Home = () => {
  const swiper = useSwiper()

  return (
    <>
      <section className="main-slider relative bg-[#242424]">
        <button
          className="swiper-button-prev-main absolute text-lg z-[2] left-[40px] top-[50%] text-white py-2 px-4 rounded-lg duration-300 hover:duration-300 hover:text-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 bg-blue-600 portrait:px-3 portrait:py-1 portrait:left-0 portrait:top-[40%] "
          onClick={() => swiper.slidePrev()}
        >
          <i className="fa fa-caret-left"></i>
        </button>

        <button
          className="swiper-button-next-main absolute text-lg z-[2] right-[40px] top-[50%] text-white py-2 px-4 rounded-lg duration-300 hover:duration-300 hover:text-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 bg-blue-600 portrait:px-3 portrait:py-1 portrait:right-0 portrait:top-[40%] "
          onClick={() => swiper.slideNext()}
        >
          <i className="fa fa-caret-right"></i>
        </button>
        <Heroslider />
      </section>

      {/* ABOUT */}
      <section className="about-section flex w-full mt-10 mb-[3rem] px-6 portrait:px-3 gap-8 items-center">
        <article className="about-text w-[50%] ml-[7rem]">
          <p className="text-blue-600 text-xl portrait:text-sm portrait:text-center mb-2">
            About Calao Kenya Safari's
          </p>
          <h2 className="text-3xl portrait:text-2xl portrait:text-center font-black text-[#2f2d2de8]  leading-[3rem] mb-3">
            We're Truely Dedicated To Make Your Travel Experience As Much As
            Simple And Fun As Possible
          </h2>
          <p className="text-[#2f2d2de8] portrait:text-sm portrait:text-center ">
            Jambo, Hello and Salam. Calao Kenya Safaris is an agency that
            organizes private safaris for all French-speaking clients (French,
            Belgian, Canadian, Swiss, Luxembourgish and others…) departing from
            Mombasa or Nairobi. We will pick you up from the airport or your
            hotel in Nairobi or Mombasa to show you our many parks & reserves.
          </p>
        </article>
        {/* <div className="about-images w-[40%]">
          <img
            src="https://images.unsplash.com/photo-1554990772-0bea55d510d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[100%]"
          />
        </div> */}
      </section>
      {/* PROMO */}
      <section className="banner-promo flex flex-col justify-center items-center my-6 mb-[3rem] ">
        <div className="promo-wrapper flex rounded-2xl px-2">
          <div className="promo-text w-[50%] bg-[#200b17] text-white flex flex-col justify-center items-center px-4 py-8 rounded-tl-2xl rounded-bl-2xl text-center">
            <h2 className="text-5xl font-black text-center mb-4 leading-[4rem] ">
              SUMMER SPECIAL UPTO <span className="text-blue-600">25%</span> OFF
            </h2>
            <p className="font-semibold text-xl">
              SPEND THE BEST VACTION WITH US{' '}
            </p>
            <p className="mb-4 text-xl">The Nights Of Thailand</p>
            <a
              href=""
              className="py-3 mb-4 px-8 bg-transparent rounded-lg  text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:duration-700 duration-700 ease-in-out"
            >
              Book Now
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1628961204673-6d1f395deb61?q=80&w=1495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[50%] object-cover rounded-tr-2xl rounded-br-2xl"
          />
        </div>
      </section>
      {/* ACKNOWLEDGEMENTS  */}
      <section className="acknowledgement flex flex-col justify-center w-full items-center  mb-[3rem] flex-wrap">
        <h2 className="text-3xl font-black text-[#2f2d2de8]  leading-[3rem] mb-3 text-center flex flex-col relative pb-[1rem] portrait:text-xl">
          Why Choose Us
        </h2>
        <p className="text-center w-[60%] portrait:w-[100%] portrait:text-xs text-[#2f2d2de8] mb-[2rem] px-4">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="why-choose-us-icons">
          <div className="first flex flex-col items-center text-center border-2 py-[1rem] mx-[0.5rem] shadow-xl rounded-lg portrait:text-sm">
            <i className="fa fa-tag text-6xl text-blue-600 mb-[0.5rem]"></i>
            <h3 className="text-xl text-[#2f2d2de8] font-semibold mb-3 text-blue-600">
              Competitive Pricing
            </h3>
            <p className="px-2 text-sm text-[#242424d0]">
              With 500+ suppliers and the purchasing power of 300 million
              members
            </p>
          </div>
          <div className="first flex flex-col items-center text-center border-2 py-[1rem] mx-[0.5rem] shadow-xl rounded-lg portrait:text-sm">
            <i className="fa fa-award text-6xl text-blue-600 mb-[0.5rem]"></i>
            <h3 className="text-xl text-[#2f2d2de8] font-semibold mb-3 text-blue-600">
              Award Winning Service
            </h3>
            <p className="px-2 text-sm text-[#242424d0]">
              Fabulous Travel worry free knowing that we're here if you need us,
              24 hours a day
            </p>
          </div>
          <div className="first flex flex-col items-center text-center border-2 py-[1rem] mx-[0.5rem] shadow-xl rounded-lg portrait:text-sm">
            <i className="fa fa-location text-6xl text-blue-600 mb-[0.5rem]"></i>
            <h3 className="text-xl text-[#2f2d2de8] font-semibold mb-3 text-blue-600">
              Wide Country Coverage
            </h3>
            <p className="px-2 text-sm text-[#242424d0]">
              1,200,000 hotels in more than 200 countries and regions & flights
              to over 5,000 citites.
            </p>
          </div>
        </div>
      </section>
      {/* TOP MOST DESTINATIONS */}
      <section className="top-most-destinations my-[3rem] px-[2px]">
        <div className="top-banner h-[250px] portrait:h-[100px] bg-blue-700 flex items-center justify-center ">
          <h2 className="text-center text-white text-3xl font-bold ">
            Top Most Destinations
          </h2>
        </div>
        {placesToVisit.map((el) => {
          return <Destination key={el.destination} {...el} />
        })}
      </section>
      {/* BEST SAFARI PLANS */}
      <section className="safari-plans flex flex-col justify-center w-full items-center mb-[2rem] flex-wrap ">
        <h2 className="text-3xl font-black text-[#2f2d2de8]  leading-[3rem] mb-3 text-center flex flex-col relative pb-[1rem] portrait:text-xl">
          Perfect Holiday Plan
        </h2>
        <p className="text-center w-[60%] portrait:w-[100%] text-[#2f2d2de8] mb-[2rem] portrait:text-xs px-2">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <article className="safari-listings portrait:gap-4 overflow-hidden xl:w-[80%]">
          <ShortSafaris />
        </article>
      </section>
      {/* BANNER */}
      <section className="banner-A w-full h-[400px] portrait:h-[300px] mb-[3rem] relative overflow-hidden flex justify-center items-center">
        <div className="z-[1]">
          <h2 className="text-white text-4xl font-bold text-center portrait:text-2xl">
            Find Your Next Place To Visit
          </h2>
          <h1 className="uppercase text-white text-6xl font-black text-center mt-3 portrait:text-3xl">
            explore the kenyan wildlife
          </h1>
          <h1 className=" location-icon relative pb-2 uppercase text-white text-6xl font-black text-center mt-4">
            <i className="fa fa-location-dot"></i>
          </h1>
        </div>
      </section>
      {/* SLIDER  */}
      <section className="slider-parent relative my-6 flex flex-col justify-center items-center overflow-hidden mb-[3rem] ">
        <h2 className="text-3xl font-black text-[#2f2d2de8]  leading-[3rem] mb-3 text-center flex flex-col relative pb-[1rem] portrait:text-xl">
          Calao Adventures
        </h2>
        <p className="text-center w-[60%] portrait:w-[100%] text-[#2f2d2de8] mb-[2rem] portrait:text-xs px-2">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button
          className="swiper-button-prev absolute text-lg z-50 left-[40px] top-[50%] text-white py-2 px-4 rounded-lg duration-300 hover:duration-300 hover:text-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 bg-blue-600 portrait:hidden "
          onClick={() => swiper.slidePrev()}
        >
          <i className="fa fa-caret-left"></i>
        </button>

        <button
          className="swiper-button-next absolute text-lg z-50 right-[40px] top-[50%] text-white py-2 px-4 rounded-lg duration-300 hover:duration-300 hover:text-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 bg-blue-600 portrait:hidden "
          onClick={() => swiper.slideNext()}
        >
          <i className="fa fa-caret-right"></i>
        </button>
        <article className="relative overflow-hidden">
          {/* SLIDES */}
          <Slider safariData={allSafaris} />
        </article>
      </section>
      {/* PROMO */}
      <section className="banner-promo flex flex-col justify-center items-center my-6 mb-[3rem] ">
        <div className="promo-wrapper flex rounded-2xl px-2">
          <div className="promo-text w-[50%] bg-[#200b17] text-white flex flex-col justify-center items-center px-4 py-8 rounded-tl-2xl rounded-bl-2xl text-center">
            <h2 className="text-5xl font-black text-center mb-4 leading-[4rem] ">
              SUMMER SPECIAL UPTO <span className="text-blue-600">25%</span> OFF
            </h2>
            <p className="font-semibold text-xl">
              SPEND THE BEST VACTION WITH US{' '}
            </p>
            <p className="mb-4 text-xl">The Nights Of Thailand</p>
            <a
              href=""
              className="py-3 mb-4 px-8 bg-transparent rounded-lg  text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:duration-700 duration-700 ease-in-out"
            >
              Book Now
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1547471080-ee21d874bc8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[50%] object-cover rounded-tr-2xl rounded-br-2xl"
          />
        </div>
      </section>
      {/* REVIEWS */}
      <section className="reviews mt-3 flex flex-col relative justify-center items-center bg-slate-100 py-8 overflow-hidden mb-[3rem">
        <h2 className="text-3xl font-black text-[#2f2d2de8] mb-3 text-center flex flex-col relative pb-[1rem] portrait:text-2xl">
          Top Tour Reviews
        </h2>
        {/* <p className="text-center w-[60%] portrait:w-[100%] text-[#2f2d2de8] mb-[2rem] portrait:text-sm px-2">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p> */}
        <button
          className="swiper-button-prev-rev absolute text-lg z-50 left-[40px] top-[50%] text-white py-2 px-4 rounded-lg duration-300 hover:duration-300 hover:text-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 bg-blue-600 portrait:hidden "
          onClick={() => swiper.slidePrev()}
        >
          <i className="fa fa-caret-left"></i>
        </button>

        <button
          className="swiper-button-next-rev absolute text-lg z-50 right-[40px] top-[50%] text-white py-2 px-4 rounded-lg duration-300 hover:duration-300 hover:text-blue-600 hover:bg-transparent hover:border-2 hover:border-blue-600 bg-blue-600 portrait:hidden "
          onClick={() => swiper.slideNext()}
        >
          <i className="fa fa-caret-right"></i>
        </button>
        <article className="">
          <Reviews />
        </article>
      </section>
      {/* MEMBERSHIPS */}
      <section className="memberships my-[3rem] flex-col flex justify-center items-center">
        <h2 className="text-3xl font-black text-[#2f2d2de8] mb-5 text-center flex flex-col relative pb-[1rem] portrait:text-2xl">
          Memberships
        </h2>
        <p className="text-center w-[60%] portrait:w-[100%] text-[#2f2d2de8] mb-[1rem] portrait:text-xs px-2">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <article className="mt-5">
          <Membership />
        </article>
      </section>
      {/*  */}
      <section className="recent-activities mt-[3rem] flex flex-col justify-center items-center bg-slate-100 py-6">
        <h2 className="text-3xl font-black text-[#2f2d2de8] mb-3 text-center flex flex-col relative pb-[1rem] portrait:text-2xl">
          Recent Activities
        </h2>
        {/* <p className="text-center w-[60%] portrait:w-[100%] text-[#2f2d2de8] mb-[2rem] portrait:text-sm px-2">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p> */}
        <article className="mt-6 landscape::w-[80%]">
          {recentActivity.map((activity) => {
            return <Activity key={activity.date} {...activity} />
          })}
        </article>
      </section>
    </>
  )
}

export default Home
