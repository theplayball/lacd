// app/about/mission/page.tsx
import React from "react";

export default function MissionPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mission Statement</h1>
      <section className="p-6 bg-gray-100 rounded shadow">
        <p className="text-gray-700">
          The mission of the Lebanese American Commission for Democracy (LACD) is to collaborate with the United
          States in order to bring greater stability and security to Lebanon, the Middle East, and America by
          promoting and enforcing the principles of liberal democracy, free markets, peace, and the rule of law,
          as well as the unconditional respect for human rights.
        </p>
      </section>
    </main>
  );
}
