import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <HomePage />
      </main>
    </div>
  );
}
