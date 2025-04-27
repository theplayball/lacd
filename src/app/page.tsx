import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import NewsEvents from "@/components/NewsEvents";

export default function Home() {
  return (
    <div className="bg-[#f2f4f9] relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <HomePage />
        <div className="flex flex-col gap-10">
          <NewsEvents />
        </div>
      </main>
      <Footer />
    </div>
  );
}
