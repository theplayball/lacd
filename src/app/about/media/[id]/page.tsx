import { mediaData } from "@/data/media";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = {
  params: { id: string };
};

export default function MediaDetails({ params }: PageProps) {
  const article = mediaData.find(a => a.id === Number(params.id));

  if (!article) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
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
            className="block p-4 bg-white rounded-lg shadow hover:bg-blue-50 transition"
          >
            <strong>{s.name}</strong>
            <span className="ml-2 text-sm text-gray-500">
              ({s.language})
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
