"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Event {
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
}

const newsData = {
  latest: {
    image: "/news-image.jpeg",
    title: "Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed",
    author: "admin",
    date: "October 01, 2013 11:28AM",
    excerpt:
      "Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.",
  },
  events: [] as Event[], // Empty array for no upcoming events
};

export default function NewsEvents() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Make API call to subscribe endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          firstName,
          lastName,
          email 
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Subscription failed');
      }

      const result = await response.json();
      console.log('Subscription result:', result);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
      
    } catch (error) {
      console.error('Subscription error:', error);
      setIsSubmitting(false);
      alert('There was an error subscribing. Please try again.');
    }
  };

  return (
    <main className="text-gray-800 px-4 py-8 sm:py-12 md:py-16 ml-12">
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side*/}
        <div className="md:col-span-2 flex flex-col gap-10">
          {/* Latest News */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#003366] text-left">
              LATEST NEWS
            </h2>

            <div className="md:col-span-2 flex flex-col gap-10 md:flex-row">
              <div className="w-full md:w-[50%]">
                <Image
                  src={newsData.latest.image}
                  alt="Latest news"
                  width={400}
                  height={300}
                  className="rounded-md object-cover w-full h-[160px] sm:h-[240px] md:h-[300px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between w-full text-left text-sm sm:text-base md:w-[50%]">
                <h3 className="text-[#4174c5] font-semibold text-lg sm:text-xl">
                  {newsData.latest.title}
                </h3>
                <p className="text-xs text-[#95999e] mt-1">
                  by <span className="text-[#4174c5]">{newsData.latest.author}</span> • {newsData.latest.date}
                </p>
                <p className="my-2 text-[#3e474c]">{newsData.latest.excerpt}</p>

                <div className="flex mt-4">
                  <button className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white text-xs sm:text-sm px-4 py-2 rounded-md border-t border-b border-t-[#f3f7fa] border-b-[#bfc8d7]">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between" style={{ minHeight: '400px' }}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#003366] mb-6">
                SUBSCRIBE
              </h2>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    You have been successfully subscribed to our newsletter.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribeSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#274472] hover:bg-[#1e3559] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Additional spacing to push content to bottom */}
            <div className="flex-1"></div>
            
            {/* Bottom section with additional info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Stay updated with our latest news, events, and community activities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - 1 column */}
        <div className="flex flex-col gap-8">
          {/* Featured Video */}
          <div className="bg-white rounded-md p-4 shadow-md w-full">
            <h3 className="font-extralight sm:text-lg mb-4 text-[#3b3b3c] text-center">
              FEATURED VIDEO
            </h3>
            <div className="aspect-video mb-2">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/6C8R9qzZ_Hk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button className="text-sm text-[#4174c5] hover:underline text-center w-full mt-2 hover:cursor-pointer">
              MORE VIDEOS →
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-md p-2 shadow-md w-full">
            <h3 className="font-extralight text-lg mb-6 text-[#3b3b3c] text-center pb-1">
              UPCOMING EVENTS
            </h3>
            {newsData.events.length > 0 ? (
              <ul className="space-y-14">
                {newsData.events.map((event, index) => (
                  <li key={index} className="flex justify-center">
                    <div className="flex items-center gap-5">
                      <div className="bg-[#e2eaf2] text-[#274472] hover:bg-[#63B2F5] hover:text-white  px-3 py-3 rounded-sm text-center shadow-md text-sm ">
                        <p className="text-lg font-bold leading-none">{event.date}</p>
                        <p className="text-[10px] uppercase">{event.month}</p>
                      </div>
                      <div>
                        <p className="text-[#4174c5] font-light text-sm hover:cursor-pointer">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-400">{event.time}</p>
                        <p className="text-xs text-gray-400">{event.location}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">No upcoming events at this time.</p>
                <p className="text-gray-400 text-xs mt-2">Check back soon for new events!</p>
              </div>
            )}
            <button className="text-sm text-[#274472] hover:text-[#4174c5] w-full mt-6 hover:cursor-pointer">
              MORE EVENTS →
            </button>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4 w-full">
            {/* Facebook Link */}
            <a 
              href="https://www.facebook.com/profile.php?id=100067370376708" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#1877F2] to-[#0d6efd] hover:from-[#0d6efd] hover:to-[#1877F2] text-white p-6 rounded-lg shadow-lg w-full block transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-xl transition-all duration-300">Facebook</h3>
                    <p className="text-sm opacity-90 group-hover:opacity-100">Follow us on Facebook</p>
                  </div>
                </div>
                <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/lacd_official?igsh=MWw5anc2c2t4OHhmaw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#E4405F] to-[#C13584] hover:from-[#C13584] hover:to-[#E4405F] text-white p-6 rounded-lg shadow-lg w-full block transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-xl transition-all duration-300">Instagram</h3>
                    <p className="text-sm opacity-90 group-hover:opacity-100">Follow us on Instagram</p>
                  </div>
                </div>
                <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
