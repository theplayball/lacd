// app/about/media/page.tsx
import React from "react";
import Link from "next/link";

export default function MediaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">LACD in the Media</h1>
      <section className="p-6 bg-gray-100 rounded shadow space-y-6">

        {/* Example of links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Featured Articles</h2>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>
              <Link href="https://example.com/article1" target="_blank" className="hover:underline">
                Understanding Lebanon’s Democracy
              </Link>
            </li>
            <li>
              <Link href="https://example.com/article2" target="_blank" className="hover:underline">
                The Role of LACD in US Foreign Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Example image */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Gallery</h2>
          <img
            src="/media/lacd-event.jpg"
            alt="LACD Event"
            className="rounded shadow max-w-full h-auto"
          />
        </div>

        {/* Example video */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Video Coverage</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="LACD Video"
              allowFullScreen
              className="w-full h-full rounded"
            />
          </div>
        </div>

      </section>
    </main>
  );
}
