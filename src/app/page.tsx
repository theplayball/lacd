import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
          
        </h1>
        

      </main>
    </div>
  );
}
