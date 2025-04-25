"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(nextNews, 5000);
    return () => clearInterval(interval);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextNews,
    onSwipedRight: prevNews,
    trackMouse: true,
  });

  const getVisibleStories = () => {
    const stories = [];
    for (let i = 0; i < 3; i++) {
      stories.push(
        newsData.otherStories[(currentNews + i) % newsData.otherStories.length]
      );
    }
    return stories;
  };

  return (
    <main className="text-gray-800 px-16 py-8 sm:py-12 md:py-16">
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
        <div className="flex flex-col gap-10 sm:col-span-2 p-2 sm:p-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#003366] text-left">
              LATEST NEWS
            </h2>

            <div className="flex flex-col gap-4">
              <div className="w-full">
                <Image
                  src={newsData.latest.image}
                  alt="Latest news"
                  width={400}
                  height={300}
                  className="rounded-md object-cover w-full h-[160px] sm:h-[240px]"
                />
              </div>

              <div className="flex flex-col justify-between w-full text-left text-sm sm:text-base">
                <h3 className="text-[#003366] font-semibold text-lg sm:text-xl">
                  {newsData.latest.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  by {newsData.latest.author} • {newsData.latest.date}
                </p>
                <p className="my-2 text-gray-700">{newsData.latest.excerpt}</p>

                <div className="flex mt-4">
                  <button className="bg-gray-200 text-gray-600 hover:bg-blue-300 hover:text-white text-xs sm:text-sm px-4 py-2 rounded-md">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div {...swipeHandlers}>
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

            <div className="flex gap-4 overflow-x-auto">
              <AnimatePresence mode="wait">
                {getVisibleStories().map((story) => (
                  <motion.div
                    key={story.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className=" p-3  w-[220px] sm:w-[260px] flex-shrink-0 "
                  >
                    <Image
                      src={story.image}
                      alt={story.title}
                      width={300}
                      height={180}
                      className="rounded-md object-cover w-full h-[140px] sm:h-[180px]"
                    />
                    <h4 className="text-[#003366] text-base sm:text-lg mt-2 font-semibold">
                      {story.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      by {story.author} • {story.date}
                    </p>
                    <p className="text-sm text-gray-700 my-2">
                      {story.excerpt}
                    </p>
                    <button className="bg-gray-200 text-gray-600 hover:bg-blue-300 hover:text-white  shadow-md text-xs sm:text-sm px-4 py-2 rounded-md mt-3">
                      READ MORE →
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <Carousel />
          </div>
        </div>

        <div className="flex flex-col gap-16 w-full">
          <div className="bg-white rounded-md p-4 shadow-md">
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
            <button className="text-sm text-[#2f70f3] hover:underline text-center w-full mt-2 hover:cursor-pointer">
              MORE VIDEOS →
            </button>
          </div>

          {/* Events */}
          <div className="bg-white rounded-md py-6 w-full">
            <h3 className="font-extralight sm:text-lg mb-6 text-[#3b3b3c] pb-1 text-center">
              UPCOMING EVENTS
            </h3>
            <ul className="space-y-14">
              {newsData.events.map((event, index) => (
                <li key={index} className="flex justify-center">
                  <div className="flex items-center gap-5">
                    <div className="bg-[#d0e3f6] text-[#0e1317] px-3 py-3 rounded-sm text-center shadow-md text-sm hover:bg-blue-300 hover:text-white">
                      <p className="text-lg font-bold leading-none">
                        {event.date}
                      </p>
                      <p className="text-[10px] uppercase">{event.month}</p>
                    </div>
                    <div>
                      <p className="text-[#2f70f3] font-light text-sm hover:cursor-pointer">
                        {event.title}
                      </p>
                      <p className="text-xs text-gray-400">{event.time}</p>
                      <p className="text-xs text-gray-400">{event.location}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button className="text-sm text-[#32353b] hover:text-blue-300 w-full mt-6 hover:cursor-pointer">
              MORE EVENTS →
            </button>
          </div>

          {/* Main Issues */}
          <div className="bg-blue-300 hover:bg-blue-500 text-white pb-6 rounded-md shadow-md w-full hover:cursor-pointer">
            <div className="relative">
              <img
                src="/issue.jpg"
                alt="Main Issues"
                className="w-full h-32 object-cover rounded-t-md"
              />
              <button className="w-full px-4 mt-3 text-center group">
                <h3 className="text-xl sm:text-2xl font-bold">
                  THE MAIN ISSUES
                </h3>
                <p className="text-sm sm:text-base mt-1 font-medium">
                  FIND OUT MORE
                </p>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-md p-4 shadow-md">
            <h3 className="font-extralight sm:text-lg mb-4 text-[#3b3b3c] text-center">
              FLICKR PHOTOS
            </h3>

            <button className="text-sm text-[#2f70f3] hover:underline text-center w-full mt-2">
              VIEW MORE PHOTOS →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
