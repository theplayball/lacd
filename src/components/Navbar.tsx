"use client";

import Link from "next/link";
import SideMenu from "./SideMenu";

export default function Navbar() {
  return (
    <header className="top-0 z-50 h-[130px] pt-4 pb-4 relative transition-all duration-300">
      <div className="bg-[#274472] text-[#e2eaf2]">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-4 sm:px-8 py-6 gap-6 text-center md:text-left">
         
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <h1 className="text-4xl font-bold leading-tight pt-0 md:pt-0">
              <span className="italic font-cursive">LACD</span>
            </h1>

            <p className="text-sm italic text-gray-400 relative mt-4 md:mt-0">
              “Nam elit agna, enderit sit amet, tincidunt ac, viverra sed,
              nulla..”
            </p>
          </div>
          <div className="w-full max-w-sm">
            <div className="bg-[#324e79] p-4 rounded-md text-sm font-normal uppercase text-white">
              <span className="font-bold block mb-4 text-center">
                Sign Up for Email Updates
              </span>

              <form className="flex flex-col sm:flex-row gap-2 items-center w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-3 py-2 rounded bg-gray-100 text-gray-700 text-xs w-full sm:w-[63%] h-[35px] border-0"
                />
                <input
                  type="text"
                  placeholder="Zip code"
                  className="px-3 py-2 rounded bg-gray-100 text-gray-700 text-xs w-full sm:w-[37%] h-[35px] border-0"
                />
                <button
                  type="submit"
                  className="relative bg-[#63b2f5] text-white text-lg rounded p-1 flex items-center justify-center transition-all hover:bg-[#4ea8de]"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden md:block w-full border-b border-[#F2F4FF] sticky">
        <div className="flex w-full bg-[#f8f9fc] text-[#3e474c] font-semibold">
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT LACD", href: "/" },
            { label: "ACTIVITIES", href: "/" },
            { label: "CONTACT US", href: "/" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex-1 text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/donation"
            className="bg-[#A02012] text-white px-6 py-4 text-center hover:bg-[#84180F] font-bold transition-colors"
          >
            DONATE TODAY
          </Link>
        </div>
      </nav>

      <div className=" md:hidden bg-gray-100 text-black w-full px-6 flex items-center border-b border-gray-300">
        <SideMenu />
      </div>
    </header>
  );
}
