import Image from "next/image";
import { notFound } from "next/navigation";
import { newsData } from "@/data/news";

export default function NewsPage({
  params,
}: {
  params: { id: string };
}) {
  const article = newsData.find((n) => n.id === params.id);

  if (!article) return notFound();

  // split text into paragraphs
  const paragraphs = article.fullText.split("\n\n");

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <p className="text-sm text-gray-500 mb-2">{article.date}</p>

      <h1 className="text-3xl font-bold text-[#003366] mb-6">
        {article.title}
      </h1>

      {/* Main header image */}
      <Image
        src={article.image}
        alt={article.title}
        width={1200}
        height={650}
        className="rounded-lg object-cover w-full mb-8"
      />

      {/* Article text */}
      <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
        {paragraphs.map((para, index) => (
          <div key={index}>
            <p>{para}</p>

            {/* 👇 INSERT IMAGE AFTER FIRST PARAGRAPH ONLY */}
            {article.id === "pope-shrines" && index === 0 && (
              <figure className="my-8">
                <Image
                  src="/pope-shrines-crowd.jpeg"
                  alt="Faithful gathered during Pope Leo XIV visit"
                  width={1000}
                  height={650}
                  className="rounded-lg object-cover w-full"
                />
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Faithful gather during Pope Leo XIV’s visit to Lebanon
                </figcaption>
              </figure>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
