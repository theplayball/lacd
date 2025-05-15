// app/activities/photos/page.tsx
import React from "react";

const photoData = [
  {
    chapter: "New York Chapter",
    photos: [
      "/photos/ny1.jpg",
      "/photos/ny2.jpg",
      "/photos/ny3.jpg",
    ],
  },
  {
    chapter: "Los Angeles Chapter",
    photos: [
      "/photos/la1.jpg",
      "/photos/la2.jpg",
    ],
  },
];

export default function PhotosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">LACD Photos</h1>

      {photoData.map(({ chapter, photos }) => (
        <section key={chapter} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{chapter}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${chapter} photo ${idx + 1}`}
                className="rounded shadow object-cover w-full h-48"
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
