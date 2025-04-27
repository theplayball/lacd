"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="relative ">
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
          <div className="relative w-full h-[460px]">
            <Image
              src="/american_flag.jpg"
              alt="American Flag"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-4 px-4">
              <h2 className="text-3xl font-extrabold drop-shadow-lg">Unity</h2>
              <h2 className="text-3xl font-extrabold drop-shadow-lg">Liberty</h2>
              <h2 className="text-3xl font-extrabold drop-shadow-lg">Solidarity</h2>
              <button className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white text-xs sm:text-sm px-4 py-2 rounded-md border-t border-b border-t-[#f3f7fa] border-b-[#bfc8d7]">
              FIND OUT MORE
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[460px]">
            <Image
              src="/flags.jpg"
              alt="Flags"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <h2 className="text-3xl font-extrabold drop-shadow-lg">10 YEARS OF EXPERIENCE</h2>
              <h2 className="font-light drop-shadow-lg px-8 text-sm">
                Voluptatibus debitis, voluptate dolores blanditiis aperiam fuga esse ea maiores totam.
              </h2>
              <button className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white text-xs sm:text-sm px-4 py-2 rounded-md border-t border-b border-t-[#f3f7fa] border-b-[#bfc8d7]">
              MORE INFO
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[460px]">
            <Image
              src="/team.jpeg"
              alt="Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <span className="text-3xl font-bold whitespace-nowrap">
                It's time for changes
              </span>
              <h2 className="text-3xl font-bold drop-shadow-lg">Building Our Future Together!</h2>
              <button className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white text-xs sm:text-sm px-4 py-2 rounded-md border-t border-b border-t-[#f3f7fa] border-b-[#bfc8d7]">
              GET INVOLVED
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/40 hover:bg-[#63B2F5] text-white px-3 py-2 rounded hover:cursor-pointer">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/40 hover:bg-[#63B2F5] text-white px-3 py-2 rounded hover:cursor-pointer">
        ❯
      </button>
    </div>
  );
};

export default Carousel;
