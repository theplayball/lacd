// app/activities/photos/page.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

const chaptersData = [
  {
    id: "california-chapter",
    name: "California Chapter",
    description: "Activities and events from the California Chapter",
    activities: [
      {
        id: "saint-charbel-chapel",
        name: "Inauguration of Saint Charbel's Chapel",
        date: "December 15, 2023",
        description: "LACD Participates in the Inauguration of Saint Charbel's Chapel in Murrieta, California",
        photos: [
          "/activity1/1.jpg",
          "/activity1/2.jpg",
          "/activity1/3.jpg",
          "/activity1/4.jpg",
          "/activity1/5.jpg",
          "/activity1/6.jpg",
          "/activity1/7.jpg",
          "/activity1/8.jpg",
          "/activity1/9.jpg",
          "/activity1/10.jpg",
          "/activity1/11.jpg",
          "/activity1/12.jpg",
          "/activity1/13.jpg",
          "/activity1/14.jpg",
        ],
      },
      {
        id: "afndu-fundraising",
        name: "Fundraising Dinner for AFNDU",
        date: "November 20, 2023",
        description: "LACD Participates in Fundraising Dinner for AFNDU",
        photos: [
          "/activity2/1.jpg",
          "/activity2/2.jpg",
          "/activity2/3.jpg",
          "/activity2/4.jpg",
          "/activity2/5.jpg",
          "/activity2/6.jpg",
          "/activity2/7.jpg",
          "/activity2/8.jpg",
          "/activity2/10.jpg",
        ],
      },
    ]
  },
  {
    id: "michigan-chapter",
    name: "Michigan Chapter",
    description: "Activities and events from the Michigan Chapter",
    activities: [
      {
        id: "major-general-choucair",
        name: "Dinner Honoring Major General Hassan Choucair",
        date: "October 10, 2023",
        description: "LACD - Michigan Chapter Participates in Dinner Honoring Major General Hassan Choucair",
        photos: [
          "/activity3/1.jpg",
          "/activity3/2.jpg",
        ],
      },
    ]
  },
  {
    id: "los-angeles-chapter",
    name: "Los Angeles Chapter",
    description: "Activities and events from the Los Angeles Chapter",
    activities: [
      {
        id: "st-barbara-association",
        name: "St. Barbara Association Fundraising Dinner",
        date: "September 25, 2023",
        description: "LACD-Los Angeles Chapter participates in the fundraising dinner organized by St. Barbara association.",
        photos: [
          "/activity4/1.jpg",
          "/activity4/2.jpg",
          "/activity4/3.jpg",
          "/activity4/4.jpg",
          "/activity4/5.jpg",
        ],
      },
    ]
  }
];



export default function PhotosPage() {
  const [view, setView] = useState<'main' | 'chapters'>('main');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            LACD Photos Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of activities and events that bring our community together
          </p>
        </div>

        {/* Main View - Two Cards */}
        {view === 'main' && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* General LACD Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">General LACD</h2>
                <p className="text-gray-600 mb-6">
                  Explore general activities and events organized by LACD across all chapters
                </p>
                <Link
                  href="/activities/photos/general"
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                >
                  View General Activities
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* LACD Chapters Card */}
            <div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setView('chapters')}
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">LACD Chapters</h2>
                <p className="text-gray-600 mb-6">
                  Browse activities and events organized by specific LACD chapters
                </p>
                <div className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700">
                  View Chapters
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chapters View */}
        {view === 'chapters' && (
          <div className="space-y-8">
            {/* Back Button */}
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setView('main')}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Main View
              </button>
            </div>

            {/* Chapters Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {chaptersData.map((chapter) => (
                <div key={chapter.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-40 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{chapter.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{chapter.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      {chapter.activities.length} {chapter.activities.length === 1 ? 'activity' : 'activities'}
                    </p>
                    <div className="space-y-2">
                      {chapter.activities.map((activity) => (
                        <Link
                          key={activity.id}
                          href={`/activities/photos/${activity.id}`}
                          className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-800 text-sm">{activity.name}</h4>
                              <p className="text-xs text-gray-500">{activity.date}</p>
                            </div>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
