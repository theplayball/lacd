"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { newsData, upcomingEvents, NewsItem } from "@/data/news";

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.id}`} className="block">
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={400}
          className="rounded-t-lg object-cover w-full h-[220px]"
        />

        <div className="p-5">
          <p className="text-xs text-gray-500 mb-1">{item.date}</p>

          <h3 className="text-lg font-semibold text-[#4174c5] mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-gray-700 line-clamp-3">{item.fullText}</p>

          <p className="mt-3 text-sm font-medium text-[#003366]">
            Click to read more →
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function NewsEvents() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, note }),
      });

      if (!res.ok) throw new Error("Subscribe failed");

      setSubmitSuccess(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setNote("");
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch {
      alert("Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="text-gray-800 px-4 py-8 sm:py-12 md:py-16 ml-12">
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {/* Latest News */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#003366] text-left">
              LATEST NEWS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsData.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Subscribe Section */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            style={{ minHeight: "400px" }}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mb-6">
                SUBSCRIBE
              </h2>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    You have been successfully subscribed to our newsletter.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribeSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Note (Optional)
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#274472] hover:bg-[#1e3559] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Stay updated with our latest news, events, and community
                activities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {/* Featured Video */}
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  FEATURED VIDEO
                </h3>
                <p className="text-sm text-gray-500">Latest from LACD</p>
              </div>
            </div>

            <div className="mb-4">
              <video
                controls
                className="w-full rounded-lg"
                style={{ maxHeight: "300px" }}
                preload="metadata"
              >
                <source src="/4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/activities/videos"
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors duration-200 group"
              >
                <span>MORE VIDEOS</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 w-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base">
                  UPCOMING EVENTS
                </h3>
                <p className="text-xs text-gray-500">Don&apos;t miss out!</p>
              </div>
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="space-y-2">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="p-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {event.title}
                          </h4>
                          <p className="text-xs text-gray-500">LACD Official</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 text-center">
                      <a
                        href={`/activities/events?date=${event.calendarDate}`}
                        className="block"
                      >
                        <h3 className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                          {event.title}
                        </h3>
                      </a>
                      <p className="text-xs text-gray-500 mt-2">
                        {event.calendarDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm font-medium">
                  No upcoming events
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Check back soon for new events!
                </p>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-gray-100">
              <Link
                href="/activities/events"
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors duration-200 group"
              >
                <span>VIEW ALL EVENTS</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-2 w-full">
            
            <a
              href="https://www.facebook.com/profile.php?id=100067370376708"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#1877F2] to-[#0d6efd] p-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        Facebook
                      </h3>
                      <p className="text-xs text-blue-100">
                        LACD Official Page
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors duration-200 group">
                    <span>VISIT OUR FACEBOOK PAGE</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>


            {/* X (Twitter) Profile */}
<a
  href="https://x.com/usalacd"
  target="_blank"
  rel="noopener noreferrer"
  className="group block w-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
>
  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
    
    {/* Header */}
    <div className="bg-black p-2">
      <div className="flex items-center space-x-2">
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2H21.556L14.316 10.26L22.82 22H16.156L10.93 14.62L4.447 22H1.13L8.87 13.17L0.708 2H7.53L12.25 8.66L18.244 2ZM17.09 20H18.91L6.51 4H4.56L17.09 20Z"/>
        </svg>

        <div>
          <h3 className="text-sm font-bold text-white">X</h3>
          <p className="text-xs text-gray-300">@usalacd</p>
        </div>
      </div>
    </div>

    {/* Body */}
    <div className="p-2">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/logo.png"
            alt="LACD X Profile"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-800">LACD Official</h4>
          <p className="text-xs text-gray-500">
            Lebanese American Commission for Democracy
          </p>
        </div>
      </div>

      <div className="text-center">
        <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors duration-200 group">
          <span>VISIT OUR X PAGE</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</a>



            <a
              href="https://www.instagram.com/lacd_official?igsh=MWw5anc2c2t4OHhmaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#E4405F] to-[#C13584] p-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        Instagram
                      </h3>
                      <p className="text-xs text-pink-100">@lacd_official</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <span className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg font-medium transition-colors duration-200 group">
                    <span>VISIT OUR INSTAGRAM PAGE</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
