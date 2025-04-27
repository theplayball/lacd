"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Carousel from "./CarouselTwo";

const newsData = {
  latest: {
    image: "/news-image.jpeg",
    title: "Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed",
    author: "admin",
    date: "October 01, 2013 11:28AM",
    excerpt:
      "Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.",
  },
  otherStories: [
    {
      image: "/story1.jpeg",
      title: "Donec porta diam eu massa",
      author: "admin",
      date: "October 01, 2013 11:28AM",
      excerpt:
        "Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel.",
    },
    {
      image: "/story2.jpeg",
      title: "Vestibulum iaculis",
      author: "admin",
      date: "October 01, 2013 11:28AM",
      excerpt:
        "Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel.",
    },
    {
      image: "/story3.jpeg",
      title: "Praesent justo dolor",
      author: "admin",
      date: "October 01, 2013 11:28AM",
      excerpt:
        "Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel.",
    },
  ],
  events: [
    {
      date: "25",
      month: "DEC",
      title: "Sed in lacus ut enim",
      time: "4:00 pm - 6:00 pm",
      location: "340 W 50th St.New York",
    },
    {
      date: "5",
      month: "JAN",
      title: "Sed in lacus ut enim",
      time: "4:00 pm - 6:00 pm",
      location: "340 W 50th St.New York",
    },
    {
      date: "8",
      month: "JAN",
      title: "Sed in lacus ut enim",
      time: "4:00 pm - 6:00 pm",
      location: "340 W 50th St.New York",
    },
  ],
};

export default function NewsEvents() {
  const [currentNews, setCurrentNews] = useState(0);

  const prevNews = () => {
    setCurrentNews((prev) =>
      prev === 0 ? newsData.otherStories.length - 1 : prev - 1
    );
  };

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsData.otherStories.length);
  };

  return (
    <main className="text-gray-800 px-4 py-8 sm:py-12 md:py-16 ml-12">
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side*/}
        <div className="md:col-span-2 flex flex-col gap-10">
          {/* Latest News */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#003366] text-left">
              LATEST NEWS
            </h2>

            <div className="md:col-span-2 flex flex-col gap-10 md:flex-row">
              <div className="w-full md:w-[50%]">
                <Image
                  src={newsData.latest.image}
                  alt="Latest news"
                  width={400}
                  height={300}
                  className="rounded-md object-cover w-full h-[160px] sm:h-[240px] md:h-[300px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between w-full text-left text-sm sm:text-base md:w-[50%]">
                <h3 className="text-[#4174c5] font-semibold text-lg sm:text-xl">
                  {newsData.latest.title}
                </h3>
                <p className="text-xs text-[#95999e] mt-1">
                  by <span className="text-[#4174c5]">{newsData.latest.author}</span> • {newsData.latest.date}
                </p>
                <p className="my-2 text-[#3e474c]">{newsData.latest.excerpt}</p>

                <div className="flex mt-4">
                  <button className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white text-xs sm:text-sm px-4 py-2 rounded-md border-t border-b border-t-[#f3f7fa] border-b-[#bfc8d7]">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Stories */}
          <div className="relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#003366]">
                OTHER STORIES
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={prevNews}
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextNews}
                  className="p-2 rounded-md bg-gray-200 hover:bg-gray-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentNews * 50}%)`,
                width: `${newsData.otherStories.length * 50}%`,
              }}
            >
              {newsData.otherStories.map((story) => (
                <div key={story.title} className="w-[20%] sm:w-[30%] p-3 flex-shrink-0">
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={100}
                    height={50}
                    className="rounded-md object-cover w-full h-[120px] sm:h-[160px]"
                  />
                  <h4 className="text-[#003366] text-base sm:text-lg mt-2 font-semibold">
                    {story.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    by {story.author} • {story.date}
                  </p>
                  <p className="text-sm text-gray-700 my-2">{story.excerpt}</p>
                  <button className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white text-xs sm:text-sm px-4 py-2 rounded-md border-t border-b border-t-[#f3f7fa] border-b-[#bfc8d7]">
                    READ MORE
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="mt-8 sm:mt-12">
            <Carousel />
          </div>
        </div>

        {/* Right Side*/}
        <div className="flex flex-col gap-8 items-center">
          {/* Featured Video */}
          <div className="bg-white rounded-md p-4 shadow-md w-[300px] md:w-[250px] sm:w-full">
            <h3 className="font-extralight sm:text-lg mb-4 text-[#3b3b3c] text-center">
              FEATURED VIDEO
            </h3>
            <div className="aspect-video mb-2">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/6C8R9qzZ_Hk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button className="text-sm text-[#4174c5] hover:underline text-center w-full mt-2 hover:cursor-pointer">
              MORE VIDEOS →
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-md p-2 shadow-md w-[300px] md:w-[250px] sm:w-full">
            <h3 className="font-extralight text-lg mb-6 text-[#3b3b3c] text-center pb-1">
              UPCOMING EVENTS
            </h3>
            <ul className="space-y-14">
              {newsData.events.map((event, index) => (
                <li key={index} className="flex justify-center">
                  <div className="flex items-center gap-5">
                    <div className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white  px-3 py-3 rounded-sm text-center shadow-md text-sm ">
                      <p className="text-lg font-bold leading-none">{event.date}</p>
                      <p className="text-[10px] uppercase">{event.month}</p>
                    </div>
                    <div>
                      <p className="text-[#4174c5] font-light text-sm hover:cursor-pointer">
                        {event.title}
                      </p>
                      <p className="text-xs text-gray-400">{event.time}</p>
                      <p className="text-xs text-gray-400">{event.location}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="text-sm text-[#274472] hover:text-[#4174c5] w-full mt-6 hover:cursor-pointer">
              MORE EVENTS →
            </button>
          </div>

          {/* Main Issues */}
          <div className=" bg-[#63B2F5] hover:bg-[#274472] text-white pb-6 rounded-md shadow-md w-[300px] md:w-[250px] sm:w-full hover:cursor-pointer">
            <div className="relative">
              <img
                src="/issue.jpg"
                alt="Main Issues"
                className="w-full h-32 object-cover rounded-t-md"
              />
              <div className="w-full px-4 mt-3 text-center">
                <h3 className="text-xl sm:text-2xl font-bold">THE MAIN ISSUES</h3>
                <p className="text-sm sm:text-base mt-1 font-medium">FIND OUT MORE</p>
              </div>
            </div>
          </div>

          {/* Flickr Photos */}
          <div className="bg-white rounded-md p-4 shadow-md w-[300px] md:w-[250px] sm:w-full">
            <h3 className="font-extralight sm:text-lg mb-4 text-[#3b3b3c] text-center">
              FLICKR PHOTOS
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
