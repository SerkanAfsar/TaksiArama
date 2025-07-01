import { generateCityUrl } from "@/Utils";
import Link from "next/link";

export default function CityItemLink({ cityName }: { cityName: string }) {
  return (
    <Link
      className="bg-primary flex h-full min-h-28 w-full items-center justify-center rounded-md p-6 font-bold text-black shadow transition-all hover:scale-105 hover:shadow-2xl"
      title={`${cityName} Taksi Durakları`}
      href={generateCityUrl(cityName)}
    >
      {cityName} Taksi Durakları
    </Link>
  );
}
