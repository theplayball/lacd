"use client";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Import the video data from the main page
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
        
        videoFile: "/1.mp4"
      },
      {
        id: "michigan-dinner",
        title: "Speech by MP Nada Boustani during the annual dinner organized by LACD Michigan Chapter",
        description: "MP Nada Boustani delivers a speech at the LACD Michigan Chapter annual dinner",
        
        videoFile: "/2a.mp4"
      },
      {
        id: "mena-chamber",
        title: "MP Nada Boustani's remarks during the discussion session organized by The MENA American Chamber of Commerce",
        description: "MP Nada Boustani participates in a discussion session with The MENA American Chamber of Commerce",
       
        videoFile: "/3.mp4"
      },
      {
        id: "honorary-plaque",
        title: "An honorary plaque presented by LACD to MP Nada Boustani",
        description: "LACD presents an honorary plaque to MP Nada Boustani as a token of appreciation and gratitude for her visit to the United States",
        
        videoFile: "/4.mp4"
      }
    ],
  },
];

export default function VideoCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const videoCategory = videoData.find(category => category.id === resolvedParams.id);

  if (!videoCategory) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/activities/videos"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Videos
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {videoCategory.name}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {videoCategory.description}
          </p>
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{videoCategory.date}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{videoCategory.chapter}</span>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mb-16 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {videoCategory.fullText}
          </p>
        </div>



        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoCategory.videos.map((video) => (
            <div key={video.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Video Player */}
              <div className="h-64 overflow-hidden flex-shrink-0 bg-gray-100">
                <video 
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={video.videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {video.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Video
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
