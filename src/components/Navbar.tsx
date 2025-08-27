"use client";

import Link from "next/link";
import SideMenu from "./SideMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-[#274472]">
      {/* Main Header with Logo and Navigation */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Logo + Text container */}
          <Link href="/" className="flex items-center gap-4 text-center hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="LACD Logo"
              width={120}
              height={120}
              priority
              className="flex-shrink-0"
            />
            <div className="flex flex-col gap-1">
              <p className="text-md text-gray-300 font-serif">
                Lebanese American Commission for Democracy
              </p>
              <p className="text-3xl font-bold text-white font-serif">
                LAC<span className="text-red-500">D</span>
              </p>
            </div>
          </Link>

          {/* Navigation Bar - positioned to the right */}
          <nav className="hidden lg:block bg-[#274472]  rounded-lg relative overflow-visible">
            <div className="flex">
              <Link
                href="/"
                className="text-white text-center px-4 py-3 border-r border-gray-400 hover:bg-gray-600 transition-colors text-sm font-semibold rounded-l-lg"
              >
                HOME
              </Link>

              {/* ABOUT LACD Dropdown */}
              <div className="relative group text-center border-r border-gray-400">
                <button className="px-4 py-3 hover:bg-gray-600 text-sm font-semibold text-white">
                  ABOUT LACD
                </button>
                <div className="absolute left-0 top-full w-full bg-white text-black hidden group-hover:block shadow-xl z-50 rounded-lg border-2 border-gray-300 min-w-[200px] overflow-visible">
                  <Link
                    href="/about/mission"
                    className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-200 text-sm text-[#274472] rounded-t-lg transition-colors font-medium"
                  >
                    Mission Statement
                  </Link>
                  <Link
                    href="/about/media"
                    className="block px-4 py-3 hover:bg-gray-100 text-sm text-[#274472] rounded-b-lg transition-colors font-medium"
                  >
                    LACD in the Media
                  </Link>
                </div>
              </div>

              {/* ACTIVITIES Dropdown */}
              <div className="relative group text-center border-r border-gray-400">
                <button className="px-4 py-3 hover:bg-gray-600 text-sm font-semibold text-white">
                  ACTIVITIES
                </button>
                <div className="absolute left-0 top-full w-full bg-white text-black hidden group-hover:block shadow-xl z-50 rounded-lg border-2 border-gray-300 min-w-[200px] overflow-visible">
                  <Link
                    href="/activities/events"
                    className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-200 text-sm text-[#274472] rounded-t-lg transition-colors font-medium"
                  >
                    LACD Events
                  </Link>
                  <Link
                    href="/activities/photos"
                    className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-200 text-sm text-[#274472] transition-colors font-medium"
                  >
                    LACD Photos
                  </Link>
                  <Link
                    href="/activities/videos"
                    className="block px-4 py-3 hover:bg-gray-100 text-sm text-[#274472] rounded-b-lg transition-colors font-medium"
                  >
                    LACD Videos
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="text-center px-4 py-3 border-r border-gray-400 hover:bg-gray-600 transition-colors text-sm font-semibold text-white"
              >
                CONTACT US
              </Link>
              <Link
                href="/subscribe"
                className="text-center px-4 py-3 border-r border-gray-400 hover:bg-gray-600 transition-colors text-sm font-semibold text-white"
              >
                SUBSCRIBE
              </Link>
              <Link
                href="/donation"
                className="bg-[#A02012] hover:bg-[#84180F] text-white px-4 py-3 font-bold transition-colors text-sm rounded-r-lg"
              >
                DONATE
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden bg-gray-100 text-black w-full px-6 py-2 border-t border-gray-300">
        <SideMenu />
      </div>
    </header>
  );
}
