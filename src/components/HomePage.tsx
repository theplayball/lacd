"use client";
import React, { useState } from "react";
import Carousel from "./Carousel";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaFlickr,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckSquare,
  FaUser,
} from "react-icons/fa";

const HomePage = () => {
  const [selectedAmount, setSelectedAmount] = useState("");

  return (
    <div className="flex flex-col pt-56 lg:flex-row w-full bg-white h-full">

      <div className="w-full p-14 lg:w-[calc(100%-360px)]">
        <Carousel />
      </div>

      <div className="w-full lg:w-[360px] p-6  flex flex-col gap-4 ">

        <InfoCard
          icon={<FaCalendarAlt className="text-gray-300 text-4xl  " />}
          title="FIND EVENTS"
          text="Lorem ipsum dolor sit amet"
        />
        <InfoCard
          icon={<FaCheckSquare className="text-gray-300 text-4xl" />}
          title="REGISTER TO VOTE"
          text="Nemo enim ipsam"
        />
        <InfoCard
          icon={<FaUser className="text-gray-300 text-4xl" />}
          title="VOLUNTEER"
          text="Pellentesque sed dolor"
        />


        <div className="bg-red-50 border px-5 py-6 shadow-md text-center">
          <p className="text-sm mb-4">
            MAKE A <span className="text-red-700 font-bold">QUICK DONATION</span> HERE
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {["$5", "$25", "$100"].map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`px-4 py-2 text-sm font-medium border ${
                  selectedAmount === amount
                    ? "bg-red-700 text-white border-red-700"
                    : "border-gray-300 hover:bg-gray-100 hover:cursor-pointer"
                }`}
              >
                {amount}
              </button>
            ))}
          </div>
          <button className="bg-red-700 text-white font-semibold px-5 py-2 w-full hover:bg-red-800 hover:cursor-pointer">
            DONATE
          </button>
        </div>

        <div className="pt-4">
          <p className="text-sm text-start text-gray-500 mb-2">Get connected:</p>
          <div className="flex gap-2 flex-wrap">
            <SocialIcon icon={<FaFacebookF />} color="bg-[#3b5998]" />
            <SocialIcon icon={<FaTwitter />} color="bg-[#1da1f2]" />
            <SocialIcon icon={<FaGooglePlusG />} color="bg-[#db4437]" />
            <SocialIcon icon={<FaYoutube />} color="bg-[#ff0000]" />
            <SocialIcon icon={<FaFlickr />} color="bg-[#ff0084]" />
            <SocialIcon icon={<FaEnvelope />} color="bg-[#34495e]" />
          </div>

          <div className="flex gap-2 mt-3">
            <button className="bg-white border px-2 py-1 text-sm text-blue-700 font-semibold shadow-sm">
              Like
            </button>
            <button className="bg-white border px-2 py-1 text-sm text-blue-700 font-semibold shadow-sm">
              Share 3.2M
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

const InfoCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className=" bg-blue-50 px-5 py-4 shadow-sm flex items-center gap-4 hover:bg-sky-200 hover:text-white hover:cursor-pointer">
    {icon}
    <div className="hover:text-white">
      <h4 className="text-blue-900 text-lg font-bold text-start ">{title}</h4>
      <p className="text-sm text-gray-400 text-start ">{text}</p>
    </div>
  </div>
);

const SocialIcon = ({
  icon,
  color,
}: {
  icon: React.ReactNode;
  color: string;
}) => (
  <div
    className={`text-white ${color} w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition hover:cursor-pointer`}
  >
    {icon}
  </div>
);

export default HomePage;
