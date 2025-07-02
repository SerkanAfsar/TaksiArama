import { generateCityUrl, generateDistrictUrl } from "@/Utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BreadCrumb({
  cityName,
  districtName,
}: {
  cityName: string;
  districtName?: string;
}) {
  return (
    <section className="font-OpenSans relative z-20 inline-flex h-60 w-full flex-col items-center justify-center bg-[#2C2C2C] bg-[url(/assets/images/innerbg.jpg)] bg-cover bg-center text-center text-white after:absolute after:inset-0 after:z-[-1] after:bg-[url(/assets/images/navbgrepeat.png)] after:bg-repeat md:h-40">
      <nav className="breadCrumb">
        <ul>
          <li>
            <Link href={"/"} title="Taksi Durakları Anasayfa">
              Anasayfa
            </Link>
            <ChevronRight />
          </li>
          <li>
            <Link href={"/taksi-duraklari"} title="Taksi Durakları Listesi">
              Taksi Durakları
            </Link>
            <ChevronRight />
          </li>
          <li>
            <Link
              href={generateCityUrl(cityName)}
              title={`${cityName} Taksi Durakları`}
            >
              {cityName}
            </Link>
            {districtName && <ChevronRight />}
          </li>
          {districtName && (
            <li>
              <Link
                href={generateDistrictUrl(cityName, districtName)}
                title={`${cityName} ${districtName} Taksi Durakları`}
              >
                {districtName}
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <h1 className="font-fireSans mt-5 text-4xl font-bold text-white uppercase">
        {cityName} {districtName && districtName} Taksi Durakları Listesi
      </h1>
    </section>
  );
}
