// app/about/media/page.tsx
import React from "react";
import Link from "next/link";


export default function MediaPage() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      
      {/* Main content wrapper */}
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          
          {/* Main page title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            LACD in the Media
          </h1>

          {/* Decorative underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>

          {/* Page subtitle */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our media presence and coverage of LACD activities and initiatives
          </p>
        </div>

       
        {/*
        <div className="space-y-8">
          {mediaData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg p-8">

              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Media Coverage Sources
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {item.sources.map((source, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">

                        <div className="flex items-start space-x-3 flex-1">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            ICON
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 text-sm mb-1">
                              {source.name}
                            </h4>
                            <span className="text-xs text-gray-600">
                              {source.language}
                            </span>
                          </div>
                        </div>

                        
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 text-sm"
                        >
                          Read
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        {/*TWO TOPIC BOXES */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Box 1: US Tour */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
             MP Nada Boustani&apos;s Tour in the United States of America
            </h2>

            <p className="text-gray-700 mb-4">
             Coverage of MP Nada Boustani&apos;s visit to the United States
            </p>
          {/* Link to US Tour page */}
            <Link
              href="/about/media/1"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Click here →
            </Link>
          </div>

          {/* -------- Box 2: Washington Meeting -------- */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              MP Nada Boustani&apos;s Meetings in Washington
            </h2>

            <p className="text-gray-700 mb-4">
              Coverage of MP Nada Boustani&apos;s meetings in Washington 
            </p>

            {/* Link to Washington Meeting page */}
            <Link
              href="/about/media/3"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Click here →
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}