import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="my-32">
      <div className="container">
        <div className="text-center mb-20 ">
          <h2 className="text-4xl font-bold">
            What people’s say ABOUT game studio.
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mt-3">
            the reviews highest rating for games. there are best performance in
            games .
          </p>
        </div>
        <div className="bg-p-secondary p-10  rounded-2xl dark:bg-dark-p-secondary testimonials ">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex  gap-10  items-center md:mx-32">
                <div>
                  <img
                    src="https://bonx-vue.pages.dev/images/others/testimonial-thumb.webp"
                    alt=""
                    className="max-w-md"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-8">
                    It is a long established fact that a reader will be
                    distracted the readable content of page when looking at it
                    layout the point using lorem Ipsum is that it has a
                    more-or-less normal distribution lette as opposed to using
                    making it look like readable english, many desktop
                    publishing packages and web page now editors.
                  </p>
                  <h3 className="text-xl uppercase font-bold mt-6">
                    Randolph Frazier
                  </h3>
                  <span className="mt-2 inline-block">Top Rated Gamer</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-10 items-center md:mx-32">
                <div>
                  <img
                    src="https://bonx-vue.pages.dev/images/others/testimonial-thumb.webp"
                    alt=""
                    className="max-w-md"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold leading-8">
                    It is a long established fact that a reader will be
                    distracted the readable content of page when looking at it
                    layout the point using lorem Ipsum is that it has a
                    more-or-less normal distribution lette as opposed to using
                    making it look like readable english, many desktop
                    publishing packages and web page now editors.
                  </p>
                  <h3 className="text-xl uppercase font-bold mt-6">
                    Randolph Frazier
                  </h3>
                  <span className="mt-2 inline-block">Top Rated Gamer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
