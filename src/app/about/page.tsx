// app/about/page.tsx
import React from "react";
import Link from "next/link";

export default function AboutLanding() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About LACD</h1>
      <p className="mb-4">
        Learn more about the Lebanese American Commission for Democracy by exploring our mission and media presence.
      </p>
      <div className="space-x-4">
        <Link href="/about/mission" className="text-blue-700 hover:underline">
          Mission Statement
        </Link>
        <Link href="/about/media" className="text-blue-700 hover:underline">
          LACD in the Media
        </Link>
      </div>
    </main>
  );
}
