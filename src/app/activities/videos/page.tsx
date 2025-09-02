"use client";
import React from "react";
import Link from "next/link";

const videoData = [
  {
    id: "nada-boustani-visit",
    name: "MP Nada Boustani's Visit to the United States",
    date: "2024",
    chapter: "LACD Boston & Michigan",
    title: "MP Nada Boustani's Visit to the United States",
    description: "Highlights from MP Nada Boustani's visit including welcome ceremony, speeches, and honorary recognition",
    fullText: "MP Nada Boustani's visit to the United States featured several significant events including a welcome ceremony in Boston, participation in the annual dinner organized by LACD Michigan Chapter, remarks during a discussion session with The MENA American Chamber of Commerce, and an honorary plaque presentation by LACD.",
    videos: [
      {
        id: "welcome-boston",
        title: "Bishop François Beyrouti welcomes MP Nada Boustani in Boston",
        description: "Welcome ceremony for MP Nada Boustani in Boston, Massachusetts",
        thumbnail: "/story3.jpeg",
        videoFile: "/1.mp4"
      },
      {
        id: "michigan-dinner",
        title: "Speech by MP Nada Boustani during the annual dinner organized by LACD Michigan Chapter",
        description: "MP Nada Boustani delivers a speech at the LACD Michigan Chapter annual dinner",
        thumbnail: "/story3.jpeg",
        videoFile: "/2a.mp4"
      },
      {
        id: "mena-chamber",
        title: "MP Nada Boustani's remarks during the discussion session organized by The MENA American Chamber of Commerce",
        description: "MP Nada Boustani participates in a discussion session with The MENA American Chamber of Commerce",
        thumbnail: "/story3.jpeg",
        videoFile: "/3.mp4"
      },
      {
        id: "honorary-plaque",
        title: "An honorary plaque presented by LACD to MP Nada Boustani",
        description: "LACD presents an honorary plaque to MP Nada Boustani as a token of appreciation and gratitude for her visit to the United States",
        thumbnail: "/story3.jpeg",
        videoFile: "/4.mp4"
      }
    ],
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            LACD Videos
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch videos from our various activities and events across all LACD chapters.
          </p>
        </div>

        {/* Video Categories */}
        {videoData.filter(activity => activity.videos.length > 0).length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData
              .filter(activity => activity.videos.length > 0)
              .map((activity) => (
              <Link
                href={`/activities/videos/${activity.id}`}
                key={activity.id}
                className="block group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02] h-full flex flex-col">
                  {/* Preview - Video Thumbnail */}
                  <div className="h-48 overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-500">Video Content</p>
                    </div>
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

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                        View Videos
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {activity.videos.length} videos
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos available at the moment.</p>
          </div>
        )}


      </main>
    </div>
  );
}
