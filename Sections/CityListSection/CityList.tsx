"use client";

import CityItemLink from "@/Components/Common/CityItemLink";
import { CityType } from "@/Types";
import { useState } from "react";

export default function CityList({ data }: { data: CityType[] }) {
  const [cityName, setCityName] = useState<string>("");
  const filteredData = cityName
    ? data.filter(
        (a) =>
          a.sehirAd.toLocaleLowerCase().indexOf(cityName.toLocaleLowerCase()) >
          -1,
      )
    : data;
  return (
    <>
      <input
        type="text"
        placeholder="İl Yazınız..."
        className="bg-primary mx-auto block w-[300px] rounded-md border-2 border-black px-3 py-3 text-sm font-semibold text-black outline-none"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <div className="font-Poppins mt-5 grid gap-6 text-center leading-8 uppercase md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredData.map((city, index) => (
          <CityItemLink cityName={city.sehirAd} key={index} />
        ))}
      </div>
    </>
  );
}
