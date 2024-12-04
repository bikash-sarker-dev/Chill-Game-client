import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../../assets/images/slider/game-slide1.jpg";
import Slide2 from "../../../assets/images/slider/game-slide2.jpg";
import Slide3 from "../../../assets/images/slider/game-slide3.jpg";

const HeroSlider = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img
                className="lg:h-[700px] w-full object-cover"
                src={Slide1}
                alt="slide images not supported"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="lg:h-[700px] w-full object-cover"
                src={Slide2}
                alt="slide images not supported"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="lg:h-[700px] w-full object-cover"
                src={Slide3}
                alt="slide images not supported"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default HeroSlider;
