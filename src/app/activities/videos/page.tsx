"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  {
    id: "lacd-boston-gala-2019",
    name: "LACD Boston Chapter Gala Dinner 2019",
    date: "2019",
    chapter: "LACD Boston",
    title: "LACD Boston Chapter Gala Dinner 2019",
    description: "Highlights from the LACD Boston Chapter Gala Dinner 2019",
    fullText: "The LACD Boston Chapter Gala Dinner 2019 was a memorable event bringing together the Lebanese-American community in Boston for an evening of celebration and networking.",
    videos: [
      {
        id: "gala-dinner-2019",
        title: "LACD Boston Chapter Gala Dinner 2019",
        description: "Highlights from the LACD Boston Chapter Gala Dinner 2019",
        videoFile: "/videos/1.mp4"
      }
    ],
  },
  {
    id: "elie-azar-speech-2019",
    name: "Elie Azar Speech - Diaspora Energy Conference 2019",
    date: "2019",
    chapter: "LACD Washington",
    title: "Elie Azar Speech - Diaspora Energy Conference 2019",
    description: "A speech by former LACD President Elie Azar from Washington during his participation at the head of a delegation in the 2019 Diaspora Energy Conference",
    fullText: "Former LACD President Elie Azar delivered a powerful speech during the 2019 Diaspora Energy Conference, representing the Lebanese-American community and discussing important issues affecting Lebanon and the diaspora.",
    videos: [
      {
        id: "elie-azar-speech",
        title: "Elie Azar Speech - Diaspora Energy Conference 2019",
        description: "A speech by former LACD President Elie Azar from Washington during his participation at the head of a delegation in the 2019 Diaspora Energy Conference",
        videoFile: "/videos/2.mp4"
      }
    ],
  },
  {
    id: "children-support-aoun-2019",
    name: "Children Support for President Michel Aoun - November 2019",
    date: "2019",
    chapter: "LACD Boston",
    title: "Children Support for President Michel Aoun - November 2019",
    description: "Children from the LACD Boston chapter express their support for President Michel Aoun on November 8, 2019",
    fullText: "Children from the LACD Boston chapter came together to express their support and solidarity for President Michel Aoun, demonstrating the community's commitment to Lebanon's leadership.",
    videos: [
      {
        id: "children-support-aoun",
        title: "Children Support for President Michel Aoun - November 2019",
        description: "Children from the LACD Boston chapter express their support for President Michel Aoun on November 8, 2019",
        videoFile: "/videos/3.mp4"
      }
    ],
  },
  {
    id: "georges-choueiry-interview-2020",
    name: "Georges Choueiry Interview - August 2020",
    date: "2020",
    chapter: "LACD Washington DC",
    title: "Georges Choueiry Interview - August 2020",
    description: "Former Coordinator of LACD Washington DC Chapter Mr Georges Choueiry interviews the mother of fallen Soldier Georges Bou Saab",
    fullText: "Former Coordinator of LACD Washington DC Chapter Mr Georges Choueiry conducted a touching interview with the mother of fallen Soldier Georges Bou Saab, honoring the sacrifice of Lebanese heroes.",
    videos: [
      {
        id: "choueiry-interview",
        title: "Georges Choueiry Interview - August 2020",
        description: "Former Coordinator of LACD Washington DC Chapter Mr Georges Choueiry interviews the mother of fallen Soldier Georges Bou Saab. 1 aug 2020",
        videoFile: "/videos/4.mp4"
      }
    ],
  },
  {
    id: "memorial-mass-october-2020",
    name: "Memorial Mass for October 13th - October 2020",
    date: "2020",
    chapter: "LACD Washington",
    title: "Memorial Mass for October 13th - October 2020",
    description: "A memorial Mass organized by the association for October 13th, held at Our Lady of Lebanon Church in Washington",
    fullText: "A solemn memorial Mass was organized by LACD for October 13th, held at Our Lady of Lebanon Church in Washington on October 14, 2020, honoring the memory of those who lost their lives.",
    videos: [
      {
        id: "memorial-mass",
        title: "Memorial Mass for October 13th - October 2020",
        description: "A memorial Mass organized by the association for October 13th, held at Our Lady of Lebanon Church in Washington, on October 14, 2020",
        videoFile: "/videos/5.mp4"
      }
    ],
  },
  {
    id: "maroun-souma-interview-2020",
    name: "Maroun Souma Interview - Beirut Port Explosion Aid - August 2020",
    date: "2020",
    chapter: "LACD Boston",
    title: "Maroun Souma Interview - Beirut Port Explosion Aid - August 2020",
    description: "An interview on the OTV program 'Hiwar Al-Yawm' with Maroun Souma from the LACD Boston chapter to discuss aid provided to Lebanon after the Beirut Port explosion",
    fullText: "Maroun Souma from the LACD Boston chapter appeared on OTV's 'Hiwar Al-Yawm' program to discuss the aid provided to Lebanon after the devastating Beirut Port explosion, showcasing the community's solidarity and support.",
    videos: [
      {
        id: "souma-interview",
        title: "Maroun Souma Interview - Beirut Port Explosion Aid - August 2020",
        description: "An interview on the OTV program 'Hiwar Al-Yawm' with Maroun Souma from the LACD Boston chapter to discuss aid provided to Lebanon after the Beirut Port explosion, on August 29, 2020",
        videoFile: "/videos/6.mp4"
      }
    ],
  },
  {
    id: "nathalie-homsi-womens-day-2019",
    name: "Nathalie Homsi - International Women's Day 2019",
    date: "2019",
    chapter: "LACD Boston",
    title: "Nathalie Homsi - International Women's Day 2019",
    description: "A former Coordinator of the LACD Boston chapter, Mrs. Nathalie Homsi, speaking about the event organized for International Women's Day 2019",
    fullText: "Former Coordinator of the LACD Boston chapter, Mrs. Nathalie Homsi, spoke about the special event organized for International Women's Day 2019, celebrating the achievements and contributions of women in the community.",
    videos: [
      {
        id: "homsi-womens-day",
        title: "Nathalie Homsi - International Women's Day 2019",
        description: "A former Coordinator of the LACD Boston chapter, Mrs. Nathalie Homsi, speaking about the event organized for International Women's Day 2019",
        videoFile: "/videos/7.mp4"
      }
    ],
  },
  {
    id: "covid-19-lebanon-2021",
    name: "LACD Faces COVID-19 - Lebanon Remains at Heart - June 2021",
    date: "2021",
    chapter: "LACD",
    title: "LACD Faces COVID-19 - Lebanon Remains at Heart - June 2021",
    description: "The association faces COVID-19 once again — Lebanon remains at the heart of events",
    fullText: "As the world continued to face the challenges of COVID-19, LACD remained committed to supporting Lebanon and its people, demonstrating that Lebanon remains at the heart of all our efforts and events.",
    videos: [
      {
        id: "covid-19-lebanon",
        title: "LACD Faces COVID-19 - Lebanon Remains at Heart - June 2021",
        description: "The association faces COVID-19 once again — Lebanon remains at the heart of events. June 16, 2021",
        videoFile: "/videos/8.mp4"
      }
    ],
  },
  {
    id: "new-england-aid-collection-2021",
    name: "New England Chapter Aid Collection - May 2021",
    date: "2021",
    chapter: "LACD New England",
    title: "New England Chapter Aid Collection - May 2021",
    description: "LACD New England Chapter organizes aid collection for needy families across Lebanon",
    fullText: "The LACD New England Chapter organized a comprehensive aid collection campaign for needy families across Lebanon, demonstrating the community's commitment to supporting those in need back home.",
    videos: [
      {
        id: "new-england-aid",
        title: "New England Chapter Aid Collection - May 2021",
        description: "LACD New England Chapter organizes aid collection for needy families across Lebanon. May 13, 2021",
        videoFile: "/videos/9.mp4"
      }
    ],
  },
  {
    id: "high-school-graduates-2021",
    name: "LACD High School Graduates - June 2021",
    date: "2021",
    chapter: "LACD",
    title: "LACD High School Graduates - June 2021",
    description: "LACD High School Graduates celebration",
    fullText: "LACD celebrated the achievements of high school graduates, recognizing their hard work and dedication while encouraging them to continue contributing to their communities.",
    videos: [
      {
        id: "high-school-graduates",
        title: "LACD High School Graduates - June 2021",
        description: "LACD High School Graduates 10juin 2021",
        videoFile: "/videos/10.mp4"
      }
    ],
  },
  {
    id: "new-york-picnic-2021",
    name: "LACD New York & New Jersey Chapter Annual Picnic 2021",
    date: "2021",
    chapter: "LACD New York & New Jersey",
    title: "LACD New York & New Jersey Chapter Annual Picnic 2021",
    description: "LACD New York & New Jersey Chapter Annual Picnic 2021",
    fullText: "The LACD New York & New Jersey Chapter held their annual picnic, bringing together community members for a day of fellowship, food, and celebration of Lebanese culture and heritage.",
    videos: [
      {
        id: "ny-picnic",
        title: "LACD New York & New Jersey Chapter Annual Picnic 2021",
        description: "LACD New York, New jersey Chapter – Annual Picnic 2021",
        videoFile: "/videos/11.mp4"
      }
    ],
  },
  {
    id: "mothers-day-greeting-2021",
    name: "Mother's Day Greeting from LACD Children - 2021",
    date: "2021",
    chapter: "LACD",
    title: "Mother's Day Greeting from LACD Children - 2021",
    description: "A Mother's Day greeting from LACD children to all mothers",
    fullText: "LACD children came together to create a special Mother's Day greeting, expressing their love and appreciation for all mothers in the community and beyond.",
    videos: [
      {
        id: "mothers-day-greeting",
        title: "Mother's Day Greeting from LACD Children - 2021",
        description: "A Mother's Day greeting from LACD children to all mothers",
        videoFile: "/videos/12.mp4"
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
              .sort((a, b) => parseInt(b.date) - parseInt(a.date))
              .map((activity) => (
              <Link
                href={`/activities/videos/${activity.id}`}
                key={activity.id}
                className="block group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-[1.02] h-full flex flex-col">
                  {/* Preview - Video Thumbnail */}
                  <div className="h-48 overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                    {activity.id === "nada-boustani-visit" ? (
                      <Image 
                        src="/videobag.jpeg" 
                        alt="Video Content" 
                        width={300}
                        height={192}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Video Content</span>
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
