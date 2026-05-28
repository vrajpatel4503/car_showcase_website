import Image from "next/image";
import { CarCard, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="container-width relative z-20 mt-6 lg:-mt-10">
        <SearchBar />
      </section>
      <div className="my-12">
        <CarCard />
      </div>
    </main>
  );
}
