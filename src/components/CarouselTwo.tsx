"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    background: "/city1.jpeg",
    title: "Redhedge",
    subtitle: "CAMPAIGN TRIAL",
    date: "June 27th",
  },
  {
    background: "/city2.jpeg",
    title: "New York",
    subtitle: "CAMPAIGN TRIAL",
    date: "December 17th",
  },
  {
    background: "/city3.jpeg",
    title: "Corden",
    subtitle: "CAMPAIGN TRIAL",
    date: "April 12th",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-12 rounded-2xl shadow-lg">
      <img
        src={currentSlide.background}
        alt="Slide"
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />

      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-blue-300 text-white px-6 py-4 rounded-md shadow-md max-w-sm">
        <p className="uppercase text-xs font-light tracking-wider text-[#2a4365] mb-1">
          {currentSlide.subtitle}
        </p>
        <h2 className="text-2xl font-bold">{currentSlide.title}</h2>
        <p className="text-sm mt-1">{currentSlide.date}</p>
        <button className="mt-3 px-4 py-2 bg-gray-200 text-gray-600 font-extralight rounded hover:bg-[#2a4365] hover:text-white text-sm hover:cursor-pointer">
          DETAILS
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
