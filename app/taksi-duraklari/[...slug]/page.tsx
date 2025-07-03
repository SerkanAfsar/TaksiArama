import TaxiItem from "@/Components/Common/TaxiItem";

import {
  GetCityDetailResultService,
  GetCityListService,
  GetDistrictListByCitySlug,
} from "@/Services/CityService";
import { CityType, TaxiType } from "@/Types";
import {
  envVariables,
  generateCityUrl,
  generateDistrictUrl,
  replaceSlugUrl,
  slugTaksiUrl,
} from "@/Utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import slugify from "slugify";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const citySlugText = replaceSlugUrl(slug[0]);
  const districtSlugUrl = slug.length == 2 ? replaceSlugUrl(slug[1]) : "";

  const cityResult = await GetCityDetailResultService({ citySlugText });

  const cityValue = cityResult.entity as CityType;

  const districtName = cityValue.taxies.find(
    (a) => slugify(a.ilce.toLocaleLowerCase()) == districtSlugUrl,
  )?.ilce;

  const value = districtName
    ? `${cityValue.sehirAd} ${districtName} Taksi Durakları | ${cityValue.sehirAd} ${districtName} Taksi Numarası | ${cityValue.sehirAd} ${districtName} En Yakın Taksi`
    : `${cityValue.sehirAd} Taksi Durakları | ${cityValue.sehirAd} Taksi Numaraları | ${cityValue.sehirAd} En Yakın Taksi`;

  const url = `${envVariables.NEXT_PUBLIC_SITE_NAME}${districtName ? generateDistrictUrl(cityValue.sehirAd, districtName) : generateCityUrl(cityValue.sehirAd)}`;

  return {
    title: value,
    description: value,
    robots: "index,follow",
    publisher: "Taksi Durakları",
    authors: [
      {
        name: "Taksi Durakları",
        url: envVariables.NEXT_PUBLIC_SITE_NAME,
      },
    ],

    openGraph: {
      title: value,
      description: value,
      url,
      locale: "tr_TR",
      siteName: "Taksi Durakları",
      authors: ["Taksi Durakları"],
      emails: ["info@taksiduraklari.net"],
    },

    twitter: {
      card: "summary",
      description: value,
      title: value,
      creator: "@taksiduraklari",
    },

    alternates: {
      canonical: url,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (!slug || !slug.length) {
    return notFound();
  }

  const citySlugText = replaceSlugUrl(slug[0]);

  const result = await GetCityDetailResultService({ citySlugText });

  if (result.statusCode == 404) {
    return notFound();
  }

  if (!result.success) {
    throw new Error(result.errors.join(","));
  }

  const city = result.entity as CityType;
  const taxiData = city.taxies as TaxiType[];

  const data =
    slug.length == 1
      ? taxiData
      : taxiData.filter(
          (a) =>
            slugify(a.ilce.toLocaleLowerCase()) ==
            replaceSlugUrl(slug[1]).toLocaleLowerCase(),
        );

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {data.map((item, index) => (
        <TaxiItem item={item} key={index} />
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  const arr: { slug: string[] }[] = [];
  const cityList = await GetCityListService();
  if (cityList.success) {
    for (const city of cityList.entities as CityType[]) {
      const cityUrl = slugTaksiUrl(city.sehirAd);
      arr.push({
        slug: [cityUrl],
      });

      const cityDetail = await GetCityDetailResultService({
        citySlugText: city.sehirSlug,
      });

      if (cityDetail.success) {
        const districtList = GetDistrictListByCitySlug(
          cityDetail.entity as CityType,
        );
        if (districtList.length) {
          for (const district of districtList) {
            const districtUrl = slugTaksiUrl(district);
            arr.push({
              slug: [cityUrl, districtUrl],
            });
          }
        }
      }
    }
  }

  return arr;
}

export const revalidate = 7200;
export const dynamic = "force-static";
