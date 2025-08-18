"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Subcategory {
  id: string;
  name: string;
  description: string;
  photos: string[];
}

interface BaseActivity {
  id: string;
  name: string;
  date?: string;
  chapter?: string;
  description: string;
  fullText: string;
}

interface ActivityWithSubcategories extends BaseActivity {
  subcategories: Subcategory[];
  photos?: never;
}

interface ActivityWithPhotos extends BaseActivity {
  photos: string[];
  subcategories?: never;
}

type Activity = ActivityWithSubcategories | ActivityWithPhotos;

const activityData: Record<string, Activity> = {
  "saint-charbel-chapel": {
    id: "saint-charbel-chapel",
    name: "Inauguration of Saint Charbel's Chapel",
    date: "December 15, 2023",
    chapter: "California Chapter",
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
  "afndu-fundraising": {
    id: "afndu-fundraising",
    name: "Fundraising Dinner for AFNDU",
    date: "November 20, 2023",
    chapter: "California Chapter",
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
  "major-general-choucair": {
    id: "major-general-choucair",
    name: "Dinner Honoring Major General Hassan Choucair",
    date: "October 10, 2023",
    chapter: "Michigan Chapter",
    description: "LACD - Michigan Chapter Participates in Dinner Honoring Major General Hassan Choucair",
    fullText: `The Michigan Chapter of the Lebanese American Commission for Democracy (LACD) proudly participated in a dinner organized by Major General Hassan Choucair's friends to celebrate his recent appointment as the Lebanese General Security Director.

The event was held to honor General Choucair's distinguished service and new leadership role. Religious leaders and a large gathering of members from the Lebanese community in Michigan attended, reflecting widespread support and appreciation for his dedication to national service.

The participation of LACD underscores its ongoing commitment to recognizing Lebanese leadership and fostering unity within the diaspora.`,
    photos: [
      "/activity3/1.jpg",
      "/activity3/2.jpg",
    ],
  },
  "st-barbara-association": {
    id: "st-barbara-association",
    name: "St. Barbara Association Fundraising Dinner",
    date: "September 25, 2023",
    chapter: "Los Angeles Chapter",
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
  "general": {
    id: "general",
    name: "General LACD Activities and Events",
    date: "Ongoing",
    chapter: "General LACD",
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
};

// Type guard functions
function hasSubcategories(activity: Activity): activity is ActivityWithSubcategories {
  return 'subcategories' in activity && activity.subcategories !== undefined;
}

function hasPhotos(activity: Activity): activity is ActivityWithPhotos {
  return 'photos' in activity && activity.photos !== undefined;
}

export default function ActivityPage() {
  const params = useParams();
  const activityId = params.id as string;
  const activity = activityData[activityId];

  if (!activity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Activity Not Found</h1>
            <p className="text-gray-600 mb-8">The requested activity could not be found.</p>
            <Link href="/activities/photos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              Back to Photos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/activities/photos" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Photos
          </Link>
        </div>

        {/* Activity Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{activity.name}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            {activity.date && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{activity.date}</span>
              </div>
            )}
            {activity.chapter && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{activity.chapter}</span>
              </div>
            )}
          </div>

          <p className="text-lg text-gray-700 mb-6">{activity.description}</p>
          
          {activity.fullText && (
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">{activity.fullText}</p>
            </div>
          )}
        </div>

        {/* Content */}
        {hasSubcategories(activity) ? (
          // Show subcategories for multi-part events
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {activity.subcategories.map((subcategory: Subcategory) => (
                <div key={subcategory.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{subcategory.name}</h3>
                    <p className="text-gray-600 mb-4">{subcategory.description}</p>
                    
                    {subcategory.photos && subcategory.photos.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {subcategory.photos.slice(0, 3).map((photo: string, index: number) => (
                          <img
                            key={index}
                            src={photo}
                            alt={`${subcategory.name} photo ${index + 1}`}
                            className="w-full h-20 object-cover rounded-md"
                          />
                        ))}
                        {subcategory.photos.length > 3 && (
                          <div className="w-full h-20 bg-gray-200 rounded-md flex items-center justify-center">
                            <span className="text-sm text-gray-500">+{subcategory.photos.length - 3} more</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Show photos for regular events
          hasPhotos(activity) && activity.photos.length > 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {activity.photos.map((photo: string, index: number) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={photo}
                      alt={`${activity.name} photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Photos Available</h3>
              <p className="text-gray-600">Photos for this activity will be added soon.</p>
            </div>
          )
        )}
      </main>
    </div>
  );
}
