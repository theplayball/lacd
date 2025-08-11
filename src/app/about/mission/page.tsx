// app/about/mission/page.tsx
import React from "react";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Mission
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* About LACD */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 mb-16 border border-white/20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-8 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About LACD</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering the Lebanese-American community to restore Lebanon&apos;s democracy and strengthen US-Lebanon relations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500">
              <p className="text-lg text-gray-800 leading-relaxed">
                The <strong className="text-blue-700 font-semibold">Lebanese American Commission for Democracy (LACD)</strong> is powered by those in the Lebanese-American community who are dedicated to restoring Lebanon&apos;s democracy, stability, integrity, and sovereignty.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We strive to build awareness of Lebanon within the American government, media, and culture. The LACD is dedicated to providing policy makers, diplomats, and journalists with facts, scholarly research, and commentaries on issues relating to Lebanon and the Middle East.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fundamental to the LACD&apos;s activity is the indisputable notion that the Lebanese and American people share the same patriotic values; namely, cherishment of democracy, liberty, tolerance, coexistence, peace, and human rights, and therefore, the Lebanese and American people are natural partners.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The LACD strives to impact formulation and implementation of U.S. foreign policy in the Middle East, on the basis of safeguarding Lebanon as a strategic ally. The LACD believes that Lebanon is a vital element in overcoming terrorism and democratizing the Middle East.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  In this way, the LACD seeks to positively influence relations between Lebanon and the United States, solidify the bond between their respective peoples, and strengthen the long-term security of both countries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-12 md:p-16 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-6">Mission Statement</h2>
              <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-xl md:text-2xl leading-relaxed text-center font-medium">
                  The mission of the <strong className="text-yellow-300">Lebanese American Commission for Democracy (LACD)</strong> is to collaborate with the United States in order to bring greater stability and security to Lebanon, the Middle East, and America by promoting and enforcing the principles of <strong className="text-yellow-300">liberal democracy</strong>, <strong className="text-yellow-300">free markets</strong>, <strong className="text-yellow-300">peace</strong>, and the <strong className="text-yellow-300">rule of law</strong>, as well as the <strong className="text-yellow-300">unconditional respect for human rights</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
