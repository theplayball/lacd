"use client";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full  ">
      
      <div className="bg-[#1D3557] text-white flex flex-col  md:flex-row items-center justify-between px-8 py-6 gap-4">
        
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-4xl font-bold leading-tight">
            <span className="italic font-cursive">LCAD</span>
          </h1>
          <p className="text-sm italic text-gray-300 mt-1 items-center justify-between">
            “Nam elit agna, enderit sit amet, tincidunt ac, viverra sed, nulla..”
          </p>
        </div>
        <div className="bg-gray-400/10 p-4 rounded-md flex flex-col items-center justify-between gap-1 w-full max-w-md">
          <span className="uppercase text-sm font-medium"><span className="font-bold">Sign Up</span> for Email Updates</span>
          <div className="flex flex-col sm:flex-row gap-2 mt-1">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded-sm bg-white text-gray-400 text-sm w-full"
            />
            <input
              type="text"
              placeholder="Zip code"
              className="px-3 py-2 rounded-sm bg-white text-gray-400 text-sm w-full sm:w-24"
            />
            <button className="bg-[#4EA8DE] text-white px-4 py-2 rounded-sm text-3xl w-full sm:w-auto">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-black w-full px-6 flex items-center border-1 border-gray-300">
       
        <div className="md:hidden flex items-center gap-2">
          <SideMenu />
        </div>

        <div className="hidden md:flex gap-6 text-base font-semibold ml-auto">
          <Link href="/" className="hover:underline">HOME</Link>
          <Link href="/" className="hover:underline">ABOUT LCAD</Link>
          <Link href="/" className="hover:underline">ACTIVITIES</Link>
          <Link href="/" className="hover:underline">CONTACT US</Link>
          <Link href="/" className="hover:underline">DONATION</Link>
        </div>
      </div>
    </header>
  );
}
