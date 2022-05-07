import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import removeSlashFromPagination from "../common/removeSlashpagination";
import Hero from "./Hero";
import Lofplatform from "./Lofplatform";
import Become from "./Become";
import Whylof from "./Whylof";
import Faq from "./Faq";
import Footer from "./navs/Footer";


SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

const ShowcasesFullScreen = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    removeSlashFromPagination();
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <header className="sliderx showcase-full">
      <div className="swiper-container parallax-sliderx">
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper sw-wrap"
            slidesPerView={1}
          >
            <SwiperSlide className="swiper-slide sw-slides">
              <Hero />
            </SwiperSlide>
      
            <SwiperSlide className="swiper-slide sw-slides">
              <Lofplatform />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide sw-slides">
              <Become />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide sw-slides">
              <Whylof />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide sw-slides">
              <Faq />
            </SwiperSlide>
          </Swiper>
        ) : null}
      </div>
<Footer/>
      
    </header>
  );
};

export default ShowcasesFullScreen;
