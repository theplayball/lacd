import { mediaData } from "@/data/media";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MediaDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const article = mediaData.find(a => a.id === Number(resolvedParams.id));

  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/about/media"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Media
          </Link>
        </div>

        {/* Media Item */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-sm text-gray-500 mb-2">{article.date}</p>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-gray-700 mb-10">
            {article.description}
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Media Coverage Sources
          </h3>

          <div className="space-y-3">
            {article.sources.map((s, i) => (
              <Link
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-50 transition"
              >
                <strong>{s.name}</strong>
                <span className="ml-2 text-sm text-gray-500">
                  ({s.language})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
