// app/activities/photos/page.tsx
"use client";
import React from "react";
import Link from "next/link";

const activityData = [
  {
    id: "lacd-activities",
    name: "LACD Activities",
    description: "Activities organized by LACD",
    type: "category",
    activities: [
      {
        id: "saint-charbel-chapel",
        name: "Inauguration of Saint Charbel's Chapel",
        date: "December 15, 2023",
        chapter: "California Chapter",
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
        chapter: "California Chapter",
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
      {
        id: "major-general-choucair",
        name: "Dinner Honoring Major General Hassan Choucair",
        date: "October 10, 2023",
        chapter: "Michigan Chapter",
        description: "LACD - Michigan Chapter Participates in Dinner Honoring Major General Hassan Choucair",
        photos: [
          "/activity3/1.jpg",
          "/activity3/2.jpg",
        ],
      },
      {
        id: "st-barbara-association",
        name: "St. Barbara Association Fundraising Dinner",
        date: "September 25, 2023",
        chapter: "Los Angeles Chapter",
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
  },
  {
    id: "general-activities",
    name: "General LACD Activities",
    description: "Various activities and events across all LACD chapters",
    type: "category",
    activities: [
      {
        id: "general",
        name: "General LACD Activities and Events",
        date: "Ongoing",
        chapter: "General LACD",
        description: "Various activities and events across all LACD chapters",
        photos: [],
      }
    ]
  }
];

export default function PhotosPage() {
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

        <div className="space-y-12">
          {activityData.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.activities.map((activity) => (
                  <Link
                    href={`/activities/photos/${activity.id}`}
                    key={activity.id}
                    className="block group"
                  >
                    <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02] h-full flex flex-col">
                      {/* Preview Image */}
                      <div className="h-48 overflow-hidden flex-shrink-0">
                        {activity.photos && activity.photos.length > 0 ? (
                          <img
                            src={activity.photos[0]}
                            alt={activity.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={() => {
                              console.error(`Failed to load image: ${activity.photos[0]}`);
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {activity.name}
                        </h3>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          {activity.date && (
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{activity.date}</span>
                            </div>
                          )}
                          {activity.chapter && (
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <span>{activity.chapter}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm mb-4 flex-1">
                          {activity.description}
                        </p>

                        <div className="mt-auto flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                          View Photos
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
