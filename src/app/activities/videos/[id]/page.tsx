"use client";
import React from "react";
import Link from "next/link";

const videoData = [
  {
    id: "general",
    name: "General LACD Videos",
    date: "",
    chapter: "General LACD",
    title: "General LACD Videos and Content",
    description: "Various video content and presentations from LACD activities",
    fullText: "General LACD video content will be displayed here when it becomes available.",
    videos: [],
  },
  {
    id: "video1",
    name: "Community Meeting Recording",
    date: "March 15, 2024",
    chapter: "Los Angeles Chapter",
    title: "Community Meeting and Discussion Recording",
    description: "Full recording of our monthly community meeting discussing current events and future activities",
    fullText: "This is the complete recording of our monthly community meeting that brought together members from across the Los Angeles area. The meeting featured presentations on upcoming events, volunteer opportunities, and ways to get involved in the community. Watch the full discussion and Q&A session.",
    videos: [
      "https://www.youtube.com/embed/VIDEO_ID_1",
      "https://www.youtube.com/embed/VIDEO_ID_2",
    ],
  },
  {
    id: "video2",
    name: "Cultural Festival Highlights",
    date: "February 28, 2024",
    chapter: "New York Chapter",
    title: "Lebanese Cultural Festival Highlights",
    description: "Highlights and performances from our annual Lebanese cultural celebration",
    fullText: "Relive the excitement of our annual Lebanese Cultural Festival through these video highlights. The event featured traditional music performances, dance shows, cultural presentations, and interviews with participants. Experience the vibrant atmosphere and rich traditions of Lebanon.",
    videos: [
      "https://www.youtube.com/embed/VIDEO_ID_3",
      "https://www.youtube.com/embed/VIDEO_ID_4",
      "https://www.youtube.com/embed/VIDEO_ID_5",
    ],
  },
  {
    id: "video3",
    name: "Youth Workshop Session",
    date: "January 20, 2024",
    chapter: "Chicago Chapter",
    title: "Youth Leadership Workshop Session",
    description: "Interactive workshop session focused on developing leadership skills",
    fullText: "Watch highlights from our youth leadership workshop that provided young community members with valuable skills in public speaking, event planning, and community organizing. The session included interactive exercises, group discussions, and hands-on activities.",
    videos: [
      "https://www.youtube.com/embed/VIDEO_ID_6",
    ],
  },
  {
    id: "video4",
    name: "Fundraising Gala Highlights",
    date: "December 10, 2023",
    chapter: "Houston Chapter",
    title: "Annual Fundraising Gala Highlights",
    description: "Highlights from our elegant fundraising evening",
    fullText: "Experience the highlights from our annual fundraising gala, an elegant evening that brought together community leaders, supporters, and friends. The event featured fine dining, entertainment, and successful fundraising for our community projects.",
    videos: [
      "https://www.youtube.com/embed/VIDEO_ID_7",
      "https://www.youtube.com/embed/VIDEO_ID_8",
    ],
  },
];

export default function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const activity = videoData.find(a => a.id === resolvedParams.id);

  if (!activity) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Video Not Found</h1>
          <p className="text-gray-600 mb-6">The requested video activity could not be found.</p>
          <Link
            href="/activities/videos"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Videos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/activities/videos"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Videos
        </Link>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{activity.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{activity.description}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{activity.date}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{activity.chapter}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Event</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{activity.fullText}</p>
        </div>
      </div>

      {/* Video Gallery */}
      {activity.videos.length > 0 ? (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Video Gallery</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activity.videos.map((src, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={src}
                    title={`${activity.name} video ${idx + 1}`}
                    allowFullScreen
                    className="w-full h-64"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 text-center">
                    Video {idx + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Videos Available</h3>
            <p className="text-gray-500">
              This section provides an overview of general LACD video content and does not contain specific videos yet.
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="text-center">
        <Link
          href="/activities/videos"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Video Gallery
        </Link>
      </div>
    </main>
  );
}
