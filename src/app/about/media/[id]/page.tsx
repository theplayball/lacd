"use client";
import { mediaData, MediaSource } from "@/data/media";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, use } from "react";

const ImageModal = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" 
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="object-contain max-h-[85vh] rounded-lg"
        />
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default function MediaDetails({ params }: { params: Promise<{ id: string }> }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const resolvedParams = use(params);
  const article = mediaData.find(a => a.id === Number(resolvedParams.id));

  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            href="/about/media"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to media
          </Link>
        </div>

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

          <div className="grid md:grid-cols-2 gap-4">
            {article.sources.map((source: MediaSource, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {source.isImage ? (
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight mb-1">{source.name}</h4>
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{source.language}</span>
                    </div>
                  </div>
                  
                  {source.isImage ? (
                    <button
                      onClick={() => setSelectedImage(source.url)}
                      className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-xs font-medium flex-shrink-0 ml-2"
                    >
                      Read
                    </button>
                  ) : (
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-xs font-medium flex-shrink-0 ml-2"
                    >
                      Read
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <ImageModal 
            src={selectedImage} 
            alt="Media Image" 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </main>
    </div>
  );
}