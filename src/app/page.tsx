import HomePage from "@/components/HomePage";
import NewsEvents from "@/components/NewsEvents";

export default function Home() {
  return (
    <div className="bg-[#f2f4f9] w-full flex flex-col">
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center min-h-0">
        <HomePage />
        <div className="flex flex-col gap-10">
          <NewsEvents />
        </div>
      </div>
    </div>
  );
}


