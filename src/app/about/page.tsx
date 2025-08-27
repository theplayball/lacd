// app/about/page.tsx
import React from "react";
import Link from "next/link";

export default function AboutLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About LACD
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about the Lebanese American Commission for Democracy by exploring our mission and media presence.
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/about/mission" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">Mission Statement</h3>
                <p className="text-gray-600 mb-4">Learn about our mission and the values that drive our work.</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  View Mission
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
            
            <Link href="/about/media" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">LACD in the Media</h3>
                <p className="text-gray-600 mb-4">Explore our media presence and coverage of our activities.</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  View Media
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
