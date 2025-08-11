"use client";

import Link from "next/link";
import SideMenu from "./SideMenu";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the email to your backend
      console.log('Signup email:', email);
      
      // Make API call to subscribe endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Subscription failed');
      }

      const result = await response.json();
      console.log('Subscription result:', result);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
      
    } catch (error) {
      console.error('Signup error:', error);
      setIsSubmitting(false);
      alert('There was an error signing up. Please try again.');
    }
  };

  return (
    <header className="bg-[#274472]">
  {/* Top Bar */}
  <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 py-6 gap-6">
  {/* Logo + Text container */}
  <div className="flex flex-col items-center gap-2 text-center">
    <Image
      src="/logo.png"
      alt="LACD Logo"
      width={100}
      height={100}
      priority
    />
          <div className="flex flex-col gap-1">
        <p className="text-md text-gray-300 font-serif">
          Lebanese American Commission for Democracy
        </p>
        <p className="text-lg font-bold text-gray-300 font-serif">
          LAC<span className="text-red-500">D</span>
        </p>
      </div>
  </div>

  {/* Signup Box */}
  <div className="w-full max-w-sm mt-4 md:mt-0">
    <div className="bg-[#324e79] p-4 rounded text-xs uppercase text-white">
      <span className="font-bold block mb-4 text-center">
        Sign Up for Email Updates
      </span>
      {submitSuccess ? (
        <div className="text-center text-green-300 text-xs">
          ✓ Successfully subscribed!
        </div>
      ) : (
        <form onSubmit={handleSignupSubmit} className="flex flex-col sm:flex-row gap-2 items-center">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-3 py-2 rounded bg-gray-100 text-gray-700 w-full sm:w-[80%] text-xs"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#63b2f5] hover:bg-[#4ea8de] disabled:bg-gray-400 text-white text-lg rounded px-3 py-[6px] transition-colors"
          >
            {isSubmitting ? '...' : '→'}
          </button>
        </form>
      )}
    </div>
  </div>
</div>

  {/* Navigation Bar */}
  <nav className="hidden md:block w-full bg-[#f8f9fc] shadow sticky top-0 z-50">
    <div className="flex justify-center max-w-[1200px] mx-auto">
      <Link
        href="/"
        className="flex-1 text-[#274472] text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 transition-colors text-sm font-semibold"
      >
        HOME
      </Link>

      {/* ABOUT LACD Dropdown */}
      <div className="relative group flex-1 text-center border-r border-gray-300">
        <button className="w-full px-6 py-4 hover:bg-gray-200 text-sm font-semibold text-[#274472]">
          ABOUT LACD
        </button>
        <div className="absolute left-0 top-full w-full bg-white text-black hidden group-hover:block shadow-md z-10">
          <Link
            href="/about/mission"
            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-sm text-[#274472]"
          >
            Mission Statement
          </Link>
          <Link
            href="/about/media"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-[#274472]"
          >
            LACD in the Media
          </Link>
        </div>
      </div>

      {/* ACTIVITIES Dropdown */}
      <div className="relative group flex-1 text-center border-r border-gray-300">
        <button className="w-full px-6 py-4 hover:bg-gray-200 text-sm font-semibold text-[#274472]">
          ACTIVITIES
        </button>
        <div className="absolute left-0 top-full w-full bg-white text-black hidden group-hover:block shadow-md z-10">
          <Link
            href="/activities/events"
            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-sm text-[#274472]"
          >
            LACD Events
          </Link>
          <Link
            href="/activities/photos"
            className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200 text-sm text-[#274472]"
          >
            LACD Photos
          </Link>
          <Link
            href="/activities/videos"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-[#274472]"
          >
            LACD Videos
          </Link>
        </div>
      </div>

      <Link
        href="/contact"
        className="flex-1 text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 transition-colors text-sm font-semibold text-[#274472]"
      >
        CONTACT US
      </Link>
      <Link
        href="/subscribe"
        className="flex-1 text-center px-6 py-4 border-r border-gray-300 hover:bg-gray-200 transition-colors text-sm font-semibold text-[#274472]"
      >
        SUBSCRIBE
      </Link>
      <Link
        href="/donation"
        className="bg-[#A02012] hover:bg-[#84180F] text-white px-6 py-4 font-bold transition-colors text-sm "
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
