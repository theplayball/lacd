"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setAboutOpen(false);
        setActivitiesOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setActivitiesOpen(false);
  };

  return (
    <div className="relative w-full z-50" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-[#3e474c] w-full px-4 py-5 flex items-center gap-2 hover:bg-[#63B2F5] hover:text-blue-50 border border-gray-300"
        aria-expanded={menuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="font-medium text-lg">Menu</span>
      </button>

      {menuOpen && (
        <div className="absolute left-0 top-0 w-full max-w-sm bg-gray-100 border-t border-gray-300 shadow-lg z-40">
          
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center border-b border-gray-200 border-l-4 border-l-gray-400 px-6 py-3 hover:bg-sky-200"
          >
            Home
          </Link>

          {/* ABOUT LACD DROPDOWN */}
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex justify-between items-center w-full px-6 py-3 border-b border-gray-200 hover:bg-sky-200"
          >
            <span>About LACD</span>
            {aboutOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {aboutOpen && (
            <div className="bg-gray-50 border-l-4 border-l-gray-400 pl-6">
              <Link
                href="/about/mission"
                onClick={closeMenu}
                className="block px-6 py-2 hover:bg-sky-100 text-sm"
              >
                Mission Statement
              </Link>
              <Link
                href="/about/media"
                onClick={closeMenu}
                className="block px-6 py-2 hover:bg-sky-100 text-sm"
              >
                LACD in the Media
              </Link>
            </div>
          )}

          {/* ACTIVITIES DROPDOWN */}
          <button
            onClick={() => setActivitiesOpen(!activitiesOpen)}
            className="flex justify-between items-center w-full px-6 py-3 border-b border-gray-200 hover:bg-sky-200"
          >
            <span>Activities</span>
            {activitiesOpen ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {activitiesOpen && (
            <div className="bg-gray-50 border-l-4 border-l-gray-400 pl-6">
              <Link
                href="/activities/events"
                onClick={closeMenu}
                className="block px-6 py-2 hover:bg-sky-100 text-sm"
              >
                LACD Events
              </Link>
              <Link
                href="/activities/photos"
                onClick={closeMenu}
                className="block px-6 py-2 hover:bg-sky-100 text-sm"
              >
                LACD Photos
              </Link>
              <Link
                href="/activities/videos"
                onClick={closeMenu}
                className="block px-6 py-2 hover:bg-sky-100 text-sm"
              >
                LACD Videos
              </Link>
            </div>
          )}

          {/* Contact and Subscribe links */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex items-center border-b border-gray-200 px-6 py-3 hover:bg-sky-200"
          >
            Contact Us
          </Link>

          <Link
            href="/subscribe"
            onClick={closeMenu}
            className="flex items-center border-b border-gray-200 px-6 py-3 hover:bg-sky-200"
          >
            Subscribe
          </Link>

          <Link
            href="/subscribe"
            onClick={closeMenu}
            className="block text-white bg-red-700 px-6 py-3 text-center font-semibold hover:bg-red-800"
          >
            DONATE
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
