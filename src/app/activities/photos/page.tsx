// app/activities/photos/page.tsx
"use client";
import React from "react";
import Link from "next/link";

const activityData = [
  {
    id: "general",
    name: "General LACD Activities",
    date: "",
    chapter: "General LACD",
    title: "General LACD Activities and Events",
    description: "Various activities and events across all LACD chapters",
    fullText: "General LACD activities and events will be displayed here when they become available.",
    photos: [],
  },
  {
    id: "activity1",
    name: "Community Meeting",
    date: "March 15, 2024",
    chapter: "Los Angeles Chapter",
    title: "Community Meeting and Discussion",
    description: "Monthly community meeting to discuss current events and plan future activities",
    fullText: "Our monthly community meeting brought together members from across the Los Angeles area to discuss current events, share updates on ongoing projects, and plan future activities. The meeting featured presentations on upcoming events, volunteer opportunities, and ways to get involved in the community.",
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
    id: "activity2",
    name: "Cultural Festival",
    date: "February 28, 2024",
    chapter: "New York Chapter",
    title: "Lebanese Cultural Festival",
    description: "Annual celebration of Lebanese culture, food, and traditions",
    fullText: "The annual Lebanese Cultural Festival was a vibrant celebration of our heritage, featuring traditional music, dance performances, authentic Lebanese cuisine, and cultural exhibits. The event attracted hundreds of visitors and successfully showcased the rich traditions of Lebanon to the broader community.",
    photos: [
      "/activity2/1.jpg",
      "/activity2/2.jpg",
      "/activity2/3.jpg",
      "/activity2/4.jpg",
      "/activity2/5.jpg",
      "/activity2/6.jpg",
      "/activity2/7.jpg",
      "/activity2/8.jpg",
      "/activity2/9.jpg",
      "/activity2/10.jpg",
    ],
  },
  {
    id: "activity3",
    name: "Youth Workshop",
    date: "January 20, 2024",
    chapter: "Chicago Chapter",
    title: "Youth Leadership Workshop",
    description: "Interactive workshop focused on developing leadership skills in young community members",
    fullText: "Our youth leadership workshop provided young community members with valuable skills in public speaking, event planning, and community organizing. The interactive sessions included role-playing exercises, group discussions, and hands-on activities designed to build confidence and leadership abilities.",
    photos: [
      "/activity3/1.jpg",
      "/activity3/2.jpg",
    ],
  },
  {
    id: "activity4",
    name: "Fundraising Gala",
    date: "December 10, 2023",
    chapter: "Houston Chapter",
    title: "Annual Fundraising Gala",
    description: "Elegant evening of dinner, entertainment, and fundraising for community projects",
    fullText: "The annual fundraising gala was an elegant evening that brought together community leaders, supporters, and friends for an evening of fine dining, entertainment, and fundraising. The event successfully raised significant funds for our community projects and provided an opportunity for networking and celebration.",
    photos: [
      "/activity4/1.jpg",
      "/activity2/2.jpg",
      "/activity4/3.jpg",
      "/activity4/4.jpg",
      "/activity4/5.jpg",
    ],
  },
];

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            LACD Activities Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of activities and events that bring our community together
          </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activityData
          .filter(activity => activity.date && activity.photos.length > 0)
          .map((activity) => (
            <Link
              href={`/activities/photos/${activity.id}`}
              key={activity.id}
              className="block group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02] h-full flex flex-col">
                {/* Preview Image */}
                <div className="h-48 overflow-hidden flex-shrink-0">
                  {activity.photos.length > 0 ? (
                    <img
                      src={activity.photos[0]}
                      alt={activity.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
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
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>{activity.chapter}</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    View Details
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      </main>
    </div>
  );
}
