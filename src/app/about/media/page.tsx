// app/about/media/page.tsx
import React from "react";

const mediaData = [
  {
    id: 1,
    title: "MP Nada Boustani's Tour in the United States of America",
    date: "May 2025",
    description:
      "Comprehensive coverage of MP Nada Boustani's visit to the United States, including her meetings with the Lebanese community in New England, Massachusetts, and Michigan. The tour was organized by LACD and featured various events and community engagements.",
    sources: [
      {
        name: "Tayyar.org",
        url: "https://www.tayyar.org/News/Lebanon/666849/",
        language: "Arabic",
      },
      {
        name: "National News Agency (NNA)",
        url: "https://nna-leb.gov.lb/ar/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9/783552/%D8%A7%D9%84%D9%86%D8%A7%D8%A6%D8%A8%D8%A9-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D8%AC%D9%88%D9%84%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D9%88%D9%84%D9%82%D8%A7%D8%A1-%D9%85%D8%B9-%D8%A7",
        language: "Arabic",
      },
      {
        name: "El Nashra",
        url: "https://www.elnashra.com/news/show/1725682/",
        language: "Arabic",
      },
      {
        name: "Tayyar.org - New England Visit",
        url: "https://www.tayyar.org/News/Lebanon/666849/%D8%A8%D8%A7%D9%84%D8%B5%D9%88%D8%B1--%D9%81%D9%8A-%D8%A5%D8%B7%D8%A7%D8%B1-%D8%AC%D9%88%D9%84%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9---%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%84%D9%82%D8%A7%D8%A1-%D8%A7%D9%84%D8%AC%D8%A7%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D9%84%D8%A8%D9%86%D8%A7%D9%86%D9%8A%D8%A9-%D9%81%D9%8A-%D9%86%D9%8A%D9%88-%D8%A5%D9%86%D8%AC%D9%84%D9%86%D8%AF--%D9%85%D8%A7%D8%B3%D8%A7%D8%AA%D8%B4%D9%88%D8%B3%D8%AA%D8%B3",
        language: "Arabic",
      },
      {
        name: "El Nashra - New England Coverage",
        url: "https://www.elnashra.com/news/show/1725682/%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%88%D8%A7%D8%B5%D9%84%D8%AA-%D9%84%D9%82%D8%A7%D8%A1-%D8%A7%D9%84%D8%AC%D8%A7%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D9%84%D8%A8%D9%86%D8%A7%D9%86%D9%8A%D8%A9-%D9%86%D9%8A%D9%88-%D8%A5%D9%86%D8%AC%D9%84%D9%86%D8%AF-%D9%85",
        language: "Arabic",
      },
      {
        name: "Lebanon Files",
        url: "https://www.lebanonfiles.com/articles/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D9%85%D8%AD%D9%84%D9%8A%D9%91%D8%A9/%D8%A8%D8%A5%D8%B7%D8%A7%D8%B1-%D8%AC%D9%88%D9%84%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D8%AA%D9%88%D8%A7%D8%B5/",
        language: "Arabic",
      },
      {
        name: "Dearborn.org - Michigan Visit",
        url: "https://dearborn.org/ar/preview/photos-from-beirut-to-michigan-honored-to-host-mp-nada-boustani-in-michigan-68681",
        language: "Arabic",
      },
      {
        name: "Raise Yasi",
        url: "https://raiseyasi.com/%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%85%D9%86-%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D8%A7-%D9%86%D9%86%D8%AA%D8%B8%D8%B1-%D8%A7%D9%82%D8%AA%D8%B1%D8%A7%D8%B9-%D8%A7%D9%84%D9%85%D9%86%D8%AA/",
        language: "Arabic",
      },
      {
        name: "SLA News",
        url: "https://www.sla-news.com/251960",
        language: "Arabic",
      },
      {
        name: "Tayyar.org - Florida Dinner",
        url: "https://www.tayyar.org/News/Lebanon/667526/%D8%B9%D8%B4%D8%A7%D8%A1-%D8%B9%D9%84%D9%89-%D8%B4%D8%B1%D9%81-%D8%A7%D9%84%D9%86%D8%A7%D8%A6%D8%A8-%D9%86%D8%AF%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%85%D9%86-%D8%AA%D9%86%D8%B8%D9%8A%D9%85-LACD--%D9%81%D8%B1%D8%B9-%D9%81%D9%84%D9%88%D8%B1%D9%8A%D8%AF%D8%A7",
        language: "Arabic",
      },
      {
        name: "El Nashra - Michigan Energy Discussion",
        url: "https://www.elnashra.com/news/show/1725989/%D9%86%D8%AF%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%D9%8A-%D9%85%D9%8A%D8%B4%D9%8A%D8%BA%D8%A7%D9%86-%D8%B3%D8%B9%D8%B1-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D9%84%D8%A8%D9%86%D8%A7%D9%86-%D8%A7%D9%84%D8%A7%D8%BA%D9%84%D9%89-%D8%B9%D8%A7%D9%84%D9%85%D9%8A",
        language: "Arabic",
      },
    ],
  },
];







export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            LACD in the Media
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our media presence and coverage of LACD activities and initiatives
          </p>
        </div>

        {/* Media Coverage Section */}
        <div className="space-y-8">
          {mediaData.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{item.date}</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Media Sources */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Media Coverage Sources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {item.sources.map((source, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm leading-tight mb-1">{source.name}</h4>
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                              {source.language}
                            </span>
                          </div>
                        </div>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-xs font-medium flex-shrink-0 ml-2"
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

    
      </main>
    </div>
  );
}
