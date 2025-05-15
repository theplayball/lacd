// app/activities/videos/page.tsx
import React from "react";

const videoData = [
  {
    chapter: "New York Chapter",
    videos: [
      "https://www.youtube.com/embed/VIDEO_ID_1",
      "https://www.youtube.com/embed/VIDEO_ID_2",
    ],
  },
  {
    chapter: "Los Angeles Chapter",
    videos: [
      "https://www.youtube.com/embed/VIDEO_ID_3",
    ],
  },
];

export default function VideosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">LACD Videos</h1>

      {videoData.map(({ chapter, videos }) => (
        <section key={chapter} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{chapter}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((src, idx) => (
              <div key={idx} className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow">
                <iframe
                  src={src}
                  title={`${chapter} video ${idx + 1}`}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
