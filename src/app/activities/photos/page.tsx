// app/activities/photos/page.tsx
"use client";
import React, { useState, MouseEventHandler } from "react";
import Image from "next/image";

interface Photo {
  url: string;
  caption?: string;
}

interface BaseActivity {
  id: string;
  name: string;
  type: string;
  description?: string;
  photos?: Photo[];
  date?: string;
  headerImage?: string;
}

interface SubSubActivity extends BaseActivity {
  type: string;
}

interface SubActivity extends BaseActivity {
  subSubActivities?: SubSubActivity[];
}

interface MainActivity extends BaseActivity {
  subActivities?: SubActivity[];
}

interface Chapter extends BaseActivity {
  activities: BaseActivity[];
}

interface PhotoGalleryProps {
  photos?: Photo[];
  title: string;
}

const lacdPhotosData: { mainActivities: MainActivity[] } = {
  mainActivities: [
    {
      id: "nada-boustani-tour",
      name: "MP Nada Boustani's Tour in the United States – May 24 to 29, 2025",
      type: "main-activity1",
      description: "A comprehensive tour across multiple states in the United States",
      headerImage: "/activity18/1.jpeg",
      subActivities: [
        {
          id: "new-york-nj",
          name: "Visit of MP Nada Boustani to New York – New Jersey on May 24, 2025",
          type: "subactivity1",
          description: "As part of the tour organized by LACD for MP Nada Boustani, the second stop took place in the state of New Jersey, hosted at the Assi family's residence, where a luncheon was held in her honor with the participation of several members of LACD – New Jersey.",
          photos: Array.from({ length: 7 }, (_, i) => ({
            url: `/activity5/${i + 1}.jpeg`
          })),
          headerImage: "/activity5/1.jpeg"
        },
        {
          id: "boston",
          name: "Visit of MP Nada Boustani to Boston, Massachusetts on May 25, 2025",
          type: "subactivity2",
          description: "Visit to Boston including religious and community events",
          headerImage: "/activity7/3.jpeg",
          subSubActivities: [
            {
              id: "divine-liturgy",
              name: "Participation in the Divine Liturgy at the Annunciation Melkite Catholic Cathedral",
              type: "subsubactivity1",
              description: "MP Nada Boustani participated in the Divine Liturgy celebrated by Bishop François Beyrouti, Eparch of Newton for the Melkite Greek Catholics, at the Annunciation Melkite Catholic Cathedral in Boston.",
              photos: Array.from({ length: 13 }, (_, i) => ({
                url: `/activity6/${i + 1}.jpeg`
              })),
              headerImage: "/activity6/1.jpeg"
            },
            {
              id: "boston-lunch",
              name: "Lunch reception organized by LACD Boston chapter in honor of MP Nada Boustani",
              type: "subsubactivity2",
              description: "The LACD Boston chapter organized a lunch in honor of MP Nada Boustani, attended by Bishop François Beyrouti and several members of LACD in Boston.",
              photos: Array.from({ length: 11 }, (_, i) => ({
                url: `/activity7/${i + 1}.jpeg`
              })),
              headerImage: "/activity7/9.jpeg"
            }
          ]
        },
        {
          id: "ohio",
          name: "Visit of MP Nada Boustani to Ohio – May 26, 2025",
          type: "subactivity3",
          description: "Official meetings and community events in Ohio",
          headerImage: "/activity9/9.jpeg",
          subSubActivities: [
            {
              id: "consul-meeting",
              name: "Meeting between MP Nada Boustani and Honorary Consul Antoni Asher at the Honorary Lebanese Consulate in Ohio",
              type: "subsubactivity1",
              description: "MP Nada Boustani visited the Honorary Lebanese Consulate, where she met with Honorary Consul Anthony Asher, in the presence of LACD Ohio representative Jad Badran.",
              photos: Array.from({ length: 1 }, (_, i) => ({
                url: `/activity8/${i + 1}.jpeg`
              })),
              headerImage: "/activity8/1.jpeg"
            },
            {
              id: "ohio-lunch",
              name: "Lunch reception organized by LACD Ohio chapter in honor of MP Nada Boustani in Cleveland, Ohio",
              type: "subsubactivity2",
              description: "The LACD Ohio chapter hosted a luncheon in honor of MP Nada Boustani, attended by members of the Lebanese community in Cleveland, Ohio.",
              photos: Array.from({ length: 15 }, (_, i) => ({
                url: `/activity9/${i + 1}.jpeg`
              })),
              headerImage: "/activity9/1.jpeg"
            }
          ]
        },
        {
          id: "michigan",
          name: "Visit of MP Nada Boustani to Michigan – May 27, 2025",
          type: "subactivity4",
          description: "Comprehensive visit to Michigan's religious, diplomatic, and community institutions",
          headerImage: "/activity13/5.jpeg",
          subSubActivities: [
            {
              id: "st-sharbel",
              name: "Visit to St. Sharbel Church in Michigan",
              type: "subsubactivity1",
              description: "",
              photos: Array.from({ length: 8 }, (_, i) => ({
                url: `/activity10/${i + 1}.jpeg`
              })),
              headerImage: "/activity10/1.jpeg"
            },
            {
              id: "islamic-center",
              name: "Visit to the Islamic Center in Michigan",
              type: "subsubactivity3",
              description: "MP Nada Boustani visited the Islamic Center in Michigan, where she met with the center's president, Sheikh Ahmad Hammoud.",
              photos: Array.from({ length: 5 }, (_, i) => ({
                url: `/activity11/${i + 1}.jpeg`
              })),
              headerImage: "/activity11/1.jpeg"
            },
            {
              id: "mena-chamber",
              name: "Extended dialogue with MP Nada Boustani hosted by The MENA American Chamber of Commerce",
              type: "subsubactivity5",
              description: "During a broad discussion at the American Chamber of Commerce MENA in Michigan, MP Nada Boustani discussed various topics including energy and infrastructure.",
              photos: Array.from({ length: 14 }, (_, i) => ({
                url: `/activity14/${i + 1}.jpeg`
              })),
              headerImage: "/activity14/1.jpeg"
            },
            {
              id: "consul-kabalan",
              name: "Meeting with Consul Bilal Kabalan at the Lebanese Consulate General in Michigan",
              type: "subsubactivity2",
              description: "MP Nada Boustani visited the building of the Consulate General in Michigan, where she was received by Ambassador Bilal Kabalan.",
              photos: Array.from({ length: 8 }, (_, i) => ({
                url: `/activity13/${i + 1}.jpeg`
              })),
              headerImage: "/activity13/7.jpeg"
            },
            {
              id: "arab-chamber",
              name: "Discussion session with MP Nada Boustani at the American Arab Chamber of Commerce",
              type: "subsubactivity4",
              description: "The American Arab Chamber of Commerce in Michigan hosted MP Nada Boustani.",
              photos: Array.from({ length: 8 }, (_, i) => ({
                url: `/activity12/${i + 1}.jpeg`
              })),
              headerImage: "/activity12/6.jpeg"
            },
            {
              id: "michigan-dinner",
              name: "Dinner in honor of MP Nada Boustani organized by LACD Michigan chapter",
              type: "subsubactivity6",
              description: "LACD Michigan Chapter organized a dinner attended by MP Nada Boustani.",
              photos: Array.from({ length: 8 }, (_, i) => ({
                url: `/activity15/${i + 1}.jpeg`
              })),
              headerImage: "/activity15/2.jpeg"
            }
          ]
        },
        {
          id: "florida",
          name: "Visit of MP Nada Boustani to the state of Florida – May 28, 2025",
          type: "subactivity5",
          description: "Official and community events in Florida",
          headerImage: "/activity17/25.jpeg",
          subSubActivities: [
            {
              id: "consul-bahri",
              name: "Honorary plaque presented by Honorary Consul Nabil Bahri to MP Nada Boustani during a breakfast held in her honor in Florida",
              type: "subsubactivity1",
              description: "An honorary plaque was presented by Honorary Consul Nabil Bahri during a brunch held in honor of MP Nada Boustani in Florida.",
              photos: Array.from({ length: 2 }, (_, i) => ({
                url: `/activity16/${i + 1}.jpeg`
              })),
              headerImage: "/activity16/2.jpeg"
            },
            {
              id: "florida-dinner",
              name: "Dinner event organized by LACD Florida chapter in honor of MP Nada Boustani",
              type: "subsubactivity2",
              description: "The LACD Florida chapter organized a dinner attended by MP Nada Boustani and Consul Nabil Bahri. At the conclusion of her U.S. tour, MP Nada Boustani was presented with an honorary plaque by the Lebanese American Community Development (LACD) in recognition of her significant contributions.",
              photos: Array.from({ length: 32 }, (_, i) => ({
                url: i < 31 ? `/activity17/${i + 1}.jpeg` : `/activity18/1.jpeg`
              })),
              headerImage: "/activity17/15.jpeg"
            }
          ]
        }
      ],
    },
    
    {
      id: "aoun-meeting",
      name: "Meeting between an LACD delegation and President General Michel Aoun in Rabieh – Beirut on August 5, 2025",
      type: "main-activity3",
      description: "A special meeting was held between the LACD delegation from all its U.S. branches and President Michel Aoun in Rabieh.",
      photos: Array.from({ length: 28 }, (_, i) => ({
        url: `/activity20/${i + 1}.jpeg`
      })),
      headerImage: "/activity20/27.jpeg"
    },

   {
  id: "lacd-annual-convention-boston-2025",
  name: "LACD Annual Convention – Boston – October 11, 2025",
  type: "main-activity",
  description: `The Lebanese American Commission for Democracy (LACD) held its annual conference in Boston, USA, on October 11, 2025. The event was attended by Members of Parliament Georges Atallah and Nada Boustani. Discussions focused on the Lebanese electoral law and the importance of voter registration for Lebanese expats.

The conference featured speeches from LACD USA Coordinator Georges Moussa, a presentation of the association’s new website by member Mr. Nagy Khawaja, and a talk by activist Fadi Saad on how to use social media effectively during the parliamentary elections.

MPs Nada Boustani and Georges Atallah also addressed key national issues, including electricity and water infrastructure, the Syrian refugee crisis, and banking challenges related to depositors’ funds.`,
  photos: Array.from({ length: 28 }, (_, i) => ({
    url: `/activity21/${i + 1}.jpg`,
  })),
  headerImage: "/activity21/1.jpg", // ✅ COVER IMAGE
},

{
  id: "lacd-annual-dinner-boston-2025",
  name: "LACD Annual Dinner – Boston – October 11, 2025",
  type: "main-activity",
  description: `LACD hosted its annual gala dinner in Boston, USA, with the participation of MPs Nada Boustani and Georges Atallah, along with many members of the Lebanese-American community.

The evening began with the Lebanese and American national anthems, followed by welcoming remarks from Boston Coordinator Sheikh Wissam Tarabay. Speeches were then delivered by LACD Coordinator Georges Moussa and MP Georges Atallah. The dinner concluded with a message from President General Michel Aoun addressed to the Lebanese diaspora in the United States.

During the evening, Claudine Khoury was announced as the recipient of the $2,000 academic scholarship sponsored by Maurice and Juliette Assi.`,
  photos: Array.from({ length: 28 }, (_, i) => ({
    url: `/activity22/${i + 1}.jpeg`,
  })),
  headerImage: "/activity22/1.jpeg", // ✅ COVER IMAGE (FIRST PHOTO)
},


{
  id: "october-13-memorial-mass-2025",
  name: "Memorial Mass of October 13 – St. George Maronite Church – October 12, 2025",
  type: "main-activity",
  description: `LACD commemorated the October 13 anniversary with a Divine Liturgy held at St. George Maronite Church in Boston, presided over by the parish priest, Father Tony Saab.

In his homily, Father Saab emphasized the importance of praying for the souls of the fallen martyrs and for Lebanon, a country that has long endured hardship, with hope that it may emerge from its ongoing crisis.

Following the liturgy, a luncheon was held in the church hall, attended by MPs Nada Boustani and Georges Atallah, along with members of the Lebanese-American community in the United States.`,
  photos: Array.from({ length: 32 }, (_, i) => ({
    url: `/activity23/${i + 1}.jpeg`,
  })),
  headerImage: "/activity23/1.jpeg", // ✅ COVER IMAGE (FIRST PHOTO)
},



    {
  id: "nada-boustani-us-congress-meetings-2025",
  name: "MP Nada Boustani Meets with Members of the US Congress in Washington",
  type: "main-activity",
  description: `During her visit to Washington, MP Nada Boustani met with U.S. Congress members Debbie Dingell and Greg Stanton to discuss the current situation in Lebanon.

Boustani also attended a reception hosted by the Lebanese Embassy in Washington, D.C.

Her visit to the United States was part of a conference organized by the Lebanese American Commission for Democracy (LACD), in which she participated, along with several other engagements and activities held in the city of Boston.`,
  photos: Array.from({ length: 24 }, (_, i) => ({
    url: `/activity24/${i + 1}.jpeg`,
  })),
  headerImage: "/activity24/1.jpeg", // ✅ COVER IMAGE (FIRST PHOTO)
},


  ]
};

const chaptersData: Chapter[] = [
  {
    id: "los-angeles-chapter",
    name: "Los Angeles Chapter",
    type: "chapter",
    description: "Activities and events from the Los Angeles Chapter",
    activities: [
      {
        id: "louaize-fundraising",
        name: "Participation in the fundraising dinner of the Friends of the Louaize Association in California",
        date: "2025",
        description: "The Los Angeles Chapter of the Lebanese American Commission for Democracy (LACD) proudly participated in a fundraising dinner organized by Mr. Wadih Daher in support of the Association of Friends of Notre Dame University (AFNDU) in the United States.",
        type: "chapter-activity",
        photos: Array.from({ length: 9 }, (_, i) => ({
          url: `/activity2/${i + 1}.jpg`
        })),
        headerImage: "/activity2/1.jpg"
      },
      {
        id: "st-charbel-chapel",
        name: "Inauguration of St. Charbel Chapel in Temecula, California",
        date: "2025",
        description: "The Los Angeles Chapter of the Lebanese American Commission for Democracy (LACD) proudly participated in the inauguration of the Hermitage and Statue of Saint Charbel at the Convent of the Sisters of the Holy Family in Murrieta, California.",
        type: "chapter-activity",
        photos: Array.from({ length: 14 }, (_, i) => ({
          url: `/activity1/${i + 1}.jpg`
        })),
        headerImage: "/activity1/1.jpg"
      },
      {
        id: "st-barbara-fundraising",
        name: "Participation in the fundraising dinner organized by St. Barbara Association",
        date: "2025",
        description: "LACD-Los Angeles Chapter participates in the fundraising dinner organized by St. Barbara association.",
        type: "chapter-activity",
        photos: Array.from({ length: 5 }, (_, i) => ({
          url: `/activity4/${i + 1}.jpg`
        })),
        headerImage: "/activity4/1.jpg"
      }
    ],
    headerImage: "/activity1/1.jpg"
  },

  {
  id: "michigan-chapter",
  name: "Michigan Chapter",
  type: "chapter",
  description: "Activities and events from the Michigan Chapter",
  activities: [
    {
      id: "general-shaqir-dinner",
      name: "Participation in a dinner held by the Friends of General Hassan Shaqir",
      date: "2025",
      description:
        "The Michigan Chapter of the Lebanese American Commission for Democracy (LACD) proudly participated in a dinner organized by Major General Hassan Choucair's friends to celebrate his recent appointment as the Lebanese General Security Director.",
      type: "chapter-activity",
      photos: Array.from({ length: 2 }, (_, i) => ({
        url: `/activity3/${i + 1}.jpg`
      })),
      headerImage: "/activity3/1.jpg"
    },

    //  ACTIVITY 25 
    {
      id: "lebanon-independence-82-michigan",
      name:
        "Participation in Lebanon’s 82nd Independence Day – Michigan",
      date: "2025",
      description:
        "A delegation from LACD – Michigan Chapter participated in the program of the 82nd Independence Day celebration of Lebanon, organized by the Lebanese Consulate in Detroit, Michigan. The event was attended by Consul General Ibrahim Charara and Dearborn Mayor Mr. Abdullah Hammoud.",
      type: "chapter-activity",
      photos: Array.from({ length: 9 }, (_, i) => ({
        url: `/activity25/${i + 1}.jpeg`
      })),
      headerImage: "/activity25/3.jpeg" //  3rd photo as cover
    }
  ],
  headerImage: "/activity3/1.jpg"
}
  
];

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, title }) => {
  if (!photos || photos.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">No Photos Available</h3>
        <p className="text-gray-600">Photos for this activity will be added soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={photo.url}
              alt={`${title} photo ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                console.error(`Failed to load image: ${photo.url}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};



export default function PhotosPage() {
  const [view, setView] = useState<'main' | 'chapters' | 'activity'>('main');
  const [selectedMainActivity, setSelectedMainActivity] = useState<MainActivity | null>(null);
  const [selectedSubActivity, setSelectedSubActivity] = useState<SubActivity | null>(null);
  const [selectedSubSubActivity, setSelectedSubSubActivity] = useState<SubSubActivity | null>(null);
  const [selectedChapterActivity, setSelectedChapterActivity] = useState<BaseActivity | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const renderActivityCard = (
    activity: BaseActivity | MainActivity | SubActivity | SubSubActivity | Chapter,
    onClick: MouseEventHandler<HTMLDivElement> | undefined
  ) => (
    <div
      key={activity.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="h-40 relative overflow-hidden">
        {activity.headerImage ? (
          <Image
            src={activity.headerImage}
            alt={`${activity.name} header`}
            width={400}
            height={160}
            className="w-full h-full object-contain bg-gray-100"
            onError={(e) => {
              console.error(`Failed to load image: ${activity.headerImage}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-[#274472] to-[#1e3a5f] flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{activity.name}</h3>
        {activity.date && (
          <p className="text-sm text-gray-500 mb-2">{activity.date}</p>
        )}
        {activity.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{activity.description}</p>
        )}

      </div>
    </div>
  );

  const renderContent = () => {
    if (selectedSubSubActivity) {
      return (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedSubSubActivity.name}</h3>
            {selectedSubSubActivity.description && (
              <div className="prose max-w-none mb-6">
                {selectedSubSubActivity.description.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
          <PhotoGallery 
            photos={selectedSubSubActivity.photos} 
            title="Event Photos" 
          />
        </div>
      );
    }

    if (selectedSubActivity) {
      if (selectedSubActivity.subSubActivities && selectedSubActivity.subSubActivities.length > 0) {
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedSubActivity.name}</h2>
              {selectedSubActivity.description && (
                <p className="text-gray-600 text-lg">{selectedSubActivity.description}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedSubActivity.subSubActivities.map((subSubActivity: SubSubActivity) => (
                renderActivityCard(
                  subSubActivity,
                  () => setSelectedSubSubActivity(subSubActivity)
                )
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedSubActivity.name}</h3>
              {selectedSubActivity.date && (
                <p className="text-sm text-gray-500 mb-4">{selectedSubActivity.date}</p>
              )}
              {selectedSubActivity.description && (
                <div className="prose max-w-none mb-6">
                  {selectedSubActivity.description.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            <PhotoGallery 
              photos={selectedSubActivity.photos} 
              title="Event Photos" 
            />
          </div>
        );
      }
    }

    if (selectedMainActivity) {
      if (selectedMainActivity.subActivities && selectedMainActivity.subActivities.length > 0) {
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedMainActivity.name}</h2>
              {selectedMainActivity.description && (
                <p className="text-gray-600 text-lg">{selectedMainActivity.description}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedMainActivity.subActivities.map((subActivity: SubActivity) => (
                renderActivityCard(
                  subActivity,
                  () => setSelectedSubActivity(subActivity)
                )
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedMainActivity.name}</h3>
              {selectedMainActivity.description && (
                <div className="prose max-w-none mb-6">
                  {selectedMainActivity.description.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            <PhotoGallery 
              photos={selectedMainActivity.photos} 
              title="Event Photos" 
            />
          </div>
        );
      }
    }

    if (selectedChapterActivity) {
      return (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedChapterActivity.name}</h3>
            {selectedChapterActivity.date && (
              <p className="text-sm text-gray-500 mb-4">{selectedChapterActivity.date}</p>
            )}
            {selectedChapterActivity.description && (
              <div className="prose max-w-none mb-6">
                <p className="text-gray-600">{selectedChapterActivity.description}</p>
              </div>
            )}
          </div>
          <PhotoGallery 
            photos={selectedChapterActivity.photos} 
            title="Event Photos" 
          />
        </div>
      );
    }

    // Handle when a chapter is selected (showing its activities)
    if (view === 'chapters' && !selectedChapterActivity) {
      return null; // This will show the chapters view instead
    }

    return null;
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            LACD Photos Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of activities and events that bring our community together
          </p>
        </div>

        {/* Back Button - Only show when viewing specific content */}
        {(selectedSubSubActivity || selectedSubActivity || selectedMainActivity || selectedChapter || selectedChapterActivity) && (
          <div className="mb-6">
            <button
              onClick={() => {
                if (selectedSubSubActivity) {
                  setSelectedSubSubActivity(null);
                } else if (selectedSubActivity) {
                  setSelectedSubActivity(null);
                } else if (selectedMainActivity) {
                  setSelectedMainActivity(null);
                } else if (selectedChapterActivity) {
                  setSelectedChapterActivity(null);
                } else if (selectedChapter) {
                  setSelectedChapter(null);
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200 border border-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        )}



        {/* Main View */}
        {view === 'main' && !selectedMainActivity && !selectedSubActivity && !selectedSubSubActivity && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* LACD Photos Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => setView('activity')}
            >
                          <div className="h-48 bg-gradient-to-br from-[#274472] to-[#1e3a5f] flex items-center justify-center">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">LACD Photos</h2>
                <p className="text-gray-600 mb-6">
                  Explore general activities and events organized by LACD
                </p>
                <div className="flex items-center text-[#274472] font-medium">
                  <span> View all activities</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* LACD Chapters Card */}
            <div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => setView('chapters')}
            >
                          <div className="h-48 bg-gradient-to-br from-[#274472] to-[#1e3a5f] flex items-center justify-center">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">LACD Chapters Photos</h2>
                <p className="text-gray-600 mb-6">
                  Browse activities and events organized by specific LACD chapters
                </p>
                <div className="flex items-center text-[#274472] font-medium">
                  <span>View all chapters</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activities View */}
        {view === 'activity' && !selectedMainActivity && !selectedSubActivity && !selectedSubSubActivity && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">LACD Activities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lacdPhotosData.mainActivities.map((activity: MainActivity) => (
                renderActivityCard(
                  activity,
                  () => setSelectedMainActivity(activity)
                )
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Content Area */}
        {renderContent()}

        {/* Chapters View */}
        {view === 'chapters' && !selectedChapter && !selectedChapterActivity && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">LACD Chapters</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chaptersData.map((chapter: Chapter) => {
                console.log('Rendering chapter:', chapter.name, 'with activities:', chapter.activities.length);
                return renderActivityCard(
                  chapter,
                  () => setSelectedChapter(chapter)
                );
              })}
            </div>
          </div>
        )}

        {/* Chapter Activities View */}
        {selectedChapter && !selectedChapterActivity && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{selectedChapter.name}</h2>
              <p className="text-gray-600 text-lg">{selectedChapter.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedChapter.activities.map((activity) => (
                renderActivityCard(
                  activity,
                  () => setSelectedChapterActivity(activity)
                )
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}