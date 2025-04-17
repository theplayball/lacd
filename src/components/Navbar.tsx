"use client";
import Link from "next/link";
import SideMenu from "./SideMenu";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="bg-[#1D3557] text-white flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <h1 className="text-4xl font-bold leading-tight">
            <span className="italic font-cursive">LACD</span>
          </h1>
          <p className="text-sm italic text-gray-300 md:ml-4 mt-2 md:mt-0">
            “Nam elit agna, enderit sit amet, tincidunt ac, viverra sed,
            nulla..”
          </p>
        </div>

        <div className="bg-gray-400/10 p-4 rounded-md flex flex-col items-center justify-between gap-1 w-full max-w-md">
          <span className="uppercase text-sm font-medium">
            <span className="font-bold">Sign Up</span> for Email Updates
          </span>
          <div className="flex flex-col sm:flex-row gap-2 mt-1 w-full">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded-sm bg-white text-gray-400 text-sm w-full"
            />
            <input
              type="text"
              placeholder="Zip code"
              className="px-3 py-2 rounded-sm bg-white text-gray-400 text-sm sm:w-24"
            />
            <button className="bg-[#4EA8DE] text-white px-4 py-2 rounded-sm text-3xl w-full sm:w-auto">
              →
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden md:flex border-b border-gray-300">
        <div className="flex w-full bg-[#f8f9fc] text-gray-800 text-base font-semibold">
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT LACD", href: "/" },
            { label: "ACTIVITIES", href: "/" },
            { label: "CONTACT US", href: "/" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex-1 text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 hover:cursor-pointer"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/donation">
            <div className="bg-[#A02012] text-white px-6 py-4 text-center hover:bg-[#84180F] font-bold hover:cursor-pointer">
              DONATE TODAY
            </div>
          </Link>
        </div>
      </nav>

      <div className="md:hidden bg-gray-100 text-black w-full px-6 flex items-center border-b border-gray-300  ">
        <SideMenu />
      </div>
    </header>
  );
}
