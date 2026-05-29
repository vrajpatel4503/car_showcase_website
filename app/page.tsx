import Image from "next/image";
import { CarCard, Hero, SearchBar } from "@/components";
import { HomeProps } from "@/types/index.types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    carName: searchParams.cn || "",
    carModel: searchParams.cm || "",
    fuel: searchParams.f || "",
    year: searchParams.y ? Number(searchParams.y) : undefined,
  });

  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="container-width relative z-20 mt-6 lg:-mt-10">
        <SearchBar />
      </section>
      <div className="my-12 container-width">
        {allCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCars.map((car: any, index: number) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">No Cars Found</h2>
          </div>
        )}
      </div>
    </main>
  );
}
