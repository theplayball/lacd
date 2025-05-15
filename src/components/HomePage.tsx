"use client";

import React, { useState } from "react";
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
import Carousel from "./Carousel";

const HomePage = () => {
  const [selectedAmount, setSelectedAmount] = useState("");

  return (
    <div className="pt-28 w-full bg-white pl-9 py-10 sm:pt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:pt-6">
        <div className="w-full lg:w-2/3 relative">
          <div className="relative h-full">
            <Carousel />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col  lg:pr-14 gap-2">
          <InfoCard
            icon={<FaCalendarAlt className="text-3xl text-[#C6D0DC]" />}
            title="FIND EVENTS"
            text="Lorem ipsum dolor sit amet"
          />
          <InfoCard
            icon={<FaCheckSquare className="text-3xl text-[#C6D0DC]" />}
            title="REGISTER TO VOTE"
            text="Nemo enim ipsam"
          />
          <InfoCard
            icon={<FaUser className="text-3xl text-[#C6D0DC]" />}
            title="VOLUNTEER"
            text="Pellentesque sed dolor"
          />

          <div className="bg-[#f1e5e5] p-4 text-start rounded-md ">
            <p className="text-[#a82512] text-[14px] tracking-wide uppercase mb-2">
              Make a <span className="font-bold">Quick Donation</span> Here
            </p>
            <div className="flex  gap-2">
              {["$5", "$25", "$100"].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-1 text-[15px] rounded-md border ${
                    selectedAmount === amount
                      ? "bg-[#a82512] text-white border-[#a82512]"
                      : "bg-white text-[#3e474c] border-[#a82512] "
                  }`}
                >
                  {amount}
                </button>
              ))}

              <button className="p-2 text-[15px] bg-[#a82512] text-white rounded-md hover:bg-[#be2e17]">
                DONATE
              </button>
            </div>
          </div>

          <div className="pt-4 mb-4">
            <p className="text-sm text-start text-gray-500 mb-2">
              Get connected:
            </p>
            <div className="flex flex-wrap gap-2">
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
  <div className="group flex items-center gap-4 p-2 bg-[#E2EAF2] rounded-md hover:bg-[#63B2F5] cursor-pointer transition-colors duration-300">
    <div className="group-hover:text-white">{icon}</div>
    <div>
      <h4 className="text-[#274472] text-start text-lg font-bold group-hover:text-white">
        {title}
      </h4>
      <p className="text-sm text-start text-[#808CA4] group-hover:text-white">
        {text}
      </p>
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
    className={`text-white ${color} w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 cursor-pointer`}
  >
    {icon}
  </div>
);

export default HomePage;
