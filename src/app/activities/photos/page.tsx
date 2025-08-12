// app/activities/photos/page.tsx
"use client";
import React from "react";
import Link from "next/link";

const activityData = [
  {
    id: "activity1",
    name: "Inauguration of Saint Charbel's Chapel",
    date: "December 15, 2023",
    chapter: "California Chapter",
    title: "Inauguration of Saint Charbel's Chapel",
    description: "LACD Participates in the Inauguration of Saint Charbel's Chapel in Murrieta, California",
    fullText: `The Los Angeles Chapter of the Lebanese American Commission for Democracy (LACD) proudly participated in the inauguration of the Hermitage and Statue of Saint Charbel at the Convent of the Sisters of the Holy Family in Murrieta, California.

The event started with a Divine Liturgy held at the convent's church, attended by Maronite priests across the state. Father Fadi Bazzi presided over the Mass, emphasizing Saint Charbel's holiness and significance during his homily. He reflected on the Lebanese deep spiritual connection with Saint Charbel, noting that hìs miracles have transcended Lebanon and reached all over the globe.

Following the liturgical celebration, a procession with Saint Charbel's relics took place, concluding in the unveiling and blessing of his statue. Attendees then gathered at the newly completed Saint Charbel's Chapel-referred to as "Saint Charbel's Hermitage"— for its official dedication.

Father Bazzi expressed his heartfelt appreciation to Mr. Wadih Daher for his role in creating the chapel and the statue of Saint Charbel.

The celebration concluded with a festive luncheon in the convent courtyard, attended by more than 300 members of the Lebanese American community from the greater Los Angeles area.

This memorable event is a testament to the enduring faith and unity of the Lebanese diaspora in the United States and their devotion to Saint Charbel, whose legacy continues to inspire people worldwide.`,
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
    name: "Fundraising Dinner for AFNDU",
    date: "November 20, 2023",
    chapter: "California Chapter",
    title: "LACD Participates in Fundraising Dinner for AFNDU",
    description: "LACD Participates in Fundraising Dinner for AFNDU",
    fullText: `The Los Angeles Chapter of the Lebanese American Commission for Democracy (LACD) proudly participated in a fundraising dinner organized by Mr. Wadih Daher in support of the Association of Friends of Notre Dame University (AFNDU) in the United States.

The event took place in Glendale, California, and was attended by several prominent figures, including the President of Notre Dame University-Louaize (NDU), Father Bechara Khoury; Armenian Catholic Bishop Parsegh Baghdassarian; and the Consul General of Lebanon in Los Angeles, Mr. Bachir Sarkis.

This evening served as a gathering of the Lebanese diaspora and academic supporters, reinforcing the community's commitment to advancing higher education opportunities through global support for NDU's mission.`,
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
    id: "activity3",
    name: "Dinner Honoring Major General Hassan Choucair",
    date: "October 10, 2023",
    chapter: "Michigan Chapter",
    title: "LACD Participates in Dinner Honoring Major General Hassan Choucair",
    description: "LACD - Michigan Chapter Participates in Dinner Honoring Major General Hassan Choucair",
    fullText: `The Michigan Chapter of the Lebanese American Commission for Democracy (LACD) proudly participated in a dinner organized by Major General Hassan Choucair's friends to celebrate his recent appointment as the Lebanese General Security Director.

The event was held to honor General Choucair's distinguished service and new leadership role. Religious leaders and a large gathering of members from the Lebanese community in Michigan attended, reflecting widespread support and appreciation for his dedication to national service.

The participation of LACD underscores its ongoing commitment to recognizing Lebanese leadership and fostering unity within the diaspora.`,
    photos: [
      "/activity3/1.jpg",
      "/activity3/2.jpg",
    ],
  },
  {
    id: "activity4",
    name: "St. Barbara Association Fundraising Dinner",
    date: "September 25, 2023",
    chapter: "Los Angeles Chapter",
    title: "LACD-Los Angeles Chapter participates in the fundraising dinner organized by St. Barbara association.",
    description: "LACD-Los Angeles Chapter participates in the fundraising dinner organized by St. Barbara association.",
    fullText: `LACD-Los Angeles Chapter participates in the fundraising dinner organized by St. Barbara association.`,
    photos: [
      "/activity4/1.jpg",
      "/activity4/2.jpg",
      "/activity4/3.jpg",
      "/activity4/4.jpg",
      "/activity4/5.jpg",
    ],
  },
  {
    id: "general",
    name: "General LACD Activities",
    date: "Ongoing",
    chapter: "General LACD",
    title: "General LACD Activities and Events",
    description: "Various activities and events across all LACD chapters",
    fullText: `The Lebanese American Commission for Democracy (LACD) is a dynamic organization that engages in a wide range of activities and initiatives across all chapters to promote democracy, civic engagement, and community building.

Our comprehensive activities include:

• Community Meetings & Forums: Regular gatherings that bring together community members to discuss important issues, share ideas, and strengthen bonds within the Lebanese American community.

• Educational Seminars & Workshops: Informative sessions covering topics such as civic engagement, democratic processes, cultural heritage, and community leadership development.

• Cultural Celebrations & Events: Festivals, cultural performances, and heritage celebrations that showcase Lebanese culture and traditions while fostering cross-cultural understanding.

• Fundraising Events & Galas: Annual galas, charity dinners, and fundraising initiatives that support our programs and community projects.

• Collaborative Initiatives: Partnerships with other organizations, government agencies, and community groups to advance our mission and expand our impact.

• Youth Programs & Leadership Development: Special initiatives focused on engaging young members of the community and developing future leaders.

• Advocacy & Outreach: Efforts to represent the interests of the Lebanese American community and promote democratic values at local, state, and national levels.

• Networking & Professional Development: Events that connect community members professionally and provide opportunities for career growth and business development.

Through these diverse activities, LACD strengthens the bonds within our community while advancing our mission of promoting democracy, civic participation, and cultural preservation. Our events bring together people from all walks of life, creating a vibrant and inclusive community that celebrates both our Lebanese heritage and our American democratic values.`,
    photos: [],
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
