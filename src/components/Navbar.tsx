"use client";

import Link from "next/link";
import SideMenu from "./SideMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="top-0 z-50 sticky bg-[#274472]">
  {/* Top Bar */}
  <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 py-6 gap-6">
  {/* Logo + Text container */}
  <div className="flex flex-col md:flex-row md:items-center gap-2 text-center md:text-left">
    <Image
      src="/logo.jpg"
      alt="LACD Logo"
      width={100}
      height={100}
      priority
    />
    <p className="text-sm italic text-gray-400 md:ml-4">
      “The Lebanese American Commission for Democracy”
    </p>
  </div>

  {/* Signup Box */}
  <div className="w-full max-w-sm mt-4 md:mt-0">
    <div className="bg-[#324e79] p-4 rounded text-xs uppercase text-white">
      <span className="font-bold block mb-4 text-center">
        Sign Up for Email Updates
      </span>
      <form className="flex flex-col sm:flex-row gap-2 items-center">
        <input
          type="email"
          placeholder="Email address"
          className="px-3 py-2 rounded bg-gray-100 text-gray-700 w-full sm:w-[60%] text-xs"
        />
        <input
          type="text"
          placeholder="Zip code"
          className="px-3 py-2 rounded bg-gray-100 text-gray-700 w-full sm:w-[40%] text-xs"
        />
        <button
          type="submit"
          className="bg-[#63b2f5] hover:bg-[#4ea8de] text-white text-lg rounded px-3 py-[6px]"
        >
          →
        </button>
      </form>
    </div>
  </div>
</div>

  {/* Navigation Bar */}
  <nav className="hidden md:block w-full bg-[#f8f9fc] shadow">
    <div className="flex justify-center max-w-[1200px] mx-auto">
      <Link
        href="/"
        className="flex-1 text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 transition-colors text-sm font-semibold"
      >
        HOME
      </Link>

      {/* ABOUT LACD Dropdown */}
      <div className="relative group flex-1 text-center border-r border-gray-300">
        <button className="w-full px-6 py-4 hover:bg-gray-200 text-sm font-semibold">
          ABOUT LACD
        </button>
        <div className="absolute left-0 top-full w-full bg-white text-black hidden group-hover:block shadow-md z-10">
          <Link
            href="/about/mission"
            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-sm"
          >
            Mission Statement
          </Link>
          <Link
            href="/about/media"
            className="block px-4 py-2 hover:bg-gray-100 text-sm"
          >
            LACD in the Media
          </Link>
        </div>
      </div>

      {/* ACTIVITIES Dropdown */}
      <div className="relative group flex-1 text-center border-r border-gray-300">
        <button className="w-full px-6 py-4 hover:bg-gray-200 text-sm font-semibold">
          ACTIVITIES
        </button>
        <div className="absolute left-0 top-full w-full bg-white text-black hidden group-hover:block shadow-md z-10">
          <Link
            href="/activities/events"
            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-sm"
          >
            LACD Events (Calendar)
          </Link>
          <Link
            href="/activities/photos"
            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-sm"
          >
            LACD Photos
          </Link>
          <Link
            href="/activities/videos"
            className="block px-4 py-2 hover:bg-gray-100 text-sm"
          >
            LACD Videos
          </Link>
        </div>
      </div>

      <Link
        href="/contact"
        className="flex-1 text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 transition-colors text-sm font-semibold"
      >
        CONTACT US
      </Link>
      <Link
        href="/subscribe"
        className="flex-1 text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 transition-colors text-sm font-semibold"
      >
        SUBSCRIBE
      </Link>
      <Link
        href="/donation"
        className="bg-[#A02012] hover:bg-[#84180F] text-white px-6 py-4 font-bold transition-colors text-sm"
      >
        DONATE TODAY
      </Link>
    </div>
  </nav>

  {/* Mobile Menu */}
  <div className="md:hidden bg-gray-100 text-black w-full px-6 py-2 border-b border-gray-300">
    <SideMenu />
  </div>
</header>

  );
}
