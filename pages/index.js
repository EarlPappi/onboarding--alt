import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  }
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <><Head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
      <div className="w-screen h-screen bg-[#707070] absolute p-6 top-0 backdrop flex justify-center items-center" onClick={() => setShowModal(false)}>
        <div className=" flex h-full w-full bg-white mx-auto z-50 rounded-lg md:w-2/3 md:h-5/6">
          <div className=" w-full md:w-9/12 h-full py-5">

            {/* Header Logo */}
            <div className='mb-[2rem] md:mb-[3.5rem]'>
              <Image src='/Group 313.svg' width='250px' height='60px' />
            </div>

            <div className="w-11/12 md:w-9/12 mx-auto">
              {/* Slider goes here */}
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <div>
                    <h1 className='text-center md:text-left text-[#163828] font-bold text-[1.2rem] md:text-[1.8rem] '>Set Up Your Workstation</h1>

                    <div className='my-[3rem]'>
                      <p className='font-medium text-[0.8rem] text-center md:text-left md:text-[1rem] text-[#163828] my-1'>Welcome, <span className='text-[#00A85A] font-bold'>Bolaji</span> </p>
                      <p className='font-medium text-[0.8rem] text-center md:text-left md:text-[1rem] text-[#163828] my-1'>Let’s get you started for productivity</p>
                      <p className='font-medium text-[0.8rem] text-center md:text-left md:text-[1rem] text-[#163828] my-1'>This will only take a minute</p>
                    </div>

                    <div className="my-[2em] cursor-pointer" onClick={nextSlide}>
                      <p className='block md:inline text-[0.8rem] mx-auto text-center py-3 px-8 rounded-lg text-white font-medium  bg-[#00A85A] md:text-[1rem] shadow-lg shadow-[#18A75D4D]'>START</p>
                    </div>

                  </div>
                </div>



                {/* Slide 2 Start */}
                <div>
                  <div>
                    <div className="relative h-full">
                      <h1 className='text-center md:text-left text-[#163828] font-bold text-[1.2rem] md:text-[1.8rem] '>Name Your Workstation</h1>

                      <div className='my-[2rem]'>
                        <input type="text" placeholder="Type your workstation name here" className="w-full text-[0.8rem] md:text-[1rem] px-3 py-3 md:py-5 border border-[#87AC9B] rounded-2xl bg-[#EFF7F0]" />
                        <p className='font-medium text-[0.8rem] text-center md:text-left  md:text-[1rem] text-[#163828] my-2'>You can use the name of your company or organization</p>
                      </div>

                      {/* Next Arrow start */}
                      <div className="my-[2em] cursor-pointer" onClick={nextSlide}>
                        <p className='block md:inline text-[0.8rem] mx-auto text-center py-3 px-8 rounded-lg text-white font-medium  bg-[#00A85A] md:text-[1rem] shadow-lg shadow-[#18A75D4D]'>NEXT</p>
                      </div>
                      {/* Next Arrow end */}
                    </div>

                    {/* Previous Arrow - Start */}
                    <div className="flex mt-[4rem] justify-between absolute bottom-0">
                      <div></div>
                      <div className="flex cursor-pointer" onClick={prevSlide}>
                        <svg className="bg-[#87AC9B29] rounded-md w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        <span className="font-bold text-[0.8rem] ml-2">PREV</span>
                      </div>
                    </div>

                    {/* Previous Arrow - End */}

                  </div>
                </div>
                {/* Slide 2 ends here */}

                {/* Slide 4? start */}
                <div>
                  <div className="h-full  ">
                    <h1 className='text-center md:text-left text-[#163828] font-bold text-[1.2rem] md:text-[1.8rem] '>Customize Your Avatar</h1>

                    <div className="py-2">
                      <div className="flex flex-col md:flex-row gap-9 items-center">
                        <div className="bg-[#EFF7F0] border-2 border-[#87AC9B] rounded-2xl max-w-fit py-5 px-3 md:py-10 md:px-5 text-center basis-[30%] " >
                          <Image src='/upload.svg' width='32px' height='21px' />
                          <p className="font-bold">Upload Image</p>
                        </div>

                        <div className="hidden border-2 border-red-600 relative m-auto  max-w-fit text-center md:flex justify-center basis-[30%] ">
                          <div className="relative h-ma">
                            <div className="w-1 h-full bg-slate-600 "></div>
                          </div>
                          <p>Or</p>
                        </div>

                        <div className="bg-[#EFF7F0] border-2 border-[#87AC9B] rounded-2xl max-w-fit py-5 px-3 md:py-10 md:px-5 text-center  basis-[30%]" >
                          <Image src='/upload.svg' width='32px' height='21px' />
                          <p className="font-bold">Upload Image</p>
                        </div>
                      </div>

                      {/* Next Arrow start */}
                      <div className="my-[2em] cursor-pointer" onClick={nextSlide}>
                        <p className='block md:inline text-[0.8rem] mx-auto text-center py-3 px-8 rounded-lg text-white font-medium  bg-[#00A85A] md:text-[1rem] shadow-lg shadow-[#18A75D4D]'>NEXT</p>
                      </div>
                      {/* Next Arrow end */}


                      {/* Previous Arrow - Start */}
                      <div className="flex mt-[4rem] justify-between absolute bottom-0">
                        <div></div>
                        <div className="flex cursor-pointer" onClick={prevSlide}>
                          <svg className="bg-[#87AC9B29] rounded-md w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                          </svg>

                          <span className="font-bold text-[0.8rem] ml-2">PREV</span>
                        </div>
                      </div>

                      {/* Previous Arrow - End */}
                    </div>
                  </div>
                </div>
                {/* Slide 4? Ends */}

                {/* Slide 5? Starts */}
                <div>
                  <div className="h-full">
                    <div className="relative h-full">
                      <h1 className='text-center md:text-left text-[#163828] font-bold text-[1.2rem] md:text-[1.8rem] '>Invite People to Your Workstation</h1>

                      <div className='my-[1rem]'>
                        <input type="text" placeholder="Type your workstation name here" className="w-full text-[0.8rem] md:text-[1rem] px-3 py-3 md:py-5 border border-[#87AC9B] rounded-2xl bg-[#EFF7F0]" />
                        <p className='font-medium text-[0.8rem] text-center md:text-left  md:text-[1rem] text-[#163828] my-2'>Separate multiple emails with comma (,)</p>
                      </div>

                      {/* Next Arrow start */}
                      <div className="my-[2em] cursor-pointer" onClick={nextSlide}>
                        <p className='block md:inline text-[0.8rem] mx-auto text-center py-3 px-8 rounded-lg text-white font-medium  bg-[#00A85A] md:text-[1rem] shadow-lg shadow-[#18A75D4D]'>NEXT</p>
                      </div>
                      {/* Next Arrow end */}
                    </div>

                    {/* Previous Arrow - Start */}
                    <div className="flex mt-[4rem] justify-between absolute bottom-0">
                      <div></div>
                      <div className="flex cursor-pointer" onClick={prevSlide}>
                        <svg className="bg-[#87AC9B29] rounded-md w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        <span className="font-bold text-[0.8rem] ml-2">PREV</span>
                      </div>
                    </div>

                    {/* Previous Arrow - End */}

                  </div>
                </div>
                {/* Slide 5? ends */}

                {/* Slide 6? start */}
                <div>
                  <div className="h-full">
                    <div>
                      <h1 className='text-[#163828] font-bold text-center md:text-left text-[1.2rem] md:text-[2rem] '>How Many People Are On Team</h1>

                      <div className='flex my-[3rem] justify-between flex-wrap'>
                        <input type="button" value="0 - 10" className="my-2 text-center w-24 h-10 p-2 px-4  border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="11 - 20" className="my-2 text-center w-24 h-10 p-2 px-4 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="21 - 50" className="my-2 text-center w-24 h-10 p-2 px-4 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="51 - 100" className="my-2 text-center w-24 h-10 p-2 px-5 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />

                      </div>

                      <div className="my-[4em] cursor-pointer" onClick={nextSlide}>
                        <p className='block md:inline text-[0.8rem] mx-auto text-center py-3 px-8 rounded-lg text-white font-medium  bg-[#00A85A] md:text-[1rem] shadow-lg shadow-[#18A75D4D]'>NEXT</p>
                      </div>

                    </div>
                    {/* Previous Arrow - Start */}
                    <div className="flex mt-[4rem] justify-between absolute bottom-0">
                      <div></div>
                      <div className="flex " onClick={prevSlide}>
                        <svg className="bg-[#87AC9B29] rounded-md w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        <span className="font-bold text-[0.8rem] ml-2">PREV</span>
                      </div>
                    </div>
                    {/* Previous Arrow - End */}
                  </div>
                </div>
                {/* Slide 6? end */}


                {/* Slide 7? start */}
                <div>
                  <div className="h-full">
                    <div>
                      <h1 className='text-center md:text-left text-[#163828] font-bold text-[1.2rem] md:text-[1.8rem] '>How Many Customers Are You Going To Be Working With</h1>

                      <div className='flex mt-[2rem] gap-1 flex-wrap'>
                        <input type="button" value="0 - 10" className="my-2 text-center w-24 h-10 p-2 px-4  border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="11 - 20" className="my-2 text-center w-24 h-10 p-2 px-4 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="21 - 50" className="my-2 text-center w-24 h-10 p-2 px-4 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="51 - 100" className="my-2 text-center w-24 h-10 p-2 px-5 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="101 - 250" className="my-2 text-center w-24 h-10 p-2 px-5 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="251 - 500" className="text-center w-24 h-10 p-2 px-5 mr-[2rem] border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />
                        <input type="button" value="501 - 1000" className="text-center w-25 h-10 p-2 px-5 border border-[#87AC9B] rounded-full bg-[#ffffff] focus:bg-[#00A85A] focus:text-white" />

                      </div>

                      <div className="my-[4em] cursor-pointer" onClick={nextSlide}>
                        <p className='block md:inline text-[0.8rem] mx-auto text-center py-3 px-8 rounded-lg text-white font-medium  bg-[#00A85A] md:text-[1rem] shadow-lg shadow-[#18A75D4D]'>NEXT</p>
                      </div>
                    </div>
                    {/* Previous Arrow - Start */}
                    {/* Previous Arrow - Start */}
                    <div className="flex mt-[4rem] justify-between absolute bottom-0">
                      <div></div>
                      <div className="flex " onClick={prevSlide}>
                        <svg className="bg-[#87AC9B29] rounded-md w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        <span className="font-bold text-[0.8rem] ml-2">PREV</span>
                      </div>
                    </div>
                    {/* Previous Arrow - End */}

                    {/* Previous Arrow - End */}
                  </div>
                </div>
                {/* Slide 7? end */}


                {/* Slide 8? start */}
                <div>
                  <div>
                  <h1 className='text-center md:text-left text-[#163828] font-bold text-[1.2rem] md:text-[1.8rem] '>That's It.</h1>

                    <div className='my-[4rem]'>
                      <p className='font-medium text-[0.8rem] text-center md:text-left md:text-[1rem] text-[#163828] my-1'>Congratulations, <span className='text-[#00A85A] font-bold'>Bolaji</span> </p>
                      <p className='font-medium text-[0.8rem] text-center md:text-left md:text-[1rem] text-[#163828] my-1'>Now go and Have fun and be</p>
                      <p className='font-medium text-[0.8rem] text-center md:text-left md:text-[1rem] text-[#163828] my-1'>productive</p>
                    </div>

                    <div className="my-[4em] cursor-pointer" onClick={nextSlide}>
                        <p className='block md:inline text-[0.8rem] mx-auto text-center py-3 px-8 rounded-lg text-white font-medium  bg-[#00A85A] md:text-[1rem] shadow-lg shadow-[#18A75D4D]'>NEXT</p>
                      </div>
                    {/* Previous Arrow - Start */}
                    <div className="flex mt-[4rem] justify-between absolute bottom-0">
                      <div></div>
                      <div className="flex " onClick={prevSlide}>
                        <svg className="bg-[#87AC9B29] rounded-md w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        <span className="font-bold text-[0.8rem] ml-2">PREV</span>
                      </div>
                    </div>

                    {/* Previous Arrow - End */}



                  </div>
                </div>

                {/* Slide 8? ends */}
              </Slider>
            </div>


          </div>

          <div className="hidden md:block h-full w-3/12 bg-[#00A85A]">


          </div>
        </div>

      </div>

    </>
  )
}
