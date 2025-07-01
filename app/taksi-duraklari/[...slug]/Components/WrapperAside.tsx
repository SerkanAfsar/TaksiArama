"use client";
import { cn, generateDistrictUrl, replaceSlugUrl } from "@/Utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import slugify from "slugify";

export default function WrapperAside({
  districtList,
  cityName,
}: {
  districtList: string[];
  cityName: string;
}) {
  const params = useParams();
  const { slug } = params;
  const activeDistrictSlug = slug?.length == 2 ? replaceSlugUrl(slug[1]) : "";

  return (
    <aside className="text-left font-semibold lg:flex-1/4">
      <ul className="grid grid-cols-none gap-3 text-sm md:grid-cols-2 lg:grid-cols-none">
        {districtList?.map((district, index) => (
          <li key={index}>
            <Link
              title={`${district} Taksi Durakları`}
              href={generateDistrictUrl(cityName, district)}
              className={cn(
                "bg-primary block rounded-md border-2 border-transparent px-3 py-4 text-black",
                activeDistrictSlug == slugify(district.toLocaleLowerCase()) &&
                  "border-black font-bold underline",
              )}
            >
              {district} Taksi Durakları
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
