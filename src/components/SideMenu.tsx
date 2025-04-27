"use client";

import React, { useState, useRef, useEffect } from "react";

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About LCAD", href: "#about" },
    { label: "Activities", href: "#activities" },
    { label: "Contact Us", href: "#contact" },
    { label: "Donation", href: "#donation" },
  ];

  return (
    <div className="relative w-full z-50" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className=" text-[#3e474c] w-full px-4 py-5 flex items-center gap-2 hover:bg-[#63B2F5] hover:text-blue-50 border border-gray-300 hover:cursor-pointer"
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
        <div className="absolute left-0 top-0 w-full bg-gray-100 pr-10 border-t border-gray-300 shadow-lg z-40">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center border-[0.5px] border-gray-200 justify-between px-4 py-3 hover:bg-sky-200"
            >
              <span>{item.label}</span>
            </a>
          ))}

          <a
            href="#donation"
            onClick={() => setMenuOpen(false)}
            className="block text-white bg-red-700 px-4 py-3 text-center font-semibold hover:bg-red-800"
          >
            DONATE TODAY
          </a>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
