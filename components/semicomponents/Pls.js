// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={120}
      slidesPerView={5}
      navigation
    //   pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="swiper-full-mobile"
      slideToClickedSlide
    centeredSlides
    loop
    >
      <SwiperSlide className='sw-sliderss'>
      <img src="http://md-aqil.github.io/images/adolescent-beautiful-beauty-247878.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="http://md-aqil.github.io/images/adolescent-beautiful-beauty-247878.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="http://md-aqil.github.io/images/adolescent-beautiful-beauty-247878.jpg" alt="" />
      {({ isActive }) => (
      <div>Current slide is {isPrev ? 'Prev' : 'not active'}</div>
    )}</SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="http://md-aqil.github.io/images/adolescent-beautiful-beauty-247878.jpg" alt="" />
      {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    )}
      </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="http://md-aqil.github.io/images/adolescent-beautiful-beauty-247878.jpg" alt="" />
      {({ isActive }) => (
      <div>Current slide is {isNext ? 'Next' : 'not active'}</div>
    )}
      </SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="http://md-aqil.github.io/images/adolescent-beautiful-beauty-247878.jpg" alt="" /></SwiperSlide>
      <SwiperSlide className='sw-sliderss'><img src="http://md-aqil.github.io/images/adolescent-beautiful-beauty-247878.jpg" alt="" /></SwiperSlide>
      
     
    </Swiper>
  );
};