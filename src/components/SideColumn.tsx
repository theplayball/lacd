"use client";
import React from "react";
import Image from "next/image";

const infoCards = [
  {
    image: "/candidate.jpg",
    title: "The Candidate",
    description:
      "Interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia.",
  },
  {
    image: "/campaign.jpeg",
    title: "About Campaign",
    description:
      "Interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia.",
  },
  {
    image: "/projects.jpeg",
    title: "Our Projects",
    description:
      "Interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia.",
  },
  {
    image: "/issues.png",
    title: "Main Issues",
    description:
      "Interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia.",
  },
];

const SideColumn = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {infoCards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md text-center p-4 w-full sm:w-[45%] lg:w-[22%] hover:shadow-lg transition"
        >
          <Image
            src={card.image}
            alt={card.title}
            width={300}
            height={160}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-blue-700 font-semibold text-lg mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{card.description}</p>
          <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded">
            READ MORE
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideColumn;
