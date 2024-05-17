import React, { useEffect, useState } from 'react'
import Accordion from '../components/Accordion'
import { allSafaris } from '../assets/safaris'
import { Suspense } from 'react'
import Loading from '../components/navbar/Loading'
import { useParams } from 'react-router-dom'

const Safari = () => {
  const [data, setData] = useState()
  const { ID } = useParams()
  console.log(data)
  useEffect(() => {
    const safariData = allSafaris.find((el) => el.ID === ID)
    setData(safariData)
    document.title = safariData.destinations
  }, [])
  return (
    <>
      {!data ? (
        <>
          <main className="grid min-h-[80vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600">404</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back home
                </a>
              </div>
            </div>
          </main>
        </>
      ) : (
        <Suspense fallback={<Loading />}>
          {/* SAFARI HEADER */}
          <section className="main-bg h-[250px] relative overflow-hidden">
            <div className="main-bg-wrapper  h-full bg-[#200b17b6] flex flex-col justify-center items-center text-white text-3xl z-[1]  relative">
              <h1 className="relative text-center portrait:text-xl">
                {data.top}
              </h1>
              <p className="text-sm mt-3 relative ">
                Home / <span className="text-[gray] ">{'safari'}</span>
              </p>
            </div>
          </section>
          {/* Main SECTION */}
          <section className="main-section mb-[10rem] mt-[2rem] flex justify-center items-center flex-wrap flex-col text-[#242424] mx-3 overflow-hidden">
            <div className="main-section-wrapper">
              <article className="article-left portrait:text-sm">
                <h1 className="text-3xl portrait:text-lg">
                  {data.destinations}
                </h1>
                {/*  */}
                <div className="safari-headers flex flex-wrap gap-2 text-[gray] items-center mt-3">
                  <p>
                    <i className="fa fa-location-dot"></i> {data.top}
                  </p>
                  <a href="" className="text-blue-600">
                    View on map
                  </a>
                  <div className="rating inline-block text-xs">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>

                  <a
                    href=""
                    target="_blank"
                    className="underline hover:text-blue-600"
                  >
                    Reviews
                  </a>
                </div>
                {/*  */}
                <div className="safari-bars flex gap-2 text-[gray] mt-3 flex-wrap w-full">
                  <button className="py-3 px-6 border-[1px] rounded-lg portrait:text-sm">
                    <i className="fa fa-clock text-blue-600"></i>{' '}
                    {data.duration}
                  </button>
                  <button className="py-3 px-6 border-[1px] rounded-lg duration-300 bg-blue-600 hover:bg-transparent hover:border-blue-600 hover:text-blue-600 text-white portrait:text-sm">
                    <a href="#book">Book Safari</a>
                    <i className="fa fa-caret-down  ml-2"></i>{' '}
                  </button>
                </div>
                {/*  */}
                <div className="safari-description mt-8">
                  <h3 className="text-xl portrait:text-lg">Description </h3>
                  <p className="mt-2 text-[#515050] portrait:text-sm">
                    {data.description}
                  </p>
                </div>
              </article>
              {/*  */}
              <article className="aside-wrapper mt-8 flex justify-between portrait:flex-col  gap-8">
                <div className="itineraries">
                  <h3 className="text-xl portrait:text-lg mb-3">Itinerary</h3>
                  {data.itinerary.map((itinerary) => {
                    return <Accordion key={data.itinerary} {...itinerary} />
                  })}
                </div>
                <aside className="aside w-[100%] flex flex-col gap-3">
                  {/* MAP */}
                  <div className="safari-map w-full  h-[250px] relative mb-[3rem]">
                    <h3 className="text-xl portrait:text-lg mb-3">Map</h3>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2040588.3592586827!2d36.02404948007123!3d-2.6585217106116428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaasai%20mara!5e0!3m2!1sen!2ske!4v1715880848511!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  {/* book-by-whatsapp */}
                  <h3 className="text-xl portrait:text-lg my-2">Booking</h3>
                  <div className="book-by-whatsapp relative flex justify-center items-center flex-col border-[#c3c1c1c6] border-[1px] px-6 py-2 text-center">
                    <p>
                      <i className="fa-brands fa-whatsapp text-[#10ff10] text-3xl"></i>
                    </p>
                    <h2 className="py-2 relative mb-2 text-2xl portrait:text-lg">
                      Book By Whatsapp
                    </h2>
                    <p>+254 xxx xxx</p>
                    <i className="text-xs">Open 24hrs</i>
                  </div>
                </aside>
              </article>
            </div>
          </section>
        </Suspense>
      )}
    </>
  )
}

export default Safari
