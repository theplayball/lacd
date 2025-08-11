"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCheckSquare,
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
            text="Discover upcoming LACD events and community gatherings"
            link="/activities/events"
          />
          <InfoCard
            icon={<FaCheckSquare className="text-3xl text-[#C6D0DC]" />}
            title="REGISTER"
            text="Join LACD and become a member of our organization"
            link="/register"
          />


          <div className="bg-[#f1e5e5] p-4 text-start rounded-md ">
            <p className="text-[#a82512] text-[14px] tracking-wide uppercase mb-2">
              Make a <span className="font-bold">Quick Donation</span> Here
            </p>
            <div className="flex  gap-2">
              {["$25", "$50", "$100"].map((amount) => (
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
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({
  icon,
  title,
  text,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  link?: string;
}) => {
  const CardContent = (
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

  if (link) {
    return <Link href={link}>{CardContent}</Link>;
  }

  return CardContent;
};


export default HomePage;
