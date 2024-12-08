import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../../assets/images/slider/game-slide1.jpg";
import Slide2 from "../../../assets/images/slider/game-slide2.jpg";
import Slide3 from "../../../assets/images/slider/game-slide3.jpg";
import Star from "./Star";

const HeroSlider = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
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
            <div
              style={{
                background: `url(${Slide1})`,
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              className="bg-center lg:py-32 py-14 bg-blend-overlay lg:h-[750px]  px-5 lg:px-0"
            >
              <div className="container ">
                <div className="lg:flex  gap-6 justify-center items-center ">
                  <div className="lg:w-1/3">
                    <img
                      src="https://m.media-amazon.com/images/I/71s1XRBOaFL.jpg"
                      className="xl:max-w-[550px] xl:h-[440px] rounded-lg shadow-2xl"
                    />
                  </div>

                  <div className="text-white lg:w-1/3 lg:ml-10">
                    <h1 className="text-3xl md:text-5xl mt-5 md:mt-0 font-bold">
                      <Typewriter
                        words={["The Witcher Arcade Game"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>

                    <p className="py-6">
                      Gwent on Android is a rebalanced iteration of The Witcher
                      3: Wild Hunt's addictive, multiplayer card game. It
                      combines deck building with clever strategy, giving you a
                      robust selection of combat and support units.
                    </p>
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${Slide2})`,
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
              className="bg-center lg:py-32 py-14 bg-blend-overlay  lg:h-[750px] px-5 lg:px-0"
            >
              <div className="container ">
                <div className="flex flex-col-reverse lg:flex-row gap-6 justify-center items-center ">
                  <div className="text-white lg:w-1/3 lg:ml-10">
                    <h1 className="text-3xl md:text-5xl mt-5 md:mt-0 font-bold">
                      <Typewriter
                        words={["Rocket League Sideswipe"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
                    <p className="py-6">
                      Rocket League combines soccer, rocket-powered cars, and
                      billiards in one frenzied, multiplayer sport for console
                      and PC. Rocket League Sideswipe, on the other hand, brings
                      that addictive formula to the mobile scene. It streamlines
                      the action for easier play on mobile devices, without
                      sacrificing the nuance that makes the full game so
                      engrossing.
                    </p>
                    <Star />
                  </div>
                  <div className="lg:w-1/3">
                    <img
                      src="https://thewhyofplay.com/wp-content/uploads/2022/01/cover.png"
                      className="xl:max-w-[550px] xl:h-[440px] rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                background: `url(${Slide3})`,
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
              className="bg-center lg:py-32 py-14 bg-blend-overlay  lg:h-[750px] px-5 lg:px-0"
            >
              <div className="container ">
                <div className="lg:flex gap-6 justify-center items-center ">
                  <div className="lg:w-1/3">
                    <img
                      src="https://hb.imgix.net/0007cb3df8899e39ade2974714b47d8196b840f1.png?auto=compress,format&fit=crop&h=353&w=616&s=6c19438529b3fb0c59d3fddffa768e6c"
                      className="xl:max-w-[550px] xl:h-[440px] rounded-lg shadow-2xl"
                    />
                  </div>

                  <div className="text-white lg:w-1/3 lg:ml-10">
                    <h1 className="text-3xl md:text-5xl mt-5 md:mt-0 font-bold">
                      <Typewriter
                        words={["Metaphor ReFantazio"]}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
                    <p className="py-6">
                      It’s always a difficult task to follow up on what some
                      people consider to be one of the greatest games of all
                      time, in this case, Persona 5, and yet Atlus continues to
                      blow people’s socks clean off every time. Metaphor
                      ReFantazio is the latest from Atlus, developed by its
                      Studio Zero division which has been comprised of ex
                      Persona talent.
                    </p>
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default HeroSlider;
