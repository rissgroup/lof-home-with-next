import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

export default function Lofplatform() {
  const ImageOneClick = () => {
    SetImageText(
      " Image 1 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageTwoClick = () => {
    SetImageText(
      " Image 2 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageThreeClick = () => {
    SetImageText(
      " Image 3 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageFourClick = () => {
    SetImageText(
      " Image 4 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageFiveClick = () => {
    SetImageText(
      " Image 5 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageSixClick = () => {
    SetImageText(
      " Image 6 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageSevenClick = () => {
    SetImageText(
      " Image 7 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const [ImageText, SetImageText] = useState(
    "Become a content creator? Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales. Release your content free of judgement and completely at your own terms."
  );
  return (
    <>
      <Head>
        
      </Head>
      <div className="bg-dark">
        <div className="container-fluid ">
          <div className=" text-white pt-28 w-full">
            <div className="col text-center">
              <h1 className="text-2xl monofont leading-5 -m-5">
                LOF <span className="pink-color">platform</span>
              </h1>
              <p className="text-xs tracking-normal leading-6 mx-auto w-7/12 pt-8 font-light ">
                {/* Create a free account and start browsing content from the
                hottest models around the world. We have made everything
                extremely simple and there are no hidden terms.  */}
                {ImageText}
              </p>
            </div>
          </div>

          {/* *******************Slider Start*********** */}
         {/* <Pls/> */}
         <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={120}
      slidesPerView={5}
      // navigation
    //   pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-full-mobile"
      slideToClickedSlide
    centeredSlides
    loop
    >
      <SwiperSlide onClick={ImageOneClick} className='sw-sliderss'><img src='/assets/pl-slider/Mobile.png'  alt="" />
      </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="/assets/pl-slider/Mobilehome4.png" onClick={ImageTwoClick} alt="" />
      </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="/assets/pl-slider/Mobilehome6.png" onClick={ImageThreeClick} alt="" />
     </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="/assets/pl-slider/Mobilehome5.png" onClick={ImageFourClick} alt="" />
      
      </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="/assets/pl-slider/Mobilehome7.png" onClick={ImageFiveClick} alt="" />
      
      </SwiperSlide>
      {/* <SwiperSlide className='sw-sliderss'><img src="/assets/pl-slider/Mobilehome7.png" onClick={ImageSixClick} alt="" /></SwiperSlide> */}
      <SwiperSlide className='sw-sliderss'><img src="/assets/pl-slider/Mobilehome8.png" onClick={ImageSixClick} alt="" /></SwiperSlide>
      
     
    </Swiper>
          {/* *******************Slider End*********** */}
        </div>
      </div>
    </>
  );
}
