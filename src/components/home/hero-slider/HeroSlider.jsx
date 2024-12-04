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
            <div
              style={{
                background: `url(${Slide1})`,
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              className="bg-center py-32 bg-blend-overlay  h-[750px]"
            >
              <div className="container ">
                <div className="flex gap-6 justify-center items-center ">
                  <div className="w-1/3">
                    <img
                      src="https://m.media-amazon.com/images/I/71s1XRBOaFL.jpg"
                      className="max-w-[550px] h-[440px] rounded-lg shadow-2xl"
                    />
                  </div>

                  <div className="text-white w-1/3 ml-10">
                    <h1 className="text-5xl font-bold">
                      The Witcher Arcade Game
                    </h1>
                    <p className="py-6">
                      Gwent on Android is a rebalanced iteration of The Witcher
                      3: Wild Hunt's addictive, multiplayer card game. It
                      combines deck building with clever strategy, giving you a
                      robust selection of combat and support units.
                    </p>
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
              className="bg-center py-32 bg-blend-overlay  h-[750px]"
            >
              <div className="container ">
                <div className="flex gap-6 justify-center items-center ">
                  <div className="text-white w-1/3 ml-10">
                    <h1 className="text-5xl font-bold">
                      Rocket League Sideswipe
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
                  </div>
                  <div className="w-1/3">
                    <img
                      src="https://thewhyofplay.com/wp-content/uploads/2022/01/cover.png"
                      className="max-w-[550px] h-[440px] rounded-lg shadow-2xl"
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
              className="bg-center py-32 bg-blend-overlay  h-[750px]"
            >
              <div className="container ">
                <div className="flex gap-6 justify-center items-center ">
                  <div className="w-1/3">
                    <img
                      src="https://hb.imgix.net/0007cb3df8899e39ade2974714b47d8196b840f1.png?auto=compress,format&fit=crop&h=353&w=616&s=6c19438529b3fb0c59d3fddffa768e6c"
                      className="max-w-[550px] h-[440px] rounded-lg shadow-2xl"
                    />
                  </div>

                  <div className="text-white w-1/3 ml-10">
                    <h1 className="text-5xl font-bold">Metaphor ReFantazio</h1>
                    <p className="py-6">
                      It’s always a difficult task to follow up on what some
                      people consider to be one of the greatest games of all
                      time, in this case, Persona 5, and yet Atlus continues to
                      blow people’s socks clean off every time. Metaphor
                      ReFantazio is the latest from Atlus, developed by its
                      Studio Zero division which has been comprised of ex
                      Persona talent.
                    </p>
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
