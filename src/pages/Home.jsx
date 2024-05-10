import React from 'react'
import placesToVisit from '../assets/data'
import Destination from '../components/Destination'
const Home = () => {
  return (
    <>
      <section className="slider w-full mb-[2rem]">
        <div className="slider-wrapper h-full w-full flex justify-center items-center flex-col gap-6">
          <h1 className="capitalize text-6xl font-bold text-white w-[70%] text-center">
            your adventure, wonderful travel calls fast
          </h1>
          <a
            href=""
            className="py-3 mb-4 px-8 bg-blue-600 rounded-lg text-white hover:border-2 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700"
          >
            Book Safari
          </a>
        </div>
      </section>
      {/* ABOUT */}
      <section className="about-section flex w-full mt-2 mb-[2rem] px-6 gap-8 items-center">
        <article className="about-text w-[50%] ml-[7rem]">
          <p className="text-blue-600 text-xl mb-2">
            About Calao Kenya Safari's
          </p>
          <h2 className="text-3xl font-black text-[#2f2d2de8]  leading-[3rem] mb-3">
            We're Truely Dedicated To Make Your Travel Experience As Much As
            Simple And Fun As Possible
          </h2>
          <p className="text-[#2f2d2de8]">
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
      {/* ACKNOWLEDGEMENTS  */}
      <section className="acknowledgement flex flex-col justify-center w-full items-center px-4 mb-[2rem] flex-wrap">
        <h2 className="text-3xl font-black text-[#2f2d2de8]  leading-[3rem] mb-3 text-center flex flex-col relative pb-[1rem]">
          Why Choose Us
        </h2>
        <p className="text-center w-[60%] portrait:w-[100%] text-[#2f2d2de8] mb-[2rem]">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="why-choose-us-icons">
          <div className="first flex flex-col items-center text-center border-2 py-[1rem] px-[0.5rem] shadow-xl rounded-lg">
            <i className="fa fa-tag text-6xl text-blue-600 mb-[0.5rem]"></i>
            <h3 className="text-xl text-[#2f2d2de8] font-semibold mb-3 text-blue-600">
              Competitive Pricing
            </h3>
            <p>
              With 500+ suppliers and the purchasing power of 300 million
              members
            </p>
          </div>
          <div className="first flex flex-col items-center text-center border-2 py-[1rem] px-[0.5rem] shadow-xl rounded-lg">
            <i className="fa fa-award text-6xl text-blue-600 mb-[0.5rem]"></i>
            <h3 className="text-xl text-[#2f2d2de8] font-semibold mb-3 text-blue-600">
              Award Winning Service
            </h3>
            <p>
              Fabulous Travel worry free knowing that we're here if you need us,
              24 hours a day
            </p>
          </div>
          <div className="first flex flex-col items-center text-center border-2 py-[1rem] px-[0.5rem] shadow-xl rounded-lg">
            <i className="fa fa-location text-6xl text-blue-600 mb-[0.5rem]"></i>
            <h3 className="text-xl text-[#2f2d2de8] font-semibold mb-3 text-blue-600">
              Wide Country Coverage
            </h3>
            <p>
              1,200,000 hotels in more than 200 countries and regions & flights
              to over 5,000 citites.
            </p>
          </div>
        </div>
      </section>
      {/* TOP MOST DESTINATIONS */}
      <section className="top-most-destinations my-[2rem] px-[2px]">
        <div className="top-banner h-[250px] bg-blue-700 flex items-center justify-center ">
          <h2 className="text-center text-white text-3xl font-bold ">
            Top Most Destinations
          </h2>
        </div>
        {placesToVisit.map((el) => {
          return <Destination key={el.destination} {...el} />
        })}
      </section>
      {/* BEST SAFARI PLANS */}
      <section className="safari-plans flex flex-col justify-center w-full items-center px-4 mb-[2rem] flex-wrap">
        <h2 className="text-3xl font-black text-[#2f2d2de8]  leading-[3rem] mb-3 text-center flex flex-col relative pb-[1rem]">
          Perfect Holiday Plan
        </h2>
        <p className="text-center w-[60%] portrait:w-[100%] text-[#2f2d2de8] mb-[2rem]">
          Lorem Ipsum is simply dummy text the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </section>
    </>
  )
}

export default Home
