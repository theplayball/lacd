"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full h-full"
        spaceBetween={10}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/american_flag.jpg"
              alt="American Flag"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-4 px-4">
              <h2 className="text-4xl font-extrabold drop-shadow-lg">Unity</h2>
              <h2 className="text-4xl font-extrabold drop-shadow-lg">
                Liberty
              </h2>
              <h2 className="text-4xl font-extrabold drop-shadow-lg">
                Solidarity
              </h2>
              <button className="mt-4 px-6 py-2 bg-gray-200 bg-opacity-70 text-gray-700 rounded-md hover:cursor-pointer hover:bg-blue-300 hover:text-white">
                FIND OUT MORE
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/flags.jpg"
              alt="Flags"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <h2 className="text-4xl  font-extrabold drop-shadow-lg">
                10 YEARS OF EXPERIENCE
              </h2>
              <h2 className=" font-light  drop-shadow-lg">
                Voluptatibus debitis, voluptate dolores blanditiis aperiam fuga
                esse ea maiores totam a laboriosam id quos similique quae
                dolorum quibusdam facere suscipit et.
              </h2>
              <button className="mt-4 px-6 py-2 bg-gray-200 bg-opacity-70 text-gray-700 rounded-md hover:cursor-pointer hover:bg-blue-300 hover:text-white">
                MORE INFO
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/team.jpeg"
              alt="Team"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <span className=" text-white text-4xl font-bold whitespace-nowrap">
                it's time for changes
              </span>

              <h2 className="text-4xl font-bold drop-shadow-lg">
                Building Our Future Together!
              </h2>
              <button className="mt-4 px-6 py-2 bg-gray-200 bg-opacity-70 text-gray-700 rounded-md hover:cursor-pointer hover:bg-blue-300 hover:text-white">
                GET INVOLVED
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/40 hover:bg-blue-300 text-white px-3 py-2 rounded hover:cursor-pointer">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/40 hover:bg-blue-300  text-white px-3 py-2 rounded hover:cursor-pointer">
        ❯
      </button>
    </div>
  );
};

export default Carousel;
