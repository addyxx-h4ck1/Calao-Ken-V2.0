import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-[#200b17] text-white w-full flex justify-center items-center flex-col  p-5">
      <section className="footer-wrapper  border-b-[1px] pb-4 border-[#464646] portrait:text-xs overflow-hidden">
        <div className="contact-info">
          <img
            src="https://www.calaokenyasafaris.com/apple-touch-icon.png"
            alt=""
            className="w-[200px] mb-5"
          />
          <h2 className="font-bold text-xl portrait:text-lg relative flex flex-col pb-2 mb-5">
            Contact Info
          </h2>
          <div className="flex flex-col gap-4 mt-4 text-sm portrait:text-xs">
            <p>PO BOX : +254 xxx xxx</p>
            <p>Location : Malindi, Mombasa-Kenya</p>
            <div className="mt-3 flex gap-2">
              <a
                href=""
                className="border-[.2px] w-[40px] h-[40px] border-[gray] duration-300 hover:duration-300 flex justify-center items-center bg-[#1f181894] rounded-lg text-white text-lg hover:bg-blue-600 hover:border-0 portrait:text-sm hover:text-[#3a1b20]"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href=""
                className="border-[.2px] w-[40px] h-[40px] border-[gray] duration-300 hover:duration-300 flex justify-center items-center bg-[#1f181894] rounded-lg text-white text-lg hover:bg-blue-600 hover:border-0 portrait:text-sm hover:text-[#3a1b20]"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href=""
                className="border-[.2px] w-[40px] h-[40px] border-[gray] duration-300 hover:duration-300 flex justify-center items-center bg-[#1f181894] rounded-lg text-white text-lg hover:bg-blue-600 hover:border-0 portrait:text-sm hover:text-[#3a1b20]"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href=""
                className="border-[.2px] w-[40px] h-[40px] border-[gray] duration-300 hover:duration-300 flex justify-center items-center bg-[#1f181894] rounded-lg text-white text-lg hover:bg-blue-600 hover:border-0 portrait:text-sm hover:text-[#3a1b20]"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="company">
          <h2 className="font-bold text-xl portrait:text-lg relative flex flex-col pb-2 mb-5">
            Company
          </h2>
          <div className="flex flex-col gap-4 mt-4 text-sm portrait:text-xs">
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              About Us
            </a>
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              Terms
            </a>
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              Services
            </a>
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              Feedbacks
            </a>
          </div>
        </div>
        <div className="support">
          <h2 className="font-bold text-xl portrait:text-lg relative flex flex-col pb-2 mb-5">
            Support
          </h2>
          <div className="flex flex-col gap-4 mt-4 text-sm portrait:text-xs">
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              Contact
            </a>
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              Support
            </a>
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              Need Help?
            </a>
          </div>
        </div>
        <div className="feedback">
          <h2 className="font-bold text-xl portrait:text-lg relative flex flex-col pb-2 mb-5">
            Feedback
          </h2>
          <div className="flex flex-col gap-4 mt-4 text-sm portrait:text-xs">
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              contact@mail.com
            </a>
            <a
              href=""
              className="hover:duration-300 hover:text-blue-600 duration-300 w-[fit-content]"
            >
              support@mail.com
            </a>
          </div>
        </div>
        <div className="newsletter">
          <h2 className="font-bold text-xl portrait:text-lg relative flex flex-col pb-2 mb-5">
            NewsLetter
          </h2>
          <div>
            <p className="">
              Sign up for our mailing list to get latest updates and offers
            </p>
            <form className="flex flex-col gap-3 items-start mt-5">
              <input
                type="email"
                name="email"
                id="newsletter-mail"
                placeholder="example@gmail.com"
                required
                className="py-[12px] px-[15px] rounded-lg text-[#242424] outline-none"
              />
              <button className="py-3  px-5 bg-blue-600 rounded-lg text-white text-center hover:border-2 border-blue-600 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:duration-700 duration-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="pt-3 flex justify-around flex-wrap gap-2 text-sm portrait:text-xs text-[#a5a3a3b7]">
        <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        <p>
          Developed by{' '}
          <a
            href="https://solo.to/briann_bn/"
            target="_blank"
            className="text-blue-600 hover:underline hover:duration-300 duration-300"
          >
            brian_bn
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
