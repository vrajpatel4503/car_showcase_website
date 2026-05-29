import { FilterProps } from "@/types/index.types";

export async function fetchCars(filter: FilterProps) {
  const { carName, year, carModel, fuel } = filter;
  const headers = {
    "x-rapidapi-key": "1822d1190bmshb3e07e3a5ecae84p1c33a4jsnfa9d20d4f80e",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    "Content-Type": "application/json",
  };

  const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");

  if (!carName && !carModel && !fuel && !year) {
    url.searchParams.append("make", "toyota");
  }

  if (carName) {
    url.searchParams.append("make", carName);
  }

  if (year) {
    url.searchParams.append("year", year.toString());
  }

  if (carModel) {
    url.searchParams.append("model", carModel);
  }

  if (fuel) {
    url.searchParams.append("fuel_type", fuel);
  }

  const response = await fetch(url.toString(), {
    headers,
  });

  const result = await response.json();

  return result;
}

export function capitalizeFirstLetter(text: string) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
